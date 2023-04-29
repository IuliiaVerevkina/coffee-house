import { useState } from "react";

const Filtration = (props) => {
	const [term, setterm] = useState('');

	const buttonData = [
		{ name: 'all', label: 'All' },
		{ name: 'brazil', label: 'Brazil'},
		{ name: 'kenya', label: 'Kenya' },
		{ name: 'columbia', label: 'Columbia' },
	];
	const buttons = buttonData.map(({name, label}) => {
		const active = props.filter === name;
		const clazz = active ? "active" : null;
		return (
			<button 
			className={`filter-btn ${clazz}`}
			key={name}
				onClick={() => props.onFilterSelect(name)}>{label}</button>
		)
	})

	const onUpdateSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setterm(term);
		props.onUpdateSearch(term);
	}
	return (

		<section className="panel__filter">
			<div className="container">
				<div className="filtration__wrapper">
					<div className="search">
						<label className="search__label"><span>Lookiing for</span>
							<input 
							type="text" 
							placeholder="start typing here..." 
							className="search__input"
							value={term}
							onChange={onUpdateSearch}></input>
						</label>
					</div>
					<div className="filter">
						<div className="fillter__text">Or filter</div>
						{buttons}
					</div>
				</div>
			</div>
		</section>

	)

};
export default Filtration;