import { useState } from "react";

import Header from "../header";
import BlockContent from "../block-content";
import Filtration from "../filtration";
import CoffeeList from "../coffee-list";

import imglist from '../../resources/img/coffee-shop.png';

const App = () => {
	const data = [
		{
			name: "AROMISTICO ",
			weight: "Coffee 1.5 kg",
			country: 'Brazil',
			price: 4.99,
			id: 1,
			img: imglist
		},
		{
			name: "bourbon",
			weight: "Coffee 0.7 kg",
			country: 'Kenya',
			price: 6.99,
			id: 2,
			img: imglist
		},
		{
			name: "mocha",
			weight: "Coffee 1 kg",
			country: 'Columbia',
			price: 8.87,
			id: 3,
			img: imglist
		},
		{
			name: "Robusta",
			weight: "Coffee 0.5 kg",
			country: 'Columbia',
			price: 4.59,
			id: 4,
			img: imglist
		},
		{
			name: "mocha",
			weight: "Coffee 2 kg",
			country: 'Brazil',
			price: 21.99,
			id: 5,
			img: imglist
		},
		{
			name: "AROMISTICO",
			weight: "Coffee 1.5 kg",
			country: 'Kenya',
			price: 5.47,
			id: 6,
			img: imglist
		},
	]
	const [term, setterm] = useState('');
	const [filter, setFilter] = useState('all');

	const searchCoffee = (items, term) => {
		if(term.length === 0) {
			return items;
		};
		return items.filter(item => {
			return item.name.toLowerCase().includes(term)
		})
	};

	const onUpdateSearch = (term)=> {
		setterm(term);
	};

	const filterPost = (items, filter) => {
		switch(filter) {
			case "brazil": 
				return items.filter(item => item.country === 'Brazil')
			case "kenya":
				return items.filter(item => item.country === 'Kenya')
			case "columbia":
				return items.filter(item => item.country === 'Columbia')
			default:
				return items
		}
	};

	const onFilterSelect = (filter) => {
		setFilter(filter);
	}

	const visibleData = filterPost(searchCoffee(data, term), filter);
	return (
		<div className="app">
			<Header />
			<BlockContent />
			<Filtration onUpdateSearch={onUpdateSearch} filter={filter} onFilterSelect={onFilterSelect}/>
			<CoffeeList data={visibleData} />
		</div>
	)
};

export default App;