import { Link, useNavigate } from 'react-router-dom';

/**
 * Component to navigate user to a route or back.
 * @param {string} to url path of a router to go to
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
