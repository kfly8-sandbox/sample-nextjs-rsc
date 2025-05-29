import { Suspense } from 'react';

async function fetchHello() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/hello`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data as { message: string };
}

export function SuspenseDemo() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MessageBox />
    </Suspense>
  )
}

async function MessageBox() {
  const message = await fetchHello().then(data => data.message);

  return <p>Message: {message}</p>
}

