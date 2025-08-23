import React, { useState } from 'react';
import './style.css';
import TextEditor from './component/TextEditor';
import type { FishCodeField } from '@src/dataStruct/fishCode';



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

    const handleSaveEditorText = (data: string) => {
        setFishCodeField({...fishCodeField, detail: data})
    }

    return (
        <div className="List-AddFishCode">
            <div className='List-AddFishCode-header'>
                Thêm vào danh sách
            </div>
            <div>
                <div className='List-AddFishCode-input'>
                    <div>Tên</div>
                    <div><input value={fishCodeField.name} /></div>
                </div>
                <div className='List-AddFishCode-input'>
                    <div>Kích thước</div>
                    <div><input value={fishCodeField.size} /></div>
                </div>
                <div className='List-AddFishCode-input'>
                    <div>Còn hàng</div>
                    <div><input value={fishCodeField.remain} /></div>
                </div>
                <div className='List-AddFishCode-input'>
                    <div>Tiền</div>
                    <div><input value={fishCodeField.money} /></div>
                </div>
                <div className='List-AddFishCode-textEditor'>
                    <div>Chi tiết</div>
                    <TextEditor data={fishCodeField.detail} onSave={(data) => handleSaveEditorText(data)} />
                </div>
            </div>
        </div>
    );
};

export default AddFishCode;
