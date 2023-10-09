import React from "react";
import { Button } from "primereact/button";
const DarkMode = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div>
      {isDarkMode == 1 ? (
        <Button
          text
          icon="pi pi-moon"
          className="animate-pulse "
          onClick={toggleDarkMode}
        />
      ) : (
        <Button
          text
          icon="pi pi-sun"
          className="animate-pulse "
          onClick={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default DarkMode;
