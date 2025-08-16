import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import Avatar from './Avatar';
import OverView from './OverView';
import { PROFILE } from '@src/const/text';

const Profile = () => {
    return (
        <div className={style.parent}>
            <div className={style.headerLeft}><HeaderLeft /></div>
            <div className={style.headerTop}><HeaderTop header={PROFILE} /></div>
            <div className={style.main}>
                <div className={style.main1}>
                    <Avatar />
                    <OverView />
                </div>
            </div>
        </div>
    )
}

export default Profile;