import PageA1 from "@/pages/A1/I";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/A1/I")({
    component: A1,
});

function A1() {
    return (
        <>
            <PageA1 />
        </>
    );
}
