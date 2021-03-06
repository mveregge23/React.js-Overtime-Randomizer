import React from "react";

/* Heading is a component to display the name of the app
   and the headers for the fields being randomized */
function Heading() {
  return (
    <>
      <h1 className="center-block jumbotron text-center">
        {" "}
        Overtime Randomizer{" "}
      </h1>
      <div class="heading-container">
        <h3 class="col-lg-4">Mechanism</h3>
        <h3 class="col-lg-4">Time Period</h3>
        <h3 class="col-lg-4">Basis</h3>
      </div>
    </>
  );
}

export default Heading;
