import React from 'react';
import './style.css';
import Row from './component/Row';


const Table: React.FC = () => {
    
    return (
        <div className="List-Table">
            <div className='List-row-header'>
                <div className='List-row-index'>Stt</div>
                <div className='List-row-name'>Tên</div>
                <div className='List-row-size'>Kích thước</div>
                <div className='List-row-remain'>Còn hàng</div>
                <div className='List-row-money'>Tiền</div>
            </div>
            <Row />
            <Row />
            <Row />
        </div>
    );
};

export default Table;
