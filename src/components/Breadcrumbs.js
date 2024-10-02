import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div>
      <nav>
        <ul className="breadcrumbs">
          <li>
            <Link to="/">Home</Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <li key={to}>
                <Link to={to}>{value}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Breadcrumbs;
