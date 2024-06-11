import SocialCard from "./SocialCard";
import "./Social.scss";
import socialJSON from "./assets/rrss.json";
//import Switch from "./Switch";

const rrss = () => {
	return (
		<section className="rrss total-cards">
			<header className="rrss__header">
				<section className="rrss__total">
					<h1 className="rrss__title">Social Media Dashboard</h1>
					<span className="rrss__total-followers">Total Followers: 23,004</span>
				</section>
				<div className="switch">Dark/Light Mode</div>
			</header>
			<main className="rrss__main">
				{socialJSON &&
					socialJSON.map(
						({ username, followers, socialword, comparison, icon, arrow }) => (
							<SocialCard
								username={username}
								followers={followers}
								socialword={socialword}
								comparison={comparison}
								icon={icon}
								arrow={arrow}
								key={followers}
							/>
						)
					)}
			</main>
		</section>
	);
};

export default rrss;
