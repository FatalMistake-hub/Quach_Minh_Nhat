import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Home } from "lucide-react";

export const Route = createFileRoute("/app")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="relative">
            <Link to="/">
                <Home className="absolute top-4 right-4 h-6 w-6 text-gray-500  z-50 hover:text-gray-700 transition-colors" />
            </Link>
            <Outlet />
        </div>
    );
}
