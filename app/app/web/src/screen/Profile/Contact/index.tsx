import { useContext, useState, useEffect } from 'react';
import style from './style.module.scss';
import { ProfileContext } from '../context';
import { useGetContactsQuery } from '@src/redux/query/accountRTK';
import { ContactField } from '@src/dataStruct/account';
import Row from './component/Row';


const Contact = () => {
    const profileContext = useContext(ProfileContext);
    
    if (!profileContext) {
        throw new Error("profileContext in AddContact component cant undefined !");
    }

    const {
        set_isShow_AddContact
    } = profileContext;

    const [contacts, setContacts] = useState<ContactField[]>([])

    const {
        data, 
        isFetching, 
        isLoading,
        isError, 
        error
    } = useGetContactsQuery();

    useEffect(() => {
        if (isError && error) {
            console.error(error);
        }
    }, [isError, error])

    useEffect(() => {
        if (data) {
            setContacts(data)
        }
    }, [data]) 

    const openDialogAddContact = () => {
        set_isShow_AddContact(true)
    }

    const rowArray = contacts.map((item) => {
        return  <Row key={item.id} contact={item} />
    });

    return (
        <div className={style.parent}>
            <div className={style.header}>
                Liên hệ
            </div>
            <div className={style.inforContainer}>
                { rowArray }
            </div>
            <div className={style.addContainer}>
                <div onClick={() => openDialogAddContact()}>Thêm liên hệ</div>
            </div>
        </div>
    )
}

export default Contact;