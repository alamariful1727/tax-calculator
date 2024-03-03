import { FallbackProps } from "react-error-boundary";
import Layout from "../layout/Layout";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Layout>
      <div role="alert" className="mx-auto max-w-lg space-y-2 py-12">
        <p className="text-lg">Something went wrong:</p>
        <pre className="text-red-500 ">{error.message}</pre>
        <button
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </Layout>
  );
}

export default ErrorFallback;
