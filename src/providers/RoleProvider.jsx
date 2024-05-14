import { useState } from "react";
import { createContext } from "react";

export const RoleContext = createContext(null);

const RoleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggleRole = (event) => {
    setToggle(event.target.checked);
  };

  const toggleValue = {
    handleToggleRole,
    toggle,
  };

  return (
    <RoleContext.Provider value={toggleValue}>{children}</RoleContext.Provider>
  );
};

export default RoleProvider;
