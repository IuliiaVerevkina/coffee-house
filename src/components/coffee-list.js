import CoffeeListItem from "./coffee-list-item";
const CoffeeList = ({data}) => {
	const element = data.map(item => {
		return (
			<CoffeeListItem {...item} key={item.id} />
		)
	})
	return (
		<section className="shop__content">
			<div className=" container">
				<div className="coffee__list">
					{element}
				</div>
			</div>
		</section>
	)
};
export default CoffeeList;