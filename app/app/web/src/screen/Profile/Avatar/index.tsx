import { useEffect, useContext, useState } from 'react';
import style from './style.module.scss';
import { MdEdit } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { useGetAccountQuery } from '@src/redux/query/accountRTK';
import { ProfileContext } from '../context';
import { AccountField } from '@src/dataStruct/account';
import avatarnull from '../../../asset/avatar/avatarnull.png';

const Avatar = () => {
     const profileContext = useContext(ProfileContext);
        
    if (!profileContext) {
        throw new Error("profileContext in Avatar component cant undefined !");
    }

    const {
        setIsLoading
    } = profileContext;

    const [account, setAccount] = useState<AccountField | undefined>(undefined);

    const {
        data, 
        // isFetching, 
        isLoading,
        isError, 
        error
    } = useGetAccountQuery();

    useEffect(() => {
        if (isError && error) {
            console.error(error);
        }
    }, [isError, error])

    useEffect(() => {
        setIsLoading(isLoading)
    }, [setIsLoading, isLoading])

    useEffect(() => {
        if (data) {
            setAccount(data);
        }
    }, [data]) 

    return (
        <div className={style.parent}>
            <div className={style.main}>
                <div className={style.avatarContainer}>
                    <img src={avatarnull} alt='' />
                    <IoAddCircleOutline title='Chỉnh sửa' color='gray' size={30} />
                </div>
                <div className={style.nameContainer}>
                    {account ? <div className={style.name}>{`${account?.firstName} ${account?.lastName}`}</div> : <div className={style.name}></div>}
                    <div className={style.editName} title='Chỉnh sửa'><MdEdit size={30} color='greenyellow' /></div>
                </div>
            </div>
        </div>
    )
}

export default Avatar;