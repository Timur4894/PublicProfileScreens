import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Path,
  Rect,
  Defs,
  ClipPath,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={84}
    height={87}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="url(#c)"
          d="M84 42C84 18.804 65.196 0 42 0S0 18.804 0 42s18.804 42 42 42 42-18.804 42-42Z"
        />
      </G>
      <Rect
        width={80}
        height={80}
        x={2}
        y={2}
        stroke="#EAEDF4"
        strokeWidth={4}
        rx={40}
        shapeRendering="crispEdges"
      />
    </G>
    <Defs>
      <ClipPath id="b">
        <Rect width={84} height={84} fill="#fff" rx={42} />
      </ClipPath>
      <Pattern
        id="c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#d" transform="scale(.0025)" />
      </Pattern>
      <Image
        //тут картикнка 
        id="d"
        width={400}
        height={400}
      />
    </Defs>
  </Svg>
)
export default SvgComponent
