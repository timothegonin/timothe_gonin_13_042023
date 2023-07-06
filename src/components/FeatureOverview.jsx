/**
 * Component for rendering a feature overview item.
 * @param {Object} props - The component props.
 * @param {string} props.icon - The URL of the icon for the feature.
 * @param {string} props.iconAlt - The alt text for the feature icon.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.text - The text content of the feature.
 * @returns {JSX.Element} The rendered feature overview item.
 */

const FeatureOverview = ({ icon, iconAlt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={iconAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default FeatureOverview
