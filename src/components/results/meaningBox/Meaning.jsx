import React from 'react';
import './Meaning.scss';
import { MEANING_TEXT, SYNONYMS_TEXT } from '../../../utilities/appconstant';

export const Meaning = ({ header, definitions, synonyms }) => {
	return (
		<section className='meaning-container'>
			<div className='meaning-heading'>
				<p>
					<i>{header}</i>
				</p>
				<div></div>
			</div>
			<div className='meaning-section'>
				<p className='meaning-text'>{MEANING_TEXT}</p>
				<ul>
					{definitions.map((item, index) => {
						return (
							<li key={index}>
								<p className='definition'>{item.definition}</p>
								{item.example && (
									<p className='example'>{`"${item.example}"`}</p>
								)}
							</li>
						);
					})}
				</ul>

				{synonyms.length > 0 && (
					<div className='synonym-section'>
						<p className='meaning-text'>{SYNONYMS_TEXT}</p>
						<p className='synonym-list'>
							{synonyms.map((item, index) => {
								if (index === synonyms.length - 1)
									return <span key={index}>{item}</span>;
								return <span key={index}>{item},</span>;
							})}
						</p>
					</div>
				)}
			</div>
		</section>
	);
};
