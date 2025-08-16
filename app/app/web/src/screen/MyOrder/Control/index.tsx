import style from './style.module.scss';
import { GrFormNext, GrFormPrevious  } from "react-icons/gr";


const Control = () => {
    return (
        <div className={style.parent}>
            <div>
                <div className={style.iconContainer}>
                    <GrFormPrevious size={20} />
                    <GrFormNext size={20} />
                </div>
                <div>1/10</div>
                <div className={style.selectContainer}>
                    <select>
                        <option value="all">Tất cả</option>
                        <option value="cat">Đã mua</option>
                        <option value="hamster">Đã nhận</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Control;