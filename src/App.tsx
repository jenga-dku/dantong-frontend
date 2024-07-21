import React from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from '@components/modal/ModalProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      throwOnError: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <div className="layout absolute flex h-full w-full max-w-[400px] overflow-hidden bg-white">
          <Router />
        </div>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
