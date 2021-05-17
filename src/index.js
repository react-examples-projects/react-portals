import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routers from "./Routers";
import { QueryClient, QueryClientProvider } from "react-query";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Routers />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
