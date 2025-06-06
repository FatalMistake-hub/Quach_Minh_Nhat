import A3 from "@/pages/A3";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/A3")({
    component: RouteComponent,
});

function RouteComponent() {
    return <A3 />;
}
