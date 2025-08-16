import style from './style.module.scss';
import Row from './Row';


const List = () => {
     return (
        <div className={style.parent}>
            <div><Row /></div>
            <div><Row /></div>
            <div><Row /></div>
            <div><Row /></div>
            <div><Row /></div>
            <div><Row /></div>
        </div>
    )
}

export default List;