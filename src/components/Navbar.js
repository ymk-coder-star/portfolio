import { NavLink } from 'react-router-dom';
import React from 'react';

//styles
import './Navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<a
						href="https://github.com/ymk-coder-star?tab=repositories"
						target="blank">
						Code
					</a>
				</li>
			</ul>
		</nav>
	);
}
