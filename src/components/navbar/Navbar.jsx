import React, { useEffect, useState, useRef } from 'react';
import './Navbar.scss';

export const Navbar = () => {
	const fontData = [
		{ name: 'Serif', font: 'Lora' },
		{ name: 'Sans Serif', font: 'Inter' },
		{ name: 'Mono', font: 'Inconsolata' },
	];
	const [showFontDropdown, setFontDropdown] = useState(false);
	const [selectedFont, setSelectedFont] = useState('Serif');
	const [darkMode, setDarkMode] = useState(false);
	const dropdownRef = useRef();
	const dropdownBtnRef = useRef();
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
		function onClickElsewhere(e) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target) &&
				!dropdownBtnRef.current.contains(e.target)
			) {
				setFontDropdown(false);
			}
		}
		document.addEventListener('mousedown', onClickElsewhere);
		return () => {
			document.removeEventListener('mousedown', onClickElsewhere);
		};
	}, []);

	return (
		<header>
			<nav className='navbar'>
				<img src='/images/logo.svg' alt='' />
				<div className='navbar-right-nav'>
					<div className='dropdown-container'>
						<button
							ref={dropdownBtnRef}
							className='font-dropdown-btn'
							onClick={() => setFontDropdown(!showFontDropdown)}
						>
							{selectedFont}
							<img src='/images/icon-arrow-down.svg' alt='' />
						</button>
						<div
							ref={dropdownRef}
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
