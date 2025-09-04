export default async function ProductsList() {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();
  const products = data.products;
  return (
    <ul>
      {products.map((product: any) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
