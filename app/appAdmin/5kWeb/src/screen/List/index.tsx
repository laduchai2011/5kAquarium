import React from 'react';
import './style.css';
import Header from '../Header';
import Table from './component/Table';
import AddFishCode from './component/AddFishCode';


const List: React.FC = () => {
    

    return (
        <div className="List">
            <div>
                <Header />
            </div>
            <div className='List-main'>
                <div>
                    <div>
                        <Table />
                    </div>
                    <div>
                        <AddFishCode />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default List;
