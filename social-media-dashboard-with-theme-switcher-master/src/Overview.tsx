import OverviewCard from "./OverviewCard";
import "./Overview.scss";
import overviewJSON from "./assets/overview.json";

const Overview = () => {
	return (
		<section className="total-cards overview ">
			<header className="overview__header">
				<h2 className="overview__title">Overview - Today</h2>
			</header>
			<main className="overview__main">
				{overviewJSON &&
					overviewJSON.map(({ title, icon, followers, percentage, arrow }) => (
						<OverviewCard
							title={title}
							icon={icon}
							key={followers}
							percentage={percentage}
							arrow={arrow}
							followers={followers}
						/>
					))}
			</main>
		</section>
	);
};

export default Overview;
