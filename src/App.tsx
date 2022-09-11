import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import Routes from "./routes";
import client from "./services/api";
import GlobalStyles from "./pages/styles/global";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
