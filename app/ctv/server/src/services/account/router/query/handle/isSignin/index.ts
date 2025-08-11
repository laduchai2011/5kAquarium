
import { Request, Response } from 'express';
import { MyResponse } from '@src/dataStruct/response';
import { verifyRefreshToken } from '@src/token';


const myResponse: MyResponse<unknown> = {
        isSuccess: false
    };

class Handle_IsSignin {

    main = async (req: Request, res: Response) => {
        const { refreshToken } = req.cookies;
        const verify_refreshToken = verifyRefreshToken(refreshToken);

        if (verify_refreshToken) {
            myResponse.isSignin = true
        } else {
            myResponse.isSignin = false
        }

        res.json(myResponse)
    };
}

export default Handle_IsSignin;
