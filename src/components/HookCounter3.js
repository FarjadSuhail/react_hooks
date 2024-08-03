import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // the setter function doesnot automatically merge and update objects, you have to manually merge it yourself
  // and then pass the value to the setter function
  // use the spread operator to copy the entire object and then specify the field that requires change
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounter3;
