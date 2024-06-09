import images from "./images";

interface OverviewCardProps {
	title: string;
	icon: string;
	followers: string;
	percentage: string;
	arrow: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
	title,
	icon,
	followers,
	percentage,
	arrow,
}) => {
	const arrowImage = arrow === "up" ? images.arrowUp : images.arrowDown;

	let socialName: string;
	let socialImage: string;

	switch (icon) {
		case "Facebook":
			socialImage = images.facebook;
			socialName = "facebook";
			break;
		case "Twitter":
			socialImage = images.twitter;
			socialName = "twitter";
			break;
		case "Instagram":
			socialImage = images.instagram;
			socialName = "instagram";
			break;
		case "Youtube":
			socialImage = images.youtube;
			socialName = "youtube";
			break;
		default:
			socialImage = "";
			socialName = "";
			break;
	}

	return (
		<article className="overview-card">
			<section className="overview-card__column-left">
				<div className="overview-card__title">{title}</div>
				<div className="overview-card__number">{followers}</div>
			</section>

			<section className="overview-card__column-right">
				<div className="overview-card__icon">
					<img
						src={socialImage}
						alt={icon}
						className={`overview-card__${socialName}`}
					/>
				</div>

				<div className={`overview-card__today ${arrow}`}>
					<span className={`overview-card__today-arrow-${arrow}`}>
						<img
							src={arrowImage}
							alt={`we are going ${arrow}!!`}
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
