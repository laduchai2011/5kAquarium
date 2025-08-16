import style from './style.module.scss';
import { MdEdit } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";

const Avatar = () => {
    return (
        <div className={style.parent}>
            <div className={style.main}>
                <div className={style.avatarContainer}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnhFBNw9Io0hHvtv8QzH_euzwGbRJv_IC9A&s' alt='' />
                    <IoAddCircleOutline title='Chỉnh sửa' color='gray' size={30} />
                </div>
                <div className={style.nameContainer}>
                    <div className={style.name}>ten ten ten</div>
                    <div className={style.editName} title='Chỉnh sửa'><MdEdit size={30} color='greenyellow' /></div>
                </div>
            </div>
        </div>
    )
}

export default Avatar;