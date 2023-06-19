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

	const handleDropDown = () => {
		setFontDropdown(!showFontDropdown);
	};

	const handleFontChange = ({ font, name }) => {
		const bodyFont = document.getElementsByTagName('body')[0].style;
		bodyFont.fontFamily = font;
		setSelectedFont(name);
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
							}`}
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
