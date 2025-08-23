import React from 'react';
import './style.css';
import Header from '../Header';
import Table from './component/Table';
import AddIntoList from './component/AddIntoList';


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
                        <AddIntoList />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default List;
