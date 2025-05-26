"use server"

let count = 0;

export async function incrementCounter() {
  count += 1;
}

export async function getCounter() {
  return count
}
