export interface ProfileContextInterface {
    isShow_ChangeName: boolean,
    isShow_AddContact: boolean,
    set_isShow_ChangeName: React.Dispatch<React.SetStateAction<boolean>>,
    set_isShow_AddContact: React.Dispatch<React.SetStateAction<boolean>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}