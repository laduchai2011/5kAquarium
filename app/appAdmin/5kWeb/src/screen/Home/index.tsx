import React from 'react';
import './style.css';
import Header from '../Header';
import OverView from './component/OverView';
import MyChart from './component/MyChart';
import SalerRank from './component/SalerRank';

const Home: React.FC = () => {
    return (
        <div className="Home">
            <div>
                <Header />
            </div>
            <div className='Home-main'>
                <div className='Home-main1'>
                    <OverView />
                    <MyChart />
                    <SalerRank />
                </div>
            </div>
        </div>
    );
};

export default Home;
