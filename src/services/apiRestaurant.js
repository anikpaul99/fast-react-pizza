const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

/**
 * Fetch menu data (/menu)
 * @returns {Object []}
 * @author Anik Paul
 */
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}

/**
 * Fetch a specific order with the coresponding id
 * @returns {Object}
 * @author Anik Paul
 */
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

/**
 * Will fetch a post request after creating a new order
 * @param {Object} newOrder newly created order object (prop: addresss, cart, customer, phone, priority)
 * @returns {Object} (with props: address, cart, createdAt, customer, estimatedDelivery, id, orderPrice, phone, priority, priorityPrice, status)
 * @author Anik Paul
 */
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

/**
 * Will do a PATCH request to update the ordered pizza incase we make it priority after ordering.
 * @param {string} id id of the order that should be updated
 * @param {Object} updateObj the data should be updated
 * @author Anik Paul
 */
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
