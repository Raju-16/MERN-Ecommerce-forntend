export function fetchData() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    resolve({ data });
  });
}
