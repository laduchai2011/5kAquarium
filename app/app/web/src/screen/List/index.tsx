import { useEffect, useState } from 'react';
import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import { LIST } from '@src/const/text';
import Row from './Row';
import { useGetFishCodesAccordingtoNameQuery } from '@src/redux/query/fishCodeRTK';
import MainLoading from '@src/component/MainLoading';
import MessageDialog from '@src/component/MessageDialog';
import { MessageDataInterface } from '@src/component/MessageDialog/type';


const List = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<MessageDataInterface>({
        message: '',
        type: 'normal'
    })

    const {
        data, 
        // isFetching, 
        isLoading: isLoading_,
        isError, 
        error
    } = useGetFishCodesAccordingtoNameQuery({page: '1', size: '10'});
    useEffect(() => {
        if (isError && error) {
            console.error(error);
            setMessage({
                message: 'Tải mã cá không thành công !',
                type: 'error'
            })
        }
    }, [isError, error, setMessage])
    useEffect(() => {
        setIsLoading(isLoading_);
    }, [isLoading_, setIsLoading])
    useEffect(() => {
        const resData = data;
    }, [data]) 

    const handleCloseMessage = () => {
        setMessage({...message, message: ''})
    }

    return (
        <div className={style.parent}>
            <div className={style.headerLeft}><HeaderLeft header={LIST} /></div>
            <div className={style.headerTop}><HeaderTop header={LIST} /></div>
            {isLoading && <MainLoading />}
            {message.message.length > 0 && <MessageDialog message={message.message} type={message.type} onClose={() => handleCloseMessage()} />}
            <div className={style.main}>
                <div className={style.main1}>
                    <Row isHeader={true} />
                    <Row isHeader={false} />
                    <Row isHeader={false} />
                    <Row isHeader={false} />
                    <Row isHeader={false} />
                </div>
            </div>
        </div>
    )
}

export default List;