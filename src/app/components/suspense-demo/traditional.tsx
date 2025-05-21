'use client';

import { useState, useEffect } from 'react';

import { fetchHello } from '@/app/api/hello';

// 従来の方法（useState + useEffect）でデータを取得するコンポーネント
export default function Traditional() {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        fetchHello().then((message) => {
          setMessage(message);
          setIsLoading(false);
        })

      } catch (err) {
        setError(err instanceof Error ? err : new Error('時刻の取得中にエラーが発生しました'));
        setIsLoading(false);
      }
    };

    fetchCurrentTime();
  }, []);

  if (error) {
    return <div className="p-4 bg-red-100 text-red-700 rounded-md">エラーが発生しました: {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="text-xl font-bold">{message}</div>
    </div>
  );
}

function Loading() {
  return (
    <div className="p-4 border border-gray-200 rounded-md animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-2"></div>
    </div>
  );
}


