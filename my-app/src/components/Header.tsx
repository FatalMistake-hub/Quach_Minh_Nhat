import { Link } from "@tanstack/react-router";

export default function Header() {
    return (
        <header className="p-2 flex gap-2 text-[#61dafb] justify-between">
            <nav className="flex flex-row w-full">
                <div className="px-2 flex font-bold gap-4 w-full">
                    <Link to="/">Home</Link>
                    <Link to="/app/A1/I">A1.1</Link>
                    <Link to="/app/A1/II">A1.2</Link>
                    <Link to="/app/A1/III">A1.3</Link>
                    <Link to="/app/A2">A2</Link>
                    <Link to="/app/A3">A3</Link>
                </div>
            </nav>
        </header>
    );
}
