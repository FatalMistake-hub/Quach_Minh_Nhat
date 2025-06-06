import PageA1III from '@/pages/A1/III'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/A1/III')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PageA1III />;
}
