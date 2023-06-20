import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Searchbar } from './components/searchbar/Searchbar';
import { Result } from './components/results/Result';
import { ErrorResult } from './components/errorComponent/ErrorResult';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [serverError, setServerError] = useState(null);
	const [inputError, setInputError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};

	const handleWordSubmit = async () => {
		if (searchValue.length === 0) {
			setInputError(true);
			setSearchResult([]);
			return;
		}
		if (searchValue === searchResult[0].word) {
			return;
		}
		setLoading(true);
		setSearchResult([]);
		setServerError(null);
		setInputError(false);
		const url = import.meta.env.VITE_DICTIONARY_API + searchValue;
		try {
			const { data } = await axios.get(url);
			setSearchResult(data);
			setLoading(false);
		} catch (err) {
			const { response } = err;
			setLoading(false);
			setServerError(response.data);
		}
	};

	return (
		<div className='app'>
			<Navbar />
			<Searchbar
				value={searchValue}
				onChange={handleChange}
				onClick={handleWordSubmit}
				inputError={inputError}
			/>
			{loading && (
				<div style={{ textAlign: 'center' }}>
					<img src='/images/icon-spinner.svg' alt='' />
				</div>
			)}
			{searchResult.length > 0 && !loading && !serverError && (
				<Result result={searchResult[0]} />
			)}
			{serverError && searchResult.length === 0 && !loading && (
				<ErrorResult error={serverError} />
			)}
		</div>
	);
}

export default App;
