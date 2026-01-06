import {useRouteError} from "react-router-dom";
import Header from "../Header.jsx";

export default function ErrorPage() {
    const routeError = useRouteError();

    if (routeError.status === 404) {
        return (<>
            <Header/>
            <h1 className="text-center mt-8">Page not found</h1>
        </>);
    }

    return (<>
        <Header/>
        <h1>{routeError.status}</h1>
        <p>{routeError.data}</p>
    </>);
}