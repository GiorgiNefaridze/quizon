import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

type ClientWrapperType<T> = (props: { children: T }) => T;

const QueryClientWrapper: ClientWrapperType<JSX.Element> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryClientWrapper;
