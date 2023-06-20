import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Searchbar } from './components/searchbar/Searchbar';
import { Result } from './components/results/Result';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};

	const handleWordSubmit = async () => {
		const url = import.meta.env.VITE_DICTIONARY_API + searchValue;
		setLoading(true);
		try {
			const { data } = await axios.get(url);
			setSearchResult(data);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			console.log(err);
		}
	};

	return (
		<div className='app'>
			<Navbar />
			<Searchbar
				value={searchValue}
				onChange={handleChange}
				onClick={handleWordSubmit}
			/>
			{loading && <div>Loading...</div>}
			{searchResult.length > 0 && !loading && (
				<Result result={searchResult[0]} />
			)}
		</div>
	);
}

export default App;
