import { mssql_server } from '@src/connect';
import sql from 'mssql';
import { Request, Response, NextFunction } from 'express';
import MutateDB_Signup from '../../mutateDB/signup';
// import my_interface from '@src/interface';
import { AccountField } from '@src/dataStruct/account';
import { MyResponse } from '@src/dataStruct/response';

class Handle_Signup {
    private _mssql_server = mssql_server;
    private _mutateDB_signup;
    private _connection_pool: sql.ConnectionPool | undefined;

    constructor() {
        this._mutateDB_signup = new MutateDB_Signup();
    }

    setup = (req: Request<Record<string, never>, unknown, AccountField>, res: Response, next: NextFunction) => {
        const signupInfor = req.body;

        const myResponse: MyResponse<AccountField> = {
            isSuccess: false
        };

        // const resData: my_interface['router_res_type'] = {
        //     message: '',
        //     status: '',
        //     error: '',
        //     data: '',
        // };

        this._connection_pool = this._mssql_server.get_connectionPool();
        if (this._connection_pool !== undefined) {
            this._mutateDB_signup.set_connection_pool(this._connection_pool);
            this._mutateDB_signup.set_data(signupInfor);
            next();
        } else {
            myResponse.message = 'Kết nối cơ sở dữ liệu không thành công !'
            // resData.message = 'Connect BD(mssql) NOT successly !';
            // resData.status = 'error';
            // resData.error = null;
            // resData.data = null;
            res.json(myResponse);
        }
    };

    isAccountCheckUserName = async (
        req: Request<Record<string, never>, unknown, AccountField>,
        res: Response,
        next: NextFunction
    ) => {
        const signupInfor = req.body;

        const myResponse: MyResponse<AccountField> = {
            isSuccess: false
        };

        // const resData: my_interface['router_res_type'] = {
        //     message: '',
        //     status: '',
        //     error: '',
        //     data: '',
        // };

        const is = await this._mutateDB_signup.isAccountCheckUserName(signupInfor.userName);

        if (is) {
            myResponse.message = 'Tên người dùng đã được sử dụng !';
            // resData.message = 'User name is used !';
            // resData.status = 'notify';
            // resData.error = null;
            // resData.data = null;
            res.json(myResponse);
        } else {
            next();
        }
    };

    isAccountCheckPhone = async (
        req: Request<Record<string, never>, unknown, AccountField>,
        res: Response,
        next: NextFunction
    ) => {
        const signupInfor = req.body;

        const myResponse: MyResponse<AccountField> = {
            isSuccess: false
        };

        // const resData: my_interface['router_res_type'] = {
        //     message: '',
        //     status: '',
        //     error: '',
        //     data: '',
        // };

        const is = await this._mutateDB_signup.isAccountCheckPhone(signupInfor.phone);

        if (is) {
            myResponse.message = 'Số điện thoại đã được sử dụng !';
            // resData.message = 'Phone number is used !';
            // resData.status = 'notify';
            // resData.error = null;
            // resData.data = null;
            res.json(myResponse);
        } else {
            next();
        }
    };

    main = async (req: Request<Record<string, never>, unknown, AccountField>, res: Response) => {
        
        const myResponse: MyResponse<AccountField> = {
            isSuccess: false
        };
        
        // const resData: my_interface['router_res_type'] = {
        //     message: '',
        //     status: '',
        //     error: '',
        //     data: '',
        // };

        // const connection_pool = this._mssql_server.get_connectionPool();
        if (this._connection_pool !== undefined) {
            // this._mutateDB_signup.set_connection_pool(connection_pool);
            // this._mutateDB_signup.set_data(signupInfor);
            try {
                const result = await this._mutateDB_signup.run();
                if (result?.recordset.length && result?.recordset.length > 0) {
                    myResponse.message = 'Đăng ký thành công !';
                    myResponse.isSuccess = true;
                    myResponse.data = result?.recordset[0]
                } else {
                    myResponse.message = 'Đăng ký KHÔNG thành công !';
                }
                // resData.message = 'Signup success !';
                // resData.status = 'success';
                // resData.error = null;
                // resData.data = result;
            } catch (error) {
                myResponse.message = 'Đăng ký thất bại !';
                myResponse.err = error;
                // resData.message = 'Signup failure !';
                // resData.status = 'failure';
                // resData.error = error;
                // resData.data = null;
            }
        }

        res.json(myResponse);
    };
}

export default Handle_Signup;
