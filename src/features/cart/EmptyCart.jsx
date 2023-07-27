import LinkButton from '../../ui/LinkButton';

/**
 * Component to show if the cart is empty
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
