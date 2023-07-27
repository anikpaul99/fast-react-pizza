import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

import Button from '../../ui/Button';

/**
 * Button to  delete a pizza
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Remove
    </Button>
  );
}

export default DeleteItem;
