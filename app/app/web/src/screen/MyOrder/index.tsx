import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import Control from './Control';
import List from './List';
import Total from './Total';
import { MY_ORDER } from '@src/const/text';

const MyOrder = () => {
    return (
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
    )
}

export default MyOrder;