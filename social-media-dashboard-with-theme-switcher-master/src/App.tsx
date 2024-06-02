import facebookIcon from "./assets/icon-facebook.svg";
import arrowUp from "./assets/icon-up.svg";
//import arrowDown from "./assets/icon-down.svg";
function App() {
	return (
		<>
			<div className="container">
				<section className="rrss">
					<header className="rrss__header">
						<h1 className="rrss__title">Social Media Dashboard</h1>
						<span className="rrss__total-followers">
							Total Followers: 23,004
						</span>
						<div className="switch">Dark/Light Mode</div>
					</header>
					<main className="rrss__main">
						<article className="social-card">
							<div className="social-card__colorbar-facebook"></div>
							<div className="social-card__username">
								<span className="social-card__icon">
									<img
										src={facebookIcon}
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
										src={arrowUp}
										alt="Yey! We grow!"
										className="social-card__today-arrow-up"
									/>
								</span>
								<span className="social-card__today-number">12 Today</span>
							</div>
						</article>
					</main>
				</section>
				<section className="overview">
					<header className="overview__header">
						<h2 className="overview__title">Overview - Today</h2>
					</header>
					<main className="overview__main">
						<article className="overview-card">
							<div className="overview-card__title">Page Views</div>
							<div className="overview-card__number">87</div>
							<div className="overview-card__today">
								<span className="overview-card__today-arrow">
									<img
										src={arrowUp}
										alt="Yey! We grow!"
										className="overview-card__today-arrow-up"
									/>
								</span>
								<span className="overview-card__today-number">3%</span>
							</div>
						</article>
					</main>
				</section>
			</div>
		</>
	);
}

export default App;
