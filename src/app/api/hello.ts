
export function fetchHello() {

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  })

//  return fetch("http://localhost:3000/api/hello").then(async (res) => {
//    if (!res.ok) {
//      throw new Error("Network response was not ok");
//    }
//    const data = await res.json();
//    return data.message as string
//  })
}
