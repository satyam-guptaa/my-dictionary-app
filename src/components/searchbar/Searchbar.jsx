import React, { useEffect, useRef, useState } from 'react';
import './Searchbar.scss';
import { SEARCH_PLACEHOLDER } from '../../utilities/appconstant';

export const Searchbar = ({ value, onChange, onClick }) => {
	const inputRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className={`searchbar ${isFocused ? 'active' : ''}`}>
			<input
				type='text'
				value={value}
				onChange={onChange}
				ref={inputRef}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				placeholder={SEARCH_PLACEHOLDER}
			/>
			<button onClick={onClick}>
				<img src='images/icon-search.svg' alt='' />
			</button>
		</div>
	);
};
