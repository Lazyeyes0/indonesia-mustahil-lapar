import { Link } from "react-router-dom";

const Anchor = (props) => {
  const { children, link, className } = props;
  return (
    <Link
      to={link}
      className={`${className} block py-3 px-6 rounded-full text-white transition ease-in-out delay-150 duration-300 bg-gradient-to-tr from-blue-900 to-slate-400 hover:from-blue-800 hover:to-slate-400 font-bold text-center text-sm `}
    >
      {children}
    </Link>
  );
};
export default Anchor;
