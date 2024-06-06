import images from "./images.tsx";

const SocialCard = () => {
	return (
		<article className="social-card">
			<div className="social-card__colorbar-facebook colorbar"></div>
			<div className="social-card__username">
				<span className="social-card__icon">
					<img
						src={images.facebookIcon}
						alt="Facebook"
						className="social-card__icon-logo"
					/>
				</span>
				<span className="social-card__name">@nathanf</span>
			</div>
			<div className="social-card__followers">
				<span className="social-card__followers-number">1987</span>
				<span className="social-card__followers-text">Followers</span>
			</div>
			<div className="social-card__today">
				<span className="social-card__today-arrow">
					<img
						src={images.arrowUp}
						alt="Yey! We grow!"
						className="social-card__today-arrow-up"
					/>
				</span>
				<span className="social-card__today-number">12 Today</span>
			</div>
		</article>
	);
};

export default SocialCard;
