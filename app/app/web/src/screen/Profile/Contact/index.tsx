import style from './style.module.scss';
import { GrClose } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";


const Contact = () => {
    return (
        <div className={style.parent}>
            <div className={style.header}>
                Liên hệ
            </div>
            <div className={style.inforContainer}>
                <div className={style.inforRow}>
                    <div className={style.infor}>
                        <div>
                            <div>Tên</div>
                            <div>name</div>
                        </div>
                        <div>
                            <div>Số điện thoại</div>
                            <div>name</div>
                        </div>
                        <div>
                            <div>Địa chỉ</div>
                            <div>name</div>
                        </div>
                    </div>
                    <div>
                        <input type='checkbox' />
                    </div>
                    <div className={style.icon}>
                        <FaEdit title='Chỉnh sửa' size={20} color='greenyellow' />
                        <GrClose title='Xóa' size={20} />
                    </div>
                </div>
                <div className={style.inforRow}>
                    <div className={style.infor}>
                        <div>
                            <div>Tên</div>
                            <div>name</div>
                        </div>
                        <div>
                            <div>Số điện thoại</div>
                            <div>name</div>
                        </div>
                        <div>
                            <div>Địa chỉ</div>
                            <div>name name name name name name name name name name name</div>
                        </div>
                    </div>
                    <div>
                        <input type='checkbox' />
                    </div>
                    <div className={style.icon}>
                        <FaEdit title='Chỉnh sửa' size={20} color='greenyellow' />
                        <GrClose title='Xóa' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;