const baseUrl = "http://localhost:3000";

export const searchCoffee = async (value) => {
  const response = await fetch(`${baseUrl}/api/search?name=${value}`, {
    withCredentials: true,
  });
  if (!response.ok) {
    throw new Error("Failed to search coffee");
  }
  const data = await response.json();
  console.log("API search response:", data);
  return data;
};
