import { memo, FC } from 'react';
import style from './style.module.scss';
import { GrClose } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { ContactField } from '@src/dataStruct/account';



const Row: FC<{contact: ContactField}> = ({contact}) => {
    return (
        <div className={style.parent}>
            <div className={style.infor}>
                <div>
                    <div>Tên</div>
                    <div>{contact.name}</div>
                </div>
                <div>
                    <div>Số điện thoại</div>
                    <div>{contact.phone}</div>
                </div>
                <div>
                    <div>Địa chỉ</div>
                    <div>{contact.address}</div>
                </div>
            </div>
            <div>
                <input type='checkbox' />
            </div>
            <div className={style.icons}>
                <FaEdit title='Chỉnh sửa' size={20} color='greenyellow' />
                <GrClose title='Xóa' size={20} />
            </div>
        </div>
    )
}

export default memo(Row);