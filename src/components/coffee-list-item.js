
const CoffeeListItem = (props) => {
	const { name, country, price, img, weight } = props;
	return (
		<div className="coffee__list-item">
			<img src={img}alt='coffee' />
			<div className='coffee__list-title'><span>{name}</span> {weight}</div>
			<div className='coffee__list-subtitle'>{country}</div>
			<div className='coffee__list-price'>{price}$</div>
		</div>
	)
};
export default CoffeeListItem;