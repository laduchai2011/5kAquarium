import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.scss';
import { GrFormAdd, GrFormSubtract  } from "react-icons/gr";
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import { PRODUCT } from '@src/const/text';
import { useGetAProductWithIdQuery } from '@src/redux/query/productRTK';
import { useGetAFishCodeWithIdQuery } from '@src/redux/query/fishCodeRTK';
import { ProductField } from '@src/dataStruct/product';
import { FishCodeField } from '@src/dataStruct/fishCode';
import MainLoading from '@src/component/MainLoading';
import MessageDialog from '@src/component/MessageDialog';
import { MessageDataInterface } from '@src/component/MessageDialog/type';
import TextEditorDisplay from '@src/component/TextEditorDisplay';

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductField | undefined>(undefined);
    const [fishCode, setFishCode] = useState<FishCodeField | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<MessageDataInterface>({
        message: '',
        type: 'normal'
    })

    const {
        data: data_product, 
        // isFetching, 
        isLoading: isLoading_product,
        isError: isError_product, 
        error: error_product
    } = useGetAProductWithIdQuery({id: id || ''}, { skip: !id });
    useEffect(() => {
        if (isError_product && error_product) {
            console.error(error_product);
            setMessage({
                message: 'Sản phầm không được tìm thấy !',
                type: 'error'
            })
        }
    }, [isError_product, error_product])
    useEffect(() => {
        setIsLoading(isLoading_product)
    }, [isLoading_product])
    useEffect(() => {
        if (data_product) {
            setProduct(data_product)
        }
    }, [data_product]) 

    const {
        data: data_fishCode, 
        // isFetching, 
        isLoading: isLoading_fishCode,
        isError: isError_fishCode, 
        error: error_fishCode
    } = useGetAFishCodeWithIdQuery({id: product?.fishCodeId.toString() || ''}, { skip: !product?.fishCodeId });
    console.log('fishCodeId', product)
    useEffect(() => {
        if (isError_fishCode && error_fishCode) {
            console.error(error_fishCode);
            setMessage({
                message: 'Sản phầm không được tìm thấy !',
                type: 'error'
            })
        }
    }, [isError_fishCode, error_fishCode])
    useEffect(() => {
        setIsLoading(isLoading_fishCode)
    }, [isLoading_fishCode])
    useEffect(() => {
        if (data_fishCode) {
            setFishCode(data_fishCode)
        }
    }, [data_fishCode]) 

    const handleCloseMessage = () => {
        setMessage({...message, message: ''})
    }

    return (
        <div className={style.parent}>
            {isLoading && <MainLoading />}
            {message.message.length > 0 && <MessageDialog message={message.message} type={message.type} onClose={() => handleCloseMessage()} />}
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
                                    <div>{product?.sold || 0}</div>
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
                            {fishCode?.detail && <TextEditorDisplay data={fishCode?.detail} />}
                        </div>
                    </div>
                </div> :
                <div className={style.notifyNOTproduct}><h2>Không có sản phẩm nào được tìm thấy</h2></div>
            }
        </div>
    );
};

export default Product;
