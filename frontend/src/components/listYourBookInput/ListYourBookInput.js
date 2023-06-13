import React, { useState } from "react";

function ListYourBookInput(props) {

 



  return (
    <div classname="List-book-input">
      <input type="text" placeholder="ISBN or title" onChange={props.onChange}></input>
      <button onClick={props.onClick}>Search</button>
    </div>
  );
}

export default ListYourBookInput;
