import { useRef } from 'react';
import style from './style.module.scss';

const Fish = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    return (
        <div className={style.parent} ref={parent_element}>
            <div></div>
        </div>
    )
}

export default Fish;