import images from "./images";

const OverviewCard = () => {
	return (
		<article className="overview-card">
			<div className="overview-card__title">Page Views</div>
			<div className="overview-card__number">87</div>
			<div className="overview-card__today">
				<span className="overview-card__today-arrow">
					<img
						src={images.arrowUp}
						alt="Yey! We grow!"
						className="overview-card__today-arrow-up"
					/>
				</span>
				<span className="overview-card__today-number">3%</span>
			</div>
		</article>
	);
};

export default OverviewCard;
