import React from 'react';
import './ErrorResult.scss';

export const ErrorResult = ({ error }) => {
	return (
		<article className='error-result-container'>
			<img src='/images/icon-sad-emoji.svg' alt='' />
			<p className='error-title'>{error?.title}</p>
			<p className='error-message'>
				{error?.message} {error?.resolution}
			</p>
		</article>
	);
};
