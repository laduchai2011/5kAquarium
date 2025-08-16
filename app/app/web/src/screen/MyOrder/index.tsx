import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import Control from './Control';
import List from './List';

const MyOrder = () => {
    return (
        <div className={style.parent}>
            <div className={style.headerLeft}><HeaderLeft /></div>
            <div className={style.headerTop}><HeaderTop /></div>
            <div>
                <div className={style.main}>
                    <div>
                        <Control />
                        <List />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrder;