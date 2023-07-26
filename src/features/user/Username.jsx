import { useSelector } from 'react-redux';

/**
 * To show username
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
