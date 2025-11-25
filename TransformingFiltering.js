function processProducts(products) {
  const names = products.map(p => p.name);

  products.forEach(p => {
    const msg = p.price > 50 ? 'is above $50' : 'is below $50';
    console.log(`${p.name} ${msg}`);
  });

  return names; // return names array in case it's needed
}
const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

const productNames = processProducts(input);

