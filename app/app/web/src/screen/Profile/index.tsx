import { useState } from 'react';
import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import Avatar from './Avatar';
import OverView from './OverView';
import Contact from './Contact';
import AddContact from './AddContact';
import { PROFILE } from '@src/const/text';
import { ProfileContext } from './context';
import { ProfileContextInterface } from './type';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [isShow_AddContact, set_isShow_AddContact] = useState<boolean>(false)
    
    const valueContext: ProfileContextInterface = {
        isShow_AddContact,
        set_isShow_AddContact
    }

    const myId = sessionStorage.getItem("myId");

    if (myId !== null) {
        return (
            <ProfileContext.Provider value={valueContext}>
                <div className={style.parent}>
                    <AddContact />
                    <div className={style.headerLeft}><HeaderLeft header={PROFILE} /></div>
                    <div className={style.headerTop}><HeaderTop header={PROFILE} /></div>
                    <div className={style.main}>
                        <div className={style.main1}>
                            <Avatar />
                            <OverView />
                            <Contact />
                        </div>
                    </div>
                </div>
            </ProfileContext.Provider>
        )
    }

    return (
        <div className={style.parent1}>
            <div> 
                <div>Bạn chưa đăng nhập</div>
                <button onClick={() => navigate('/signin')}>Đăng nhập</button>
            </div>
        </div>
    )
}

export default Profile;