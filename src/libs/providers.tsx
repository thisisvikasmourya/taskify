"use client";
/**
 * Provides React Query Client and Devtools to the application.
 * @param {Object} props - The properties for the Providers component.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {React.ReactNode} The Providers component with QueryClientProvider and ReactQueryDevtools.
 */
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  // const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
