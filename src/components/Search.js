import React from "react";

const Search = (props) => {
  const handleChange = (ev) => {
    // console.log(ev.target.id);
    props.handleFilter(ev.target.value, ev.target.id);
  };

  return (
    <form>
      <input
        placeholder="Busca un personaje"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
