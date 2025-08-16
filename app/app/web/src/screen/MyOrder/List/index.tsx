import style from './style.module.scss';
import Row from './Row';
import { useNavigate } from 'react-router-dom';


const List = () => {
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate('/product');
    }

    return (
        <div className={style.parent}>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
            <div onClick={() => goToProduct()}><Row /></div>
        </div>
    )
}

export default List;