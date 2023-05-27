import React, { useState } from "react";

export default function Search(props) {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="search" />

      <div>{city}</div>
    </form>
  );
}
