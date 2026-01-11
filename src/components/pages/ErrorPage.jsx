import {useRouteError} from "react-router-dom";
import Header from "../Header.jsx";

export default function ErrorPage() {
    const routeError = useRouteError();
    let errorTitle = "Something went wrong";
    let errorMessage = "An unexpected error occurred. Please try again later.";

    if (routeError) {
        errorTitle = routeError.status;
        errorMessage = routeError.data;

    }

    if (routeError.status === 404) {
        return (<>
            <Header/>
            <h1 className="text-center mt-8">Page not found</h1>
        </>);
    }

    return (<>
        <Header/>
        <h1>{errorTitle}</h1>
        <p>{errorMessage}</p>
    </>);
}