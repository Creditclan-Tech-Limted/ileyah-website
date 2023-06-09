"use client"
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2
    }
  }
});

const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={ qc }>
      { children }
    </QueryClientProvider>
  );
};

export default QueryProvider;
