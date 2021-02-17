
const SVG = ({linearGradient}) => {
  
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor svg">
        <defs>
          {/* <linearGradient
              id="linear-gradient"
              x1="0%"
              y1="0%"
              x2="110%"
              y2="0%"
              gradientTransform="rotate(45)"
          >
              <stop offset="0%" stop-color="#00aeef" stop-opacity="1" />
              <stop offset="100%" stop-color="#096fb9" stop-opacity="1" />
          </linearGradient> */}
          {linearGradient}
        </defs>
      <path d="M0 0 L50 100 L100 0 Z" fill="url(#linear-gradient)"></path>
    </svg>
  )
}

export default SVG;