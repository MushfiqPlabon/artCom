import React from "react";

const navList = [
  { name: `My Thoughts`, route: `#blog` },
  { name: `My Art`, route: `#art` },
  { name: `Contact Me`, route: `#contact` },
];

const NavBar = () => {
  return (
    <div className="object-top sticky top-0 z-50 container-fluid h-16 px-5 bg-transparent backdrop-blur-3xl backdrop-opacity-60 bg-blend-difference shadow-2xl">
      <div>
        <nav>
          <ul className="flex flex-wrap items-center justify-end align-middle">
            {navList.map((e, i) => {
              return (
                <li
                  className="p-3 font-extrabold font-sans text-fuchsia-900"
                  key={i}
                >
                  <a href={e.route}>{e.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
