import A2 from "@/pages/A2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/A2")({
    component: RouteComponent,
});

function RouteComponent() {
    return <A2 />;
}
