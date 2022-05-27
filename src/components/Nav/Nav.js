import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div>
      <nav>
          <span>
                  <Link to="/" >TODOS</Link>
          </span>
          <span>
                  <Link to="/add" >Add Todo</Link>
          </span>
      </nav>       
    </div>
  )
};

export default Nav;