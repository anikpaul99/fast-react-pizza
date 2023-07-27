import { formatCurrency } from '../../utils/helpers';

import DeleteItem from './DeleteItem';

/**
 * Each cart item in the cart
 * @prop {Object} item each item in the cart
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
