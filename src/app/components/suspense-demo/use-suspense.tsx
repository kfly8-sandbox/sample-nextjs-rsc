'use client';

import { use } from 'react';

import { fetchHello } from '@/app/api/hello';

// use()フックを使用したSuspense対応のコンポーネント
export function UseSuspense() {
  // useフックを使用してPromiseからデータを取得
  // このコンポーネントはPromiseが解決するまでサスペンドします
  const message = use(fetchHello());

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="text-xl font-bold">{message}</div>
    </div>
  );
}

export function SuspenseFallback() {
  return (
    <div className="p-4 border border-gray-200 rounded-md animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-2"></div>
    </div>
  );
}

