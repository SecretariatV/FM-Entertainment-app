import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useCookie = (name: string) => {
  const [cookieValue, setCookieValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const value = Cookies.get(name);
    setCookieValue(value);
  }, [name]);

  return cookieValue;
};

export default useCookie;
