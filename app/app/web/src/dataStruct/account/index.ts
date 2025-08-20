export interface AccountField {
    id: number;
    userName: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
    avatar: string | null;
    status: string;
    updateTime: string;
}

export interface ContactField {
    id: number;
    name: string;
    phone: string;
    address: string;
    status: string;
    userId: number;
    updateTime: string;
    createTime: string;
}
