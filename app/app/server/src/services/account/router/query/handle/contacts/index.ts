import { mssql_server } from '@src/connect';
import { Request, Response } from 'express';
import QueryDB_Contacts from '../../queryDB/contacts';
import { MyResponse } from '@src/dataStruct/response';
import { ReqInterface } from './type';
import { ContactField } from '@src/dataStruct/account';


class Handle_Query_Contacts {
    private _mssql_server = mssql_server;

    constructor() {}

    main = async (req: Request<unknown, unknown, unknown, ReqInterface>, res: Response) => {
        const userId = req.query.userId;

        const myResponse: MyResponse<ContactField[]> = {
            isSuccess: false
        };

        const queryDB_contacts = new QueryDB_Contacts();

        if (userId && !isNaN(Number(userId))) {
            queryDB_contacts.setUserId(Number(userId))
        } else {
            myResponse.message = 'Id người dùng không chính xác !';
            return res.status(500).json(myResponse);
        }

        const conn = this._mssql_server.get_connectionPool();
        if (conn) {
            queryDB_contacts.set_connection_pool(conn)
        } else {
            myResponse.message = 'Kết nối cơ sở dữ liệu không thành công !';
            return res.status(500).json(myResponse);
        }

        const result = await queryDB_contacts.run();
        if (result?.recordset.length && result?.recordset.length > 0) {
            myResponse.data = result?.recordset;
            myResponse.message = 'Lấy dữ liệu thành công !';
            myResponse.isSuccess = true;
            return res.json(myResponse);
        } else {
            myResponse.message = 'Lấy dữ liệu KHÔNG thành công !';
            return res.status(500).json(myResponse);
        }
    };
}

export default Handle_Query_Contacts;
