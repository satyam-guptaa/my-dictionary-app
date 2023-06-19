import { useState } from 'react';
import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Searchbar } from './components/searchbar/Searchbar';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Searchbar />
		</div>
	);
}

export default App;
