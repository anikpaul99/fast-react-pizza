import { formatCurrency } from '../../utils/helpers';

/**
 * Each ordered pizza info for the Orderview page
 * @prop {Object} item each ordered pizza
 * @returns {JSX>Element}
 * @author Anik Paul
 */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
