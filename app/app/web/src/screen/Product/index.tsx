import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';
import { GrFormAdd, GrFormSubtract  } from "react-icons/gr";
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import { PRODUCT } from '@src/const/text';
import { useGetAProductWithIdQuery } from '@src/redux/query/productRTK';
import { ProductField } from '@src/dataStruct/product';
import MainLoading from '@src/component/MainLoading';

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductField | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        data, 
        // isFetching, 
        isLoading: isLoading_GetAProductWithId,
        isError, 
        error
    } = useGetAProductWithIdQuery({id: id || ''});
    
    useEffect(() => {
        if (isError && error) {
            console.error(error);
        }
    }, [isError, error])

    useEffect(() => {
        setIsLoading(isLoading_GetAProductWithId)
    }, [isLoading_GetAProductWithId])

    useEffect(() => {
        if (data) {
            setProduct(data)
        }
    }, [data]) 

    return (
        <div className={style.parent}>
            {isLoading && <MainLoading />}
            <div className={style.headerLeft}><HeaderLeft header={PRODUCT} /></div>
            <div className={style.headerTop}><HeaderTop header={PRODUCT} /></div>
            { product ?
                <div className={style.main}>
                    <div className={style.product}>
                        <div className={style.imageContainer}>
                            <img src={product?.image} alt='' />
                        </div>
                        <div className={style.inforContainer}>
                            <span className={style.title}>{product?.title}</span>
                            <div className={style.infor}>
                                <div>
                                    <div>Tên</div>
                                    <div>{product?.name}</div>
                                </div>
                                <div>
                                    <div>Size</div>
                                    <div>{product?.size}</div>
                                </div>
                                <div>
                                    <div>Giảm giá</div>
                                    <div>{product?.discount}</div>
                                </div>
                                <div>
                                    <div>Số lượng</div>
                                    <div>{product?.amount}</div>
                                </div>
                                <div>
                                    <div>Đã bán</div>
                                    <div>{product?.sold}</div>
                                </div>
                                <div>
                                    <div>Giá</div>
                                    <div>{product?.price}</div>
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
                </div> :
                <div className={style.notifyNOTproduct}><h2>Không có sản phẩm nào được tìm thấy</h2></div>
            }
        </div>
    );
};

export default Product;
