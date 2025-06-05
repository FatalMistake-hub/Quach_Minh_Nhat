import PageA1III from '@/pages/A1/III'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/A1/III')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><PageA1III/></div>
}
