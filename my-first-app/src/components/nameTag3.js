import React from "react";

//handle conditioanl rendering

export default (prop) => {
  if (!prop.firstName && !prop.lastName) {

    // console.log(prop.firstName);
    return (
      <>
        <h3 className="name">No First name</h3>
        <h3 className="name">No last name</h3>
      </>
    );
  }
  return (
    <>
      <h3 className="name">{prop.firstName}</h3>
      <h3 className="name">{prop.lastName}</h3>
      {/* logical &&, right side will execute if the left side is true */}
      {prop.firstName==="john" && <div style={{color:"green"}}>VIP</div>}
    </>
  );

};
