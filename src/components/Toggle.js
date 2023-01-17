import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  
    return (
     
      <button style={{ background: "red" }} onClick={() => setToggle(!toggle)}>
        {toggle? "OFF" : "ON"}
        </button>
    );
  

}

export default Toggle;
