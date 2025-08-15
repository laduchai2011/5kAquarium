import { useRef } from 'react';
import style from './style.module.scss';

import Box from './Box';

const Fish = () => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    return (
        <div className={style.parent} ref={parent_element}>
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div> 
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div>
            <div><Box /></div>
        </div>
    )
}

export default Fish;