const API_URL = "https://react-fast-pizza-api.onrender.com/api";

/**
 * Fetch menu data (/menu)
 * @returns {Object []}
 * @author Anik Paul
 */
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}
