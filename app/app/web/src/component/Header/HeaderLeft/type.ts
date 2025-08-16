export interface HeaderLeftState {
    isShow: boolean,
    headerSelected: HeaderSelected
}

export enum HeaderSelections {
    HOME,
    PRODUCT,
    MY_ORDER,
    PROFILE
}

export type HeaderSelected = HeaderSelections;