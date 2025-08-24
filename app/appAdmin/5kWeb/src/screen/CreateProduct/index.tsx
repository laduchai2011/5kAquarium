import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import { FaImage } from "react-icons/fa";
import { IMAGE_API } from '@src/const/api/image';
import MainLoading from '@src/component/MainLoading';
import MessageDialog from '@src/component/MessageDialog';
import type { MessageDataInterface } from '@src/component/MessageDialog/type';
import axios from 'axios';

const CreateProduct: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<MessageDataInterface>({
        message: '',
        type: 'normal'
    })

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(preview);
        }
    }, [preview])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleIconClick = () => {
        fileInputRef.current?.click();
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await axios.post(IMAGE_API.UPLOAD_AIMAGE, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            // console.log("Uploaded:", res.data.file);
            return res;
        } catch (err) {
            console.error(err);
            setMessage({
                message: 'Tải ảnh lên thất bại !',
                type: 'error'
            })
        }
    };

    const handleCreate = () => {
        setIsLoading(true);
        handleUpload();
    }

    const handleCloseMessage = () => {
        setMessage({...message, message: ''})
    }

       
    return (
        <div className="CreateProduct">
            {isLoading && <MainLoading />}
            {message.message.length > 0 && <MessageDialog message={message.message} type={message.type} onClose={() => handleCloseMessage()} /> }
           <div className='CreateProduct-main'>
                <h2>Tạo sản phẩm</h2>
                <div className='CreateProduct-inputContainer'>
                    <div>Tieu de</div>
                    <input />
                </div>
                <div className='CreateProduct-inputContainer'>
                    <div>Số lượng</div>
                    <input />
                </div>
                <div className='CreateProduct-inputContainer'>
                    <div>Giá</div>
                    <input />
                </div>
                <div className='CreateProduct-inputContainer'>
                    <div>Đơn vị cá trên mối số lượng</div>
                    <input />
                </div>
                <div className='CreateProduct-imageIcon'>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                    <FaImage 
                        title='Chọn ảnh'
                        size={30}
                        style={{ cursor: "pointer" }}
                        color='greenyellow'
                        onClick={handleIconClick}
                    /> 
                </div>
                <div className='CreateProduct-imageContainer'>
                    {preview.length > 0 && <img src={preview} alt='' />}
                </div>
                <div className='CreateProduct-btnContainer'>
                    <button onClick={() => handleCreate()}>Tạo</button>
                </div>
           </div>
        </div>
    );
};

export default CreateProduct;
