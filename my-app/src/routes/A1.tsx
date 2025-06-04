import PageA1 from "@/pages/a1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/A1")({
    component: A1,
});

function A1() {
    return (
        <>
            <PageA1 />
        </>
    );
}
