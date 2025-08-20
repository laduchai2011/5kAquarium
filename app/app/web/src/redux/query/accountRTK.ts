import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCOUNT_API } from '@src/const/api/account';
import { MyResponse } from '@src/dataStruct/response';
import { ContactField } from '@src/dataStruct/account';

export const accountRTK = createApi({
    reducerPath: 'accountRTK',
    baseQuery: fetchBaseQuery({ 
        baseUrl: '', 
        credentials: 'include' 
    }),
    tagTypes: ['Account', 'Contact'],
    endpoints: (builder) => ({
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
        addContact: builder.mutation<MyResponse<ContactField>, ContactField>({
            query: (body) => ({
                url: ACCOUNT_API.SIGNUP,
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
    useGetContactsQuery,
    useAddContactMutation 
} = accountRTK;
