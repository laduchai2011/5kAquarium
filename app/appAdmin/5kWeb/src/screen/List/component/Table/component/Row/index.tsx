import React, {useRef} from 'react';
import './style.css';


const Row: React.FC = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const detail_element = useRef<HTMLDivElement | null>(null);

    const handleSelect = () => {
        if (parent_element.current && detail_element.current) {
            parent_element.current.classList.toggle('active');
            detail_element.current.classList.toggle('show');
        }
    }

    return (
        <div className="List-Table-Row" ref={parent_element} onClick={() => handleSelect()}>
            <div className='List-Row-row'>
                <div className='List-Row-row-index'>1</div>
                <div className='List-Row-row-name'>Tên</div>
                <div className='List-Row-row-size'>Kích thước</div>
                <div className='List-Row-row-remain'>Còn hàng</div>
                <div className='List-Row-row-money'>Tiền</div>
            </div>
            <div className='List-Row-detail' ref={detail_element}>sedfsdfsdf</div>
        </div>
    );
};

export default Row;
