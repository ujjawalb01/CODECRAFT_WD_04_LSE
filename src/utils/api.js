// Fake delay
const wait = (ms) => new Promise(res => setTimeout(res, ms));

// Simulate getting products
export async function fetchProducts() {
  await wait(500);
  return [
    {
      id: 1,
      name: "Organic Apples",
      image: "https://source.unsplash.com/160x120/?apple",
      price: 99,
      rating: 4.7,
      description: "Freshly picked organic apples."
    }
    // ...extend with other products
  ];
}

// Simulate placing order
export async function placeOrder(orderData) {
  await wait(1000);
  console.log("[ORDER PLACED]", orderData);
  return { success: true, orderId: Math.floor(Math.random() * 10000) };
}

// Simulate getting reviews or orders
export async function fetchUserOrders(userId) {
  await wait(500);
  return [
    { id: 1, status: "Shipped", date: "2025-07-21", items: ["Apples", "Milk"] }
  ];
}
