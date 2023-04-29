import imgContent from '../resources/img/coffee-girl.jpg';
import beansCoffee from '../resources/img/coffee-beans.png'

const BlockContent = () => {
	return (
		<section className='content'>
			<div className='container'>
				<div className="content-block">
					<img src={imgContent} alt="" />
					<div className='text-content'>
						<h3>About our beans</h3>
						<img src={beansCoffee} alt='' />
						<p>
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
							Afraid at highly months do things on at. Situation recommend objection do intention
							so questions.
							As greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered followed. At it went
							is song that held help face.
						</p>
					</div>
				</div>
				<div className='rectangular-strip'></div>
			</div>
		</section>
	)
};
export default BlockContent;