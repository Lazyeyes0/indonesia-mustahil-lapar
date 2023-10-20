import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowNavbar = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (pathname === "/program-kebaikan/distribusi-obat/donasi") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [pathname]);

  return <div>{children}</div>;
};

export default ShowNavbar;
