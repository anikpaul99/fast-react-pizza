/**
 * A loader to be shown when the app is in loading state
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
