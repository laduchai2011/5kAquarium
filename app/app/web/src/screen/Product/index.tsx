import style from './style.module.scss';
import { GrFormAdd, GrFormSubtract  } from "react-icons/gr";


const Product = () => {


    return (
        <div className={style.parent}>
            <div className={style.main}>
                <div className={style.product}>
                    <div className={style.imageContainer}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfCyBur6AHW-uxj-NeH5vR7RJGa9kvMghZw&s' alt='' />
                    </div>
                    <div className={style.inforContainer}>
                        <span className={style.title}>ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang</span>
                        <div className={style.infor}>
                            <div>
                                <div>Tên</div>
                                <div>hong my</div>
                            </div>
                            <div>
                                <div>Size</div>
                                <div>hong my</div>
                            </div>
                            <div>
                                <div>Số lượng</div>
                                <div>hong my</div>
                            </div>
                            <div>
                                <div>Đã bán</div>
                                <div>hong my</div>
                            </div>
                            <div>
                                <div>Giá</div>
                                <div>hong my</div>
                            </div>
                        </div>
                        <div className={style.order}>
                            <div className={style.ordertitle}>Đặt hàng tại đây, bạn đã đặt 10</div>
                            <div className={style.buttonContainer}>
                                <div>
                                    <div>
                                        <div className={style.amountInput}>
                                            <div><GrFormSubtract size={30} /></div>
                                            <div><input /></div>
                                            <div><GrFormAdd size={30} /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.orderBtn}>Đặt hàng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.describe}>
                    <div>Mô tả</div>
                    <div>
                        <pre>dsfadas</pre> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
