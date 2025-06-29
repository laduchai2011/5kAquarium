import React from 'react';
import './style.css';
import avatarnull from '@src/assets/avatar/avatarnull.png';

const Right: React.FC = () => {
    return (
        <div className="Header_Right">
            <div>Đăng nhập ở đây nè !!!!!!</div>
            <img src={avatarnull} alt="avatar" />
        </div>
    );
};

export default Right;
