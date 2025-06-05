import PageA1II from "@/pages/A1/II";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/A1/II")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <PageA1II />
        </>
    );
}
