import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import { FaImage } from "react-icons/fa";
import { IMAGE_API } from '@src/const/api/image';
import MainLoading from '@src/component/MainLoading';
import MessageDialog from '@src/component/MessageDialog';
import type { MessageDataInterface } from '@src/component/MessageDialog/type';
import axios from 'axios';
import type { ProductField } from '@src/dataStruct/product';


interface UploadImageResponse {
    file: string;
}

const CreateProduct: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<MessageDataInterface>({
        message: '',
        type: 'normal'
    })
    const [product, setProduct] = useState<ProductField>({
        id: -1,
        title: '',
        image: '',
        name: '',
        size: '',
        amount: '',
        sold: '',
        discount: '',
        price: '',
        status: '',
        userId: -1,
        fishCodeId: -1,
        updateTime: '',
        createTime: '',
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

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;

        switch(field) { 
            case 'title': { 
                setProduct({...product, title: value})
                break; 
            } 
            case 'amount': { 
                setProduct({...product, amount: value})
                break; 
            } 
            case 'discount': { 
                setProduct({...product, discount: value})
                break; 
            } 
            case 'price': { 
                setProduct({...product, price: value})
                break; 
            } 
            default: { 
                //statements; 
                break; 
            } 
        } 
    }

    const handleUpload = async (): Promise<UploadImageResponse | null> => {
        if (!file) return null;

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await axios.post<UploadImageResponse>(IMAGE_API.UPLOAD_AIMAGE, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            // console.log("Uploaded:", res.data.file);
            return res.data;
        } catch (err) {
            console.error(err);
            setMessage({
                message: 'Tải ảnh lên thất bại !',
                type: 'error'
            })
            return null;
        }
    };

    const handleCreate = async () => {
        setIsLoading(true);
        const data = await handleUpload();

        if (data === null) {
            setMessage({
                message: 'Tạo sản phẩm thất bại !',
                type: 'error'
            })
        }

        if (data?.file) {
            const imageUrl = IMAGE_API.GET_IMAGE + '/' + data.file;
            const product_cp = {...product};
            product_cp.image = imageUrl;
        } else {
            setMessage({
                message: 'Tạo sản phẩm thất bại !',
                type: 'error'
            })
        }
    }

    const handleCloseMessage = () => {
        setMessage({...message, message: ''})
    }

       
    return (
        <div className="CreateProduct">
            {isLoading && <MainLoading />}
            {message.message.length > 0 && <MessageDialog message={message.message} type={message.type} onClose={() => handleCloseMessage()} />}
            <div className='CreateProduct-main'>
                <h2>Tạo sản phẩm</h2>
                <div className='CreateProduct-main1'>
                    <div>
                        <div className='CreateProduct-inputContainer'>
                            <div>Tieu de</div>
                            <input value={product.title} onChange={(e) => handleChangeInput(e, 'title')} />
                        </div>
                        <div className='CreateProduct-inputContainer'>
                            <div>Số lượng</div>
                            <input value={product.amount} onChange={(e) => handleChangeInput(e, 'amount')} />
                        </div>
                        <div className='CreateProduct-inputContainer'>
                            <div>Khuyến mại</div>
                            <input value={product.discount} onChange={(e) => handleChangeInput(e, 'discount')} />
                        </div>
                        <div className='CreateProduct-inputContainer'>
                            <div>Giá</div>
                            <input value={product.price} onChange={(e) => handleChangeInput(e, 'price')} />
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
                    <div className='CreateProduct-fishCode'>
                        <div>
                            <h4>Thông tin mã cá</h4>
                        </div>
                        <div className='CreateProduct-fishCode-infor'>
                            <div>
                                <div>Tên</div>
                                <div>ten</div>
                            </div>
                            <div>
                                <div>Kích thước</div>
                                <div>ten</div>
                            </div>
                            <div>
                                <div>Số lượng</div>
                                <div>ten</div>
                            </div>
                            <div>
                                <div>Giá</div>
                                <div>ten</div>
                            </div>
                            <div>
                                <div>Chi tiết</div>
                                <div>ten</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
