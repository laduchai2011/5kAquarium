import React, { useState } from 'react';
import './style.css';
import TextEditor from './component/TextEditor';
import type { FishCodeField } from '@src/dataStruct/fishCode';
import { useAddFishCodeMutation } from '@src/redux/query/fishCodeRTK';



const AddFishCode: React.FC = () => {
    const [fishCodeField, setFishCodeField] = useState<FishCodeField>({
        id: -1,
        name: '',
        size: '',
        remain: '',
        money: '',
        detail: '',
        status: '',
        userId: -1,
        updateTime: '',
        createTime: '',
    })

    const [addFishCode] = useAddFishCodeMutation();

    const handleSaveEditorText = (data: string) => {
        setFishCodeField({...fishCodeField, detail: data})
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;

        switch(field) { 
            case 'name': { 
                setFishCodeField({...fishCodeField, name: value})
                break; 
            } 
            case 'size': { 
                setFishCodeField({...fishCodeField, size: value})
                break; 
            } 
            case 'remain': { 
                setFishCodeField({...fishCodeField, remain: value})
                break; 
            } 
            case 'money': { 
                setFishCodeField({...fishCodeField, money: value})
                break; 
            } 
            default: { 
                //statements; 
                break; 
            } 
        } 
    }

    const handleAdd = () => {
        addFishCode(fishCodeField)
        .then(res => console.log('addFishCode', res))
        .catch(err => console.error(err))
    }

    return (
        <div className="List-AddFishCode">
            <div className='List-AddFishCode-header'>
                Thêm vào danh sách
            </div>
            <div>
                <div className='List-AddFishCode-input'>
                    <div>Tên</div>
                    <div><input value={fishCodeField.name} onChange={(e) => handleInputChange(e, 'name')} /></div>
                </div>
                <div className='List-AddFishCode-input'>
                    <div>Kích thước</div>
                    <div><input value={fishCodeField.size} onChange={(e) => handleInputChange(e, 'size')} /></div>
                </div>
                <div className='List-AddFishCode-input'>
                    <div>Còn hàng</div>
                    <div><input value={fishCodeField.remain} onChange={(e) => handleInputChange(e, 'remain')} /></div>
                </div>
                <div className='List-AddFishCode-input'>
                    <div>Tiền</div>
                    <div><input value={fishCodeField.money} onChange={(e) => handleInputChange(e, 'money')} /></div>
                </div>
                <div className='List-AddFishCode-textEditor'>
                    <div>Chi tiết</div>
                    <TextEditor data={fishCodeField.detail} onSave={(data) => handleSaveEditorText(data)} />
                </div>
                <div className='List-AddFishCode-btn'>
                    <button onClick={() => handleAdd()}>Thêm</button>
                </div>
            </div>
        </div>
    );
};

export default AddFishCode;
