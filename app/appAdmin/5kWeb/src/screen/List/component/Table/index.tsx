import React, { useEffect, useState } from 'react';
import './style.css';
import Row from './component/Row';
import { useGetFishCodesQuery } from '@src/redux/query/fishCodeRTK';
import type { FishCodeField } from '@src/dataStruct/fishCode';


const Table: React.FC = () => {
    const [fishCodes, setFishCodes] = useState<FishCodeField[]>([])

    const {
        data, 
        // isFetching, 
        // isLoading,
        isError, 
        error
    } = useGetFishCodesQuery({page: '1', size: '10'});

    useEffect(() => {
        if (isError && error) {
            console.error(error);
        }
    }, [isError, error])


    useEffect(() => {
        const resData = data;
        if (resData) {
            setFishCodes(resData.items)
        }
    }, [data]) 

    const list_fishCode = fishCodes.map((item, index) => {
        return <Row key={item.id} data={item} index={index} />
    })
    
    return (
        <div className="List-Table">
            <div className='List-row-header'>
                <div className='List-row-index'>Stt</div>
                <div className='List-row-name'>Tên</div>
                <div className='List-row-size'>Kích thước</div>
                <div className='List-row-remain'>Còn hàng</div>
                <div className='List-row-money'>Tiền</div>
                <div className='List-row-btnContainer'></div>
            </div>
           <div>
                { list_fishCode }
           </div>
        </div>
    );
};

export default Table;
