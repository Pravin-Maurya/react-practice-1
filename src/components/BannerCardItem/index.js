// Write your code here.
import './index.css'

const BannerCard = props => {
  const {BannerCardDetails} = props
  const {headerText, description, className} = BannerCardDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="header-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCard
