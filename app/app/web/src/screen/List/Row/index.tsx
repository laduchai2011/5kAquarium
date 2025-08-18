import { FC } from 'react'
import style from './style.module.scss';

const Row: FC<{isHeader: boolean}> = ({isHeader}) => {

    if (isHeader) {
        return (
            <div className={style.parent}>
                <div className={style.index} style={{fontWeight: 600}}>Stt</div>
                <div className={style.name} style={{fontWeight: 600}}>Tên</div>
                <div className={style.size} style={{fontWeight: 600}}>Kích thước</div>
                <div className={style.remain} style={{fontWeight: 600}}>Còn hàng</div>
                <div className={style.price} style={{fontWeight: 600}}>Tiền</div>
            </div>
        )
    }
    return (
        <div className={style.parent}>
            <div className={style.index}>100</div>
            <div className={style.name}>Tên</div>
            <div className={style.size}>11-12</div>
            <div className={style.remain}>5000</div>
            <div className={style.price}>Tiền</div>
        </div>
    )
}

export default Row;