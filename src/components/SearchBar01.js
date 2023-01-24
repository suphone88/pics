import React from "react";

const SearchBar = ({ onSubmit }) => {
  const handleClick = () => {
    onSubmit("cars");
  };
  return (
    <div>
      <input />
      <button onClick={handleClick}> Click Me </button>
    </div>
  );
};

export default SearchBar;
