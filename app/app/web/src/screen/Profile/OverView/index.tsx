import style from './style.module.scss';


const OverView = () => {
    return (
        <div className={style.parent}>
            <div>
                <div>Vị trí của bạn:</div>
                <div>1</div>
            </div>
            <div>
                <div>Tổng số đơn:</div>
                <div>100</div>
            </div>
            <div>
                <div>Tổng số tiền:</div>
                <div className={style.moneyNumber}>1.000.000</div>
            </div>
            <div>
                <div>Đơn tháng trước:</div>
                <div>20</div>
            </div>
            <div>
                <div>Đơn tháng này:</div>
                <div className={style.orderThisMonth}>3</div>
            </div>
        </div>
    )
}

export default OverView;