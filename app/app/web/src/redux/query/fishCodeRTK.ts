import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FISHCODE_API } from '@src/const/api/fishCode';
import type { MyResponse } from '@src/dataStruct/response';
import type { FishCodeField } from '@src/dataStruct/fishCode';

export const fishCodeRTK = createApi({
    reducerPath: 'fishCodeRTK',
    baseQuery: fetchBaseQuery({ 
        baseUrl: '', 
        credentials: 'include' 
    }),
    tagTypes: ['FishCode'],
    endpoints: (builder) => ({
        getAFishCodeWithId: builder.query<FishCodeField, {id: string}>({
            query: ({id}) => `${FISHCODE_API.GET_AFISHCODE_WITH_ID}?id=${id}`,
            transformResponse: (response: MyResponse<FishCodeField>): FishCodeField => {
                if (!response.data) throw new Error('No account data (getAFishCodeWithId)');
                return response.data;
            }
        }),
    }),
});

export const { 
    useGetAFishCodeWithIdQuery,
    // useGetFishCodesQuery,
    // useAddFishCodeMutation
} = fishCodeRTK;
