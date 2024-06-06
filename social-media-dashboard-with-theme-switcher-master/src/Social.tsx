import SocialCard from "./SocialCard";

const rrss = () => {
	return (
		<section className="rrss">
			<header className="rrss__header">
				<h1 className="rrss__title">Social Media Dashboard</h1>
				<span className="rrss__total-followers">Total Followers: 23,004</span>
				<div className="switch">Dark/Light Mode</div>
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