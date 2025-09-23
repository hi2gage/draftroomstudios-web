import { Navigation } from '@/components/Navigation'
import { CardGrid } from '@/components/CardGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-20">
        <CardGrid />
      </main>
    </div>
  )
}