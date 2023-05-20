import React from "react";
import Jackboats from "./jackboats";
import Chooseus from "./chooseus";
import Ultimitefeatures from "./ultimitefeatures";
import Ourfeatures from "./ourfeatures";

export default function Features() {


  return (
    <>
      <div id="section2" className="p-4">
        {/* features */}
        <Ourfeatures />
        {/*jackboats */}
        <Jackboats />
        {/* choose us */}
        <Chooseus />
        {/* ultimite features */}
        <Ultimitefeatures />
      </div>
    </>
  );
}
