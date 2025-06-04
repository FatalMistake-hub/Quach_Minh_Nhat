import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/A3")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/A3"!</div>
}
