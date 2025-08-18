import style from './style.module.scss';


const Row = () => {
     return (
        <div className={style.parent}>
            <div><input type='checkbox' /></div>
            <div>
                <div className={style.index}>10</div>
                <div className={style.image}>
                    <img src='https://r2.nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg' alt='' />
                </div>
                <div className={style.title}>ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang</div>
                <div className={style.amount}>so luong</div>
                <div className={style.money}>tien</div>
            </div>
            <div>Đã mua</div>
        </div>
    )
}

export default Row;