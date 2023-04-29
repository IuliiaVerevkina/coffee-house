import logo from '../resources/img/logo-white.png'
const Header = () => {
	return (
		<header className="header">
			<nav>
				<ul>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
					<li><a href="#"><img src={logo} alt='logo-coffee' /></a></li>
					<li><a href="!#">Our coffee</a></li>
					<li><a href="!#">For your pleasure</a></li>
				</ul>
			</nav>
			<h1>Our Coffee</h1>
		</header>
	)
};
export default Header;