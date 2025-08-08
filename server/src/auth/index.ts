import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken, verifyRefreshToken , generateAccessToken } from '@src/token';
import { serviceRedlock } from '@src/connect';
import { SignOptions } from 'jsonwebtoken';
import { redis_server } from '@src/connect';

let secure_cookie = false;
if (process.env.NODE_ENV !== 'development') {
    secure_cookie = true;
}

async function authentication(req: Request, res: Response, next: NextFunction) {
    const { refreshToken, accessToken, loginCode, id } = req.cookies;
    // const keyServiceRedis = `token-${id}-${loginCode}`;
    const lockKey = `redlock-token-${id}-${loginCode}`;

    const verify_accessToken = verifyAccessToken(accessToken);
    const verify_refreshToken = verifyRefreshToken(refreshToken);
    if (verify_accessToken) {
        next();
    } else {
        if (verify_refreshToken) {
            const lock = await serviceRedlock.acquire([lockKey], 30000); 
            const myJwtPayload = verify_refreshToken;
            const signOptions: SignOptions = {
                expiresIn: '5m',
            };
            const new_accessToken = generateAccessToken(myJwtPayload, signOptions)

            res.cookie('id', id, {
                httpOnly: true,
                secure: secure_cookie,
                expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                // signed: true
            }).cookie('accessToken', new_accessToken, {
                httpOnly: true, 
                secure: secure_cookie,
                expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
            })

            await lock.release();

        } else {
            res.send("dang nhap lai")
        }
    }
}

export default authentication;
