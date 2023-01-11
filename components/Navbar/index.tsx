import React from "react";
import Link from "next/link";
import { FiMenu } from 'react-icons/fi'

import Container from '../Container/Container'

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
    <nav className=" shadow-sm w-full z-10">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Ridwan Mohamed</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="flex justify-center items-center cursor-pointer">
              <FiMenu />
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href='/' className="justify-between">Home</Link>
              </li>
              <li>
                <Link href='#projects'>Projects</Link>
              </li>
              <li>
                <Link href='#skills'>Skills</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </Container>
  );
}

export default Navbar;
