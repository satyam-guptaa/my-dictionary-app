import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import * as CONSTANT from '../../utilities/appconstant';

export const Navbar = () => {
	const fontData = [
		{ name: 'Serif', font: 'Lora' },
		{ name: 'Sans Serif', font: 'Inter' },
		{ name: 'Mono', font: 'Inconsolata' },
	];
	const [showFontDropdown, setFontDropdown] = useState(false);
	const [selectedFont, setSelectedFont] = useState();
	const [darkMode, setDarkMode] = useState(false);
	const moonSvg = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='22'
			height='22'
			viewBox='0 0 22 22'
			className={`${darkMode ? 'icon-moon' : ''}`}
		>
			<path
				fill='none'
				stroke='#838383'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				d='M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z'
			/>
		</svg>
	);

	const handleDropDown = () => {
		setFontDropdown(!showFontDropdown);
	};
	const handleFontChange = ({ font, name }) => {
		const bodyStyles = document.getElementsByTagName('body')[0].style;
		bodyStyles.fontFamily = font;
		setSelectedFont(name);
	};

	const handleThemeChange = (e) => {
		const darkMode = e.target.checked;
		const bodyStyles = document.getElementsByTagName('body')[0].style;
		const searchBar = document.getElementsByClassName('searchbar')[0].style;
		if (darkMode) {
			bodyStyles.color = '#fff';
			bodyStyles.backgroundColor = '#050505';
			searchBar.backgroundColor = '#1d1d1d';
		} else {
			bodyStyles.color = '';
			bodyStyles.backgroundColor = '';
			searchBar.backgroundColor = '';
		}
		setDarkMode(darkMode);
	};

	useEffect(() => {
		const bodyFont = document.getElementsByTagName('body')[0].style;
		bodyFont.fontFamily = fontData[0].font;
		setSelectedFont(fontData[0].name);
	}, []);

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
							{selectedFont}
							<img src='/images/icon-arrow-down.svg' alt='' />
						</button>
						<div
							className={`font-dropdown ${
								showFontDropdown ? 'show' : ''
							} ${darkMode ? 'dark' : ''}`}
						>
							{fontData.map((item) => {
								return (
									<button
										key={item.font}
										onClick={() => handleFontChange(item)}
										style={{ fontFamily: item.font }}
									>
										{item.name}
									</button>
								);
							})}
						</div>
					</div>
					<div className='separator'></div>
					<input
						type='checkbox'
						name='theme-selector'
						id='theme'
						onChange={handleThemeChange}
					/>
					<label
						htmlFor='theme'
						className='navbar-toggle-switch'
					></label>
					{moonSvg}
				</div>
			</nav>
		</header>
	);
};
