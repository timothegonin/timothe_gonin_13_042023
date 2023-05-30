const FeatureOverview = ({ icon, iconAlt, title, text }) => {
	return (
		<div className="feature-item">
			<img src={icon} alt={iconAlt} className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default FeatureOverview;
