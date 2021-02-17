import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#efead1"
    foregroundColor="#dfdddd"
    {...props}
  >
    <circle cx="116" cy="116" r="116" />
  </ContentLoader>
)

export default Loader