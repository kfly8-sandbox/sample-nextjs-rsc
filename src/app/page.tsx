import { Counter } from './components/counter';
import { ServerCounter } from './components/server-counter';
import { SuspenseDemo } from './components/suspense-demo';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold underline mb-8">Next.js App Router + RSC デモ</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">カウンターコンポーネント</h2>
        <Counter />
      </div>

      <div className="mb-8">
        <SuspenseDemo />
      </div>

      <div>
        <ServerCounter />
      </div>
    </div>
  );
}
