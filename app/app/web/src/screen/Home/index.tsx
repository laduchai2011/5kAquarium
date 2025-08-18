import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import Fish from './component/Fish';
import { HOME } from '@src/const/text';


const Home = () => {
    return (
        <div className={style.parent}>
            <div className={style.headerLeft}><HeaderLeft header={HOME} /></div>
            <div className={style.headerTop}><HeaderTop header={HOME} /></div>
            <div className={style.main}>
                <div>
                    <div><Fish /></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
