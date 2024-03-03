import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home";
import logError from "./utils/errorLogger";
import ErrorFallback from "./components/errorFallback/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <Layout>
        <HomePage />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
