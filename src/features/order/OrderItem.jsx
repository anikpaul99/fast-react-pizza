import { formatCurrency } from '../../utils/helpers';

/**
 * Each ordered pizza info for the Orderview page
 * @prop {Object} item each ordered pizza
 * @prop {boolean} isLoadingIngredients whether the fetcher is in 'loading' state or not
 * @prop {String []} ingredients ingredients used in each pizza
 * @returns {JSX>Element}
 * @author Anik Paul
 */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
