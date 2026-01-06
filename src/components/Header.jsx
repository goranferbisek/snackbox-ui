import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="h-16 bg-gray-100">
            <div className="h-full px-20 flex justify-between items-center">
                <Link to="/"><img src="/Snackbox.png" alt="Snackbox logo" className="h-12" /></Link>
                <nav>
                    <Link to="/login" className="mr-4 bg-blue-400 px-4 py-2 rounded-xl">Log in</Link>
                    <Link to="/signup" className="bg-blue-400 px-4 py-2 rounded-xl">Sing up</Link>
                </nav>
            </div>
        </header>
    );

}