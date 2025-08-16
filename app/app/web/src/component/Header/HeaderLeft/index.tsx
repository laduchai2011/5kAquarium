import { useEffect, useRef } from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@src/redux';
import { MdOutlineMenu } from "react-icons/md";
import { set_isShow, set_headerSelected } from '@src/redux/slice/headerLeftSlice';
import { HOME, PRODUCT, MY_ORDER, PROFILE } from '@src/const/text';
import { HeaderSelections, HeaderSelected } from '@src/component/Header/HeaderLeft/type';
import { useNavigate } from 'react-router-dom';


const HeaderLeft = () => {
    const navigate = useNavigate();
    const parent_element = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const isShow: boolean = useSelector((state: RootState) => state.headerLeftSlice.isShow);
    const headerSelected: HeaderSelections = useSelector((state: RootState) => state.headerLeftSlice.headerSelected);

    useEffect(() => {
        if (parent_element.current) {
            const overbackground_element = parent_element.current.children[0];
            if (isShow) {
                parent_element.current.classList.add(style.parent_show);
                overbackground_element.classList.remove(style.overbackground_show)
            } else {
                parent_element.current.classList.remove(style.parent_show);
                overbackground_element.classList.add(style.overbackground_show)
            }
        }
    }, [isShow]);

    const handleSelected = (headerSelected: HeaderSelected) => {
        dispatch(set_headerSelected(headerSelected))
        switch(headerSelected) { 
            case HeaderSelections.HOME: { 
                navigate('/')
                break; 
            } 
            case HeaderSelections.PRODUCT: { 
                navigate('/product')
                break; 
            } 
            case HeaderSelections.MY_ORDER: { 
                navigate('/myOrder')
                break; 
            } 
            default: { 
                //statements; 
                break; 
            } 
        } 
    }

    const return_headerSelected = (_headerSelected: HeaderSelected) => {
        if (headerSelected === _headerSelected) {
            return style.headerSelected
        } else {
            return '';
        }
    }

    const handleClose = () => {
        dispatch(set_isShow(!isShow))
    }

    return (
        <div className={style.parent} ref={parent_element}>
            <div className={style.content}>
                <div>
                    <span>CTV-5K</span>
                    <MdOutlineMenu onClick={() => handleClose()} size={25} />
                </div>
                <div className={`${return_headerSelected(HeaderSelections.HOME)}`} onClick={() => handleSelected(HeaderSelections.HOME)}>{ HOME }</div>
                <div className={`${return_headerSelected(HeaderSelections.PRODUCT)}`} onClick={() => handleSelected(HeaderSelections.PRODUCT)}>{ PRODUCT }</div>
                <div className={`${return_headerSelected(HeaderSelections.MY_ORDER)}`} onClick={() => handleSelected(HeaderSelections.MY_ORDER)}>{ MY_ORDER }</div>
                <div className={`${return_headerSelected(HeaderSelections.PROFILE)}`} onClick={() => handleSelected(HeaderSelections.PROFILE)}>{ PROFILE }</div>
            </div>
        </div>
    );
};

export default HeaderLeft;
