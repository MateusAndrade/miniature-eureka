import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./screens/Tabs";

const queryClient = new QueryClient();

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
