import style from './style.module.scss';
import HeaderLeft from '@src/component/Header/HeaderLeft';
import HeaderTop from '@src/component/Header/HeaderTop';
import { LIST } from '@src/const/text';
import Row from './Row';

const List = () => {
    return (
        <div className={style.parent}>
            <div className={style.headerLeft}><HeaderLeft header={LIST} /></div>
            <div className={style.headerTop}><HeaderTop header={LIST} /></div>
            <div className={style.main}>
                <div className={style.main1}>
                    <Row isHeader={true} />
                    <Row isHeader={false} />
                    <Row isHeader={false} />
                    <Row isHeader={false} />
                    <Row isHeader={false} />
                </div>
            </div>
        </div>
    )
}

export default List;