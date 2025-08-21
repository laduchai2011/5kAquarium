import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCOUNT_API } from '@src/const/api/account';
import { MyResponse } from '@src/dataStruct/response';
import { AccountField, ContactField } from '@src/dataStruct/account';

export const accountRTK = createApi({
    reducerPath: 'accountRTK',
    baseQuery: fetchBaseQuery({ 
        baseUrl: '', 
        credentials: 'include' 
    }),
    tagTypes: ['Account', 'Contact'],
    endpoints: (builder) => ({
        getAccount: builder.query<AccountField, void>({
            query: () => ACCOUNT_API.GET_ACCOUNT,
            transformResponse: (response: MyResponse<AccountField>): AccountField => {
                if (!response.data) throw new Error('No account data');
                return response.data;
            },
            providesTags: (result) =>
                result
                    ? [
                        { type: 'Account', id: result.id },
                        { type: 'Account', id: 'LIST' }, // thêm LIST
                    ]
                    : [{ type: 'Account', id: 'LIST' }],
        }),
        getContacts: builder.query<ContactField[], void>({
            query: () => ACCOUNT_API.GET_CONTACTS,
            transformResponse: (response: MyResponse<ContactField[]>) => response.data ?? [],
            providesTags: (result) =>
                result
                    ? [
                        ...result
                        .map(({ id }) => ({ type: 'Contact' as const, id: id! })),
                        { type: 'Contact', id: 'LIST' },
                    ]
                    : [{ type: 'Contact', id: 'LIST' }],
        }),
        changeName: builder.mutation<MyResponse<AccountField>, AccountField>({
            query: (body) => ({
                url: ACCOUNT_API.CHANGE_NAME,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: (result, error, arg) => 
                result?.data
                    ? [{ type: 'Account', id: result.data.id }]
                    : [{ type: 'Account', id: 'LIST' }],
        }),
        addContact: builder.mutation<MyResponse<ContactField>, ContactField>({
            query: (body) => ({
                url: ACCOUNT_API.ADD_CONTACT,
                method: 'POST',
                body,
            }),
            async onQueryStarted(newContact, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.data) {
                        // Cập nhật cache cho getContacts (không cần refetch)
                        dispatch(
                            accountRTK.util.updateQueryData('getContacts', undefined, (draft) => {
                                if (data?.data) {
                                    draft.push(data.data);
                                }
                            })
                        );
                    }
                } catch (err) {
                    console.error('addContact failed', err);
                }
            }
        }),
    }),
});

export const { 
    useGetAccountQuery,
    useGetContactsQuery,
    useChangeNameMutation,
    useAddContactMutation 
} = accountRTK;
