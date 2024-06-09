import SocialCard from "./SocialCard";

const rrss = () => {
	return (
		<section className="rrss">
			<header className="rrss__header">
				<section className="rrss__total">
					<h1 className="rrss__title">Social Media Dashboard</h1>
					<span className="rrss__total-followers">Total Followers: 23,004</span>
				</section>
				<div className="switch">
					<input type="checkbox switch checked" />
					Dark/Light Mode
				</div>
			</header>
			<main className="rrss__main">
				<SocialCard />
				<SocialCard />
				<SocialCard />
				<SocialCard />
			</main>
		</section>
	);
};

export default rrss;
