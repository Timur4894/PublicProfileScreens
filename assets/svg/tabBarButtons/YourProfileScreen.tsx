import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const YourProfileScreen = ({color} : {color: string}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M16.625 11.75a4.125 4.125 0 1 1-8.25 0 4.125 4.125 0 0 1 8.25 0Zm5.625.75a9.75 9.75 0 1 1-9.75-9.75 9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0a8.259 8.259 0 0 0-8.575-8.243c-4.416.17-7.937 3.848-7.925 8.266a8.217 8.217 0 0 0 2.085 5.453 7.475 7.475 0 0 1 2.04-1.998.375.375 0 0 1 .453.03 5.609 5.609 0 0 0 7.339 0 .374.374 0 0 1 .452-.03 7.474 7.474 0 0 1 2.043 1.998A8.214 8.214 0 0 0 20.75 12.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.5h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default YourProfileScreen
