import images from "./images";

interface OverviewCardProps {
	title: string;
	icon: string;
	followers: string;
	percentage: string;
	arrow: "up" | "down";
}

const OverviewCard: React.FC<OverviewCardProps> = ({
	title,
	icon,
	followers,
	percentage,
	arrow,
}) => {
	const arrowImage = arrow === "up" ? images.arrowUp : images.arrowDown;

	return (
		<article className="overview-card">
			<section className="overview-card__column-left">
				<div className="overview-card__title">{title}</div>
				<div className="overview-card__number">{followers}</div>
			</section>

			<section className="overview-card__column-right">
				<div className="overview-card__icon">
					<img
						src={images.facebookIcon}
						alt={icon}
						className="overview-card__facebook"
					/>
				</div>

				<div className="overview-card__today">
					<span className={`overview-card__today-arrow-${arrow}`}>
						<img
							src={arrowImage}
							alt="Yey! We grow!"
							className={`overview-card__today-arrow`}
						/>
					</span>
					<span className="overview-card__today-number">{percentage}</span>
				</div>
			</section>
		</article>
	);
};

export default OverviewCard;
