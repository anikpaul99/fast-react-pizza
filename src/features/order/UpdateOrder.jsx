import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

import Button from '../../ui/Button';

/**
 * Button to make the order priority
 * @prop {Object} order order object holding all info about that particular order
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
