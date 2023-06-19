import React from 'react';
import './Result.scss';

export const Result = () => {
	const playIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='75'
			height='75'
			viewBox='0 0 75 75'
			className='play-icon'
		>
			<g fill='#A440ED' fill-rule='evenodd'>
				<circle cx='37.5' cy='37.5' r='37.5' opacity='0.25' />
				<path d='M29 27v21l21-10.5z' />
			</g>
		</svg>
	);

	return (
		<article className='result-container'>
			<section className='word-section'>
				<div className='word-left-section'>
					<h1>keyboard</h1>
					<p>/ki:bc:d/</p>
				</div>
				<div className='word-right-section'>{playIcon}</div>
			</section>
		</article>
	);
};
