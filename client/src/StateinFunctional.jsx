import React, {useState} from "react";

function StateInFunctionalComponent(){

  const [name, setName] = useState("Alex Pandian");
  function updateName(){
      setName("Tovino Thomas");
  }

  // console.log("Rendering..")
  return (
      <div>
          <h2>{name}</h2>
          <button onClick={updateName}>Click Me</button>
      </div>
  )

}
export default StateInFunctionalComponent;