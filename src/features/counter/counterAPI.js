export function fetchCount({ count = 1 }) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    resolve({ data });
  });
}
