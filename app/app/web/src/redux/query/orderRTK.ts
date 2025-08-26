import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ORDER_API } from '@src/const/api/order';
import { MyResponse } from '@src/dataStruct/response';
import { OrderField, AddOrderBody } from '@src/dataStruct/order';




export const orderRTK = createApi({
    reducerPath: 'orderRTK',
    baseQuery: fetchBaseQuery({ 
        baseUrl: '', 
        credentials: 'include' 
    }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        addOrderWithTransaction: builder.mutation<MyResponse<OrderField>, AddOrderBody>({
            query: (body) => ({
                url: ORDER_API.ADD_ORDER_WITH_TRANSACTION,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { 
   useAddOrderWithTransactionMutation
} = orderRTK;
