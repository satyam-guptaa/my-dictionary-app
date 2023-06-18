import React, { useState } from 'react';
import './Navbar.scss';

export const Navbar = () => {
	const [showFontDropdown, setFontDropdown] = useState(false);

	const handleDropDown = () => {
		setFontDropdown(!showFontDropdown);
	};

	return (
		<header>
			<nav className='navbar'>
				<img src='/images/logo.svg' alt='' />
				<div className='navbar-right-nav'>
					<div className='dropdown-container'>
						<button
							className='font-dropdown-btn'
							onClick={handleDropDown}
						>
							Sans Serif
							<img src='/images/icon-arrow-down.svg' alt='' />
						</button>{' '}
						<div
							className={`font-dropdown ${
								showFontDropdown ? 'show' : ''
							}`}
						>
							<button>Serif</button>
							<button>Sans Serif</button>
							<button>Mono</button>
						</div>
					</div>
					<div className='separator'></div>
					<input type='checkbox' name='theme-selector' id='theme' />
					<label
						htmlFor='theme'
						className='navbar-toggle-switch'
					></label>
					<img src='/images/icon-moon.svg' alt='' />
				</div>
			</nav>
		</header>
	);
};
