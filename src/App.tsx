import React from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from '@components/modal/ModalProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
      throwOnError: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ModalProvider>
        <div className="layout absolute flex h-full w-full max-w-[400px] overflow-hidden bg-white">
          <Router />
        </div>
      </ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
