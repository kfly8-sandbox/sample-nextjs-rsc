'use client';

import { Suspense } from 'react';
import Traditional from './suspense-demo/traditional';
import { UseSuspense, SuspenseFallback } from './suspense-demo/use-suspense';

export default function SuspenseDemo() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-6">非同期データ取得の比較</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-bold mb-4">従来の方法</h2>
          <Traditional />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Suspense + use()フックの方法</h2>
          <Suspense fallback={<SuspenseFallback />}>
            <UseSuspense />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
