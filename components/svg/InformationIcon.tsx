import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const InformationIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G fill="#101010" clipPath="url(#a)">
      <Path d="M10 0C4.473 0 0 4.473 0 10s4.473 10 10 10 10-4.473 10-10S15.527 0 10 0Zm0 18.605c-4.745 0-8.605-3.86-8.605-8.605 0-4.745 3.86-8.605 8.605-8.605 4.745 0 8.605 3.86 8.605 8.605 0 4.745-3.86 8.605-8.605 8.605Z" />
      <Path d="M10.001 8.336c-.592 0-1.013.25-1.013.618v5.015c0 .317.42.632 1.013.632.566 0 1.027-.316 1.027-.632V8.954c0-.368-.46-.618-1.027-.618Zm0-3.094c-.605 0-1.08.435-1.08.935s.475.948 1.08.948c.593 0 1.067-.448 1.067-.948 0-.5-.474-.935-1.067-.935Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default InformationIcon