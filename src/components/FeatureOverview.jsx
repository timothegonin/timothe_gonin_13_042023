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
    <div className="flex flex-col items-center flex-1 p-10">
      <img
        src={icon}
        alt={iconAlt}
        className="w-36 border-[10px] border-[#00bc77] p-4 rounded-full"
      />
      <h3 className="text-[#222] text-xl font-bold mb-2 mt-5 leading-5">
        {title}
      </h3>
      <p className="leading-tight my-3">{text}</p>
    </div>
  )
}

export default FeatureOverview
