import { useRouteError } from "react-router-dom";
import ErrorContent from "../components/ErrorContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let message = "Something went wrong!";

  // if(error.status === 500) {
  //     message = error.data.message;
  // }

  if (error.status === 404) {
    message = "Oops! you are lost in a black hole.";
  }

  return (
    <>
      <MainNavigation />
      <ErrorContent message={message} />
    </>
  );
}

export default ErrorPage;
