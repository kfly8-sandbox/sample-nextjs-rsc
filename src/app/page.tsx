import { Counter } from './components/counter';
import { SuspenseDemo } from './components/suspense-demo';
import { ServerCounter } from './components/server-counter';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold underline mb-8">Next.js RSCデモ</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">カウンターコンポーネント</h2>
        <Counter />
      </div>

      <div>
        <SuspenseDemo />
      </div>

      <div>
        <ServerCounter />
      </div>
    </div>
  );
}
