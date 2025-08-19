import { useState } from 'react';
import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import Fish from './component/Fish';
import { HOME } from '@src/const/text';
import { useNavigate } from 'react-router-dom';
import MainLoading from '@src/component/MainLoading';


const Home = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const myId = sessionStorage.getItem("myId");

    const goToSignup = () => {
        navigate('/signup');
    }

    const goToSignin = () => {
        navigate('/signin');
    }

    return (
        <div className={style.parent}>
            {isLoading && <MainLoading />}
            <div className={style.headerLeft}><HeaderLeft header={HOME} /></div>
            <div className={style.headerTop}><HeaderTop header={HOME} /></div>
            <div className={style.main}>
                <div className={style.main1}>
                    {myId === null && <div className={style.notificate}>
                        <div>
                            <div>Đăng ký nhận ngay 20k</div>
                            <div onClick={() => goToSignup()}>Đăng ký</div>
                            <div onClick={() => goToSignin()}>Đăng nhập</div>
                        </div>
                    </div>}
                    <div><Fish /></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
