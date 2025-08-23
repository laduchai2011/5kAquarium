export interface FishCodeField {
    id: number;
    name: string;
    size: string;
    remain: string;
    money: string;
    detail: string;
    status: string;
    userId: number;
    updateTime: string;
    createTime: string;
}

export interface PagedFishCodeField {
    data: FishCodeField[],
    totalCount: number
}