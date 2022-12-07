import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/toolkit";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUr: " http://localhost:3500/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        methdo: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
