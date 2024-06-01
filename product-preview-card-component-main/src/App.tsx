import mobileImage from "./assets/image-product-mobile.jpg";
import cartIcon from "./assets/icon-cart.svg";

const App = () => {
	return (
		<>
			<article className="product">
				<aside className="product__image">
					<img src={mobileImage} alt="Mobile Image" />
				</aside>
				<main className="product__info">
					<span className="product__type">Perfume</span>
					<h1 className="product__title">Gabrielle Essence Eau De Parfum</h1>
					<p className="product__description">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
					<div className="product__price">
						<span className="product__price-current">$149.99</span>
						<span className="product__price-old">$169.99</span>
					</div>
					<button className="product__buy">
						<img src={cartIcon} alt="Add to Cart" />
						Add to Cart
					</button>
				</main>
			</article>
		</>
	);
};

export default App;
