import React, { useState } from 'react';
import './style.css';
import axiosInstance from '@src/api/axiosInstance';
import { useNavigate } from 'react-router-dom';

interface SigninField {
    userName: string;
    password: string;
}

const Signin: React.FC = () => {
    const navigate = useNavigate();
    const [signin, setSignin] = useState<SigninField>({
        userName: '',
        password: '',
    });

    async function fetchUser(): Promise<SigninField> {
        const response = await axiosInstance.get<SigninField>(
            `/api/service_account/query/signin?userName=${signin.userName}&password=${signin.password}`
        );
        console.log(111111111, response.data)
        return response.data;
    }

    const handleSignin = async () => {
        try {
            await fetchUser();
            navigate('/');
        } catch (error: unknown) {
            console.error(error);
        }
    };

    return (
        <div className="Signin">
            <div>
                <div>
                    <div>Tên đăng nhập</div>
                    <input
                        value={signin.userName}
                        onChange={(e) =>
                            setSignin((pre) => {
                                return {
                                    ...pre,
                                    userName: e.target.value,
                                };
                            })
                        }
                    />
                </div>
                <div>
                    <div>password</div>
                    <input
                        value={signin.password}
                        onChange={(e) =>
                            setSignin((pre) => {
                                return {
                                    ...pre,
                                    password: e.target.value,
                                };
                            })
                        }
                        type="password"
                    />
                </div>
                <div>
                    <button onClick={() => handleSignin()}>Vào đi</button>
                </div>
            </div>
        </div>
    );
};

export default Signin;
