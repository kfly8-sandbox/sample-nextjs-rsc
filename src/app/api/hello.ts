
export function fetchHello() {

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}
