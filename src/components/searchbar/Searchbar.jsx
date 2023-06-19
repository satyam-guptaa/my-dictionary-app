import React from 'react';
import './Searchbar.scss';

export const Searchbar = () => {
	return (
		<form className='searchbar'>
			<input type='text' />
			<button>
				<img src='images/icon-search.svg' alt='' />
			</button>
		</form>
	);
};
