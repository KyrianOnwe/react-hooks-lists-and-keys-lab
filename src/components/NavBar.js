import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const makeAhrefs = links.map(link => <a href={`#${link}`} key={link}>{link}</a>
    
  )

  return <nav>
    {makeAhrefs}
  </nav>;
}

export default NavBar;
