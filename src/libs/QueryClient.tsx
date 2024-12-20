// reactQueryClient.js
import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: false,
      staleTime:  1000,
    },
  },
});

export default queryClient;
