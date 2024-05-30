import mobileImage from "./assets/image-product-mobile.jpg";
import cartIcon from "./assets/icon-cart.svg";

const App = () => {
	return (
		<>
			<article>
				<aside>
					<img src={mobileImage} alt="Mobile Image" />
				</aside>
				<main>
					<span className="product-type">Perfume</span>
					<h1 className="product-title">Gabrielle Essence Eau De Parfum</h1>
					<p className="product-description">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
					<div className="product-price">
						<span className="product-current-price">$149.99</span>
						<span className="product-old-price">$169.99</span>
					</div>
					<button className="product-buy">
						<img src={cartIcon} alt="Add to Cart" />
						Add to Cart
					</button>
				</main>
			</article>
		</>
	);
};

export default App;
