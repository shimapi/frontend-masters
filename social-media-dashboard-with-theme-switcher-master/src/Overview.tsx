import OverviewCard from "./OverviewCard";
import "./Overview.scss";

const Overview = () => {
	return (
		<section className="overview">
			<header className="overview__header">
				<h2 className="overview__title">Overview - Today</h2>
			</header>
			<main className="overview__main">
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
			</main>
		</section>
	);
};

export default Overview;
