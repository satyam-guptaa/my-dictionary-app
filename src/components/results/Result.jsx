import React from 'react';
import './Result.scss';
import { Meaning } from './meaningBox/Meaning';
import { SOURCE_TEXT } from '../../utilities/appconstant';

export const Result = ({ result }) => {
	console.log(result);
	const phonetic = result.phonetics.filter(
		(item) => item.audio && item.text
	)[0];

	const nounMeanings = result.meanings.filter(
		(item) => item.partOfSpeech === 'noun'
	)[0];
	const verbMeanings = result.meanings.filter(
		(item) => item.partOfSpeech === 'verb'
	)[0];

	const handlePhoneticPlay = () => {
		const audio = new Audio(phonetic.audio);
		audio.play();
	};

	const playIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='75'
			height='75'
			viewBox='0 0 75 75'
			className='play-icon'
		>
			<g fill='#A440ED' fillRule='evenodd'>
				<circle cx='37.5' cy='37.5' r='37.5' opacity='0.25' />
				<path d='M29 27v21l21-10.5z' />
			</g>
		</svg>
	);

	return (
		<article className='result-container'>
			<section className='word-section'>
				<div className='word-left-section'>
					<h1>{result.word}</h1>
					{<p>{phonetic?.text}</p>}
				</div>
				{phonetic?.audio && (
					<div className='word-right-section'>
						<button onClick={handlePhoneticPlay}>{playIcon}</button>
					</div>
				)}
			</section>
			{nounMeanings && (
				<Meaning
					header={nounMeanings.partOfSpeech}
					definitions={nounMeanings.definitions}
					synonyms={nounMeanings.synonyms}
				/>
			)}
			{verbMeanings && (
				<Meaning
					header={verbMeanings.partOfSpeech}
					definitions={verbMeanings.definitions}
					synonyms={verbMeanings.synonyms}
				/>
			)}
			<hr />
			{result.sourceUrls && (
				<section className='source-section'>
					<p>
						<span>{SOURCE_TEXT}</span>
						<a href={result.sourceUrls[0]} target='_blank'>
							{result.sourceUrls[0]}
						</a>
						<img src='/images/icon-new-window.svg' alt='' />
					</p>
				</section>
			)}
		</article>
	);
};
