import { useState } from 'react';
import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Searchbar } from './components/searchbar/Searchbar';
import { Result } from './components/results/Result';

function App() {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className='app'>
			<Navbar />
			<Searchbar value={searchValue} onChange={handleChange} />
			<Result word={searchValue} />
		</div>
	);
}

export default App;
