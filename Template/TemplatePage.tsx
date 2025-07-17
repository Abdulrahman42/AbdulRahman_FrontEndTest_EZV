'use client';
import { useState } from 'react';
import { todoApi, useGetTodosQuery } from '@/libs/api/todo';
import { store } from '@/store';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/Form';
import { Todo } from '@/types/todo';
import type { GetStaticProps } from 'next';

const PAGE_LIMIT = 10;

const TemplatePage = ({ initialData }: { initialData: Todo[] }) => {
  const [page, setPage] = useState(1);
  const { data = initialData, isFetching } = useGetTodosQuery({
    start: (page - 1) * PAGE_LIMIT,
    limit: PAGE_LIMIT,
  });

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      
      <TodoForm />
      {isFetching && !data ? (
        <p>Loading...</p>
      ) : (
        <>
          <TodoList todos={data || []} />
          
          <div className="flex justify-end items-center mt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 text-black rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className='mx-2'>Page {page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await store.dispatch(
    todoApi.endpoints.getTodos.initiate({
      start: 0,
      limit: PAGE_LIMIT,
    })
  );

  await Promise.all(store.dispatch(todoApi.util.getRunningQueriesThunk()));

  return {
    props: {
      initialData: result.data || [],
    },
    revalidate: 30, // ISR: Revalidate setiap 30 detik
  };
};

export default TemplatePage;