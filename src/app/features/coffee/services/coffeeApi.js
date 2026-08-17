const baseUrl = "https://coffee-api-ttag.onrender.com";

export const searchCoffee = async (value) => {
  const response = await fetch(`${baseUrl}/api/search?name=${value}`, {
    withCredentials: true,
  });
  if (!response.ok) {
    throw new Error("Failed to search coffee");
  }
  const data = await response.json();
  return data;
};
