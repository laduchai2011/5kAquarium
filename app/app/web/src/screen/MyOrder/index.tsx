import { useState, useEffect } from 'react';
import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import Control from './Control';
import List from './List';
import Total from './Total';
import { MY_ORDER } from '@src/const/text';
import { useGetMyOrdersQuery } from '@src/redux/query/orderRTK';
import { OrderField, PagedOrderField } from '@src/dataStruct/order';
import { MyOrderContext } from './context';
import { MyOrderContextInterface } from './type';
import { MessageDataInterface } from '@src/component/MessageDialog/type';



const MyOrder = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<PagedOrderField | undefined>(undefined);
    const [page, setPage] = useState<string>('1');
    const [size, setSize] = useState<string>('10')
    const [message, setMessage] = useState<MessageDataInterface>({
        message: '',
        type: 'normal'
    })
    
    const {
        data: data_, 
        // isFetching, 
        isLoading: isLoading_,
        isError, 
        error
    } = useGetMyOrdersQuery({page: page, size: size});
    
    useEffect(() => {
        if (isError && error) {
            console.error(error);
        }
    }, [isError, error])

    useEffect(() => {
        setIsLoading(isLoading_);
    }, [isLoading_])

    useEffect(() => {
        setData(data_)
    }, [data_]) 


    const valueContext: MyOrderContextInterface = {
        setIsLoading,
        setMessage
    }

    return (
        <MyOrderContext.Provider value={valueContext}>
            <div className={style.parent}>
                <div className={style.headerLeft}><HeaderLeft header={MY_ORDER} /></div>
                <div className={style.headerTop}><HeaderTop header={MY_ORDER} /></div>
                <div>
                    <div className={style.main}>
                        <div>
                            <Control />
                            <List />
                            <Total />
                        </div>
                    </div>
                </div>
            </div>
        </MyOrderContext.Provider> 
    )
}

export default MyOrder;