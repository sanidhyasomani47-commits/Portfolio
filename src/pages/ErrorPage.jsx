import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-900">
        Oops!
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        Sorry, an unexpected error has occurred.
      </p>

      <p className="mt-2 text-red-500">
        {error.statusText || error.message}
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
