import { Suspense } from 'react';

async function fetchHello() {
  const response = await fetch("http://localhost:3000/api/hello", {
    cache: 'no-store' // 毎回新しいデータを取得
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.message as { message: string };
}

// App Router用のSuspenseとfetchの組み合わせデモ
export function SuspenseDemo() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Suspense + Fetch Demo (App Router)</h2>

      <div className="border p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Server Component での非同期データ取得</h3>
        <Suspense fallback={<MessageFallback />}>
          <MessageBox />
        </Suspense>
      </div>
    </div>
  );
}

// Server Component として動作する非同期コンポーネント
async function MessageBox() {
  const message = await fetchHello().then(data => data.message);

  return (
    <div className="p-4 bg-blue-50 rounded-md shadow-md border border-blue-200">
      <div className="text-xl font-bold text-blue-800">{message}</div>
      <div className="text-sm text-blue-600 mt-1">
        Server Component で取得完了: {new Date().toLocaleTimeString()}
      </div>
      <div className="text-xs text-blue-500 mt-1">
        このコンポーネントはサーバーサイドで実行されています
      </div>
    </div>
  );
}

// ローディング用のフォールバックコンポーネント
function MessageFallback() {
  return (
    <div className="p-4 border border-gray-200 rounded-md animate-pulse bg-gray-50">
      <div className="h-6 bg-gray-300 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="text-sm text-gray-500 mt-2">Server Component でデータを読み込み中...</div>
    </div>
  );
}
