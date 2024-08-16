import React from 'react';
import Router from './Router';
import { useEffect, useState } from 'react';
import { requestFcmToken, messaging } from './utils/firebaseUtils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from '@components/modal/ModalProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';

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
  const [fcmToken, setFcmToken] = useState<String>();

  useEffect(() => {
    requestFcmToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
      toast(payload!.notification!.body!);
    });
  }, []);

  useEffect(() => {
    const fetchFcmToken = async () => {
      try {
        const token = await requestFcmToken();
        setFcmToken(token);
        console.log(token);
      } catch (err) {
        console.error('토큰 발급 중 에러 발생: ', err);
      }
    };
    fetchFcmToken();
  });

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
