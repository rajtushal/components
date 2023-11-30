import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, activeClassName, className }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}

export default Link;
