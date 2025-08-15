import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const Box = () => {
    const navigate = useNavigate();

    const goToDetail = () => {
        navigate('/product')
    }

    return (
        <div className={style.parent} onClick={() => goToDetail()}>
            <div className={style.imageContainer}>
                <img src='https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg' alt='' />
                <div>90%</div>
            </div>
            <div className={style.titleContainer}>
                <span>ca hong my sieu giam gia trong ngay hom nay mua nha khong het hang</span>
                <div className={style.costContainer}>
                    <span>1.000</span>
                    <span>hong my</span>
                </div>
            </div>
        </div>
    )
}

export default Box;