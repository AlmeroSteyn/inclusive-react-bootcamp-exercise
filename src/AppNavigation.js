import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavigation = () => (
  <aside>
    <nav>
      <ul className="nav nav-pills nav-stacked">
        <li>
          <NavLink to="/tasks" activeClassName="active">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/task" activeClassName="active">
            Add task
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default AppNavigation;
