import { getCounter, incrementCounter } from "@/app/actions/server-counter";

export async function ServerCounter() {

  const count = await getCounter();

  return (

    <form action={incrementCounter}>
      <button type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >increment</button>
      count: {count}
    </form>
  )
}

