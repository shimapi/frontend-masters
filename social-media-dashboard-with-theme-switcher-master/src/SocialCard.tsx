import images from "./images.tsx";

interface OverviewCardProps {
	username: string;
	followers: string;
	socialword: string;
	comparison: string;
	icon: string;
	arrow: string;
}

const SocialCard: React.FC<OverviewCardProps> = ({
	username,
	followers,
	socialword,
	comparison,
	icon,
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
		<article className="social-card">
			<div className={`social-card__colorbar-${socialName} colorbar`}></div>
			<div className="social-card__username">
				<span className="social-card__icon">
					<img
						src={socialImage}
						alt="Facebook"
						className="social-card__icon-logo"
					/>
				</span>
				<span className="social-card__name">{username}</span>
			</div>
			<div className="social-card__followers">
				<span className="social-card__followers-number">{followers}</span>
				<span className="social-card__followers-text">{socialword}</span>
			</div>
			<div className={`social-card__today ${arrow}`}>
				<span className={`social-card__today ${arrow}`}>
					<img
						src={arrowImage}
						alt={`we are going ${arrow}!!`}
						className={`social-card__today-arrow`}
					/>
				</span>
				<span className="social-card__today-number">{comparison}</span>
			</div>
		</article>
	);
};

export default SocialCard;
