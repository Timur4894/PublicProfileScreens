import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Riddles = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9EA3B1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.68 10.27-6.563-5.786a.932.932 0 0 0-1.234 0L5.32 10.27a.948.948 0 0 0-.32.711v8.074c0 .522.42.945.938.945h3.75a.941.941 0 0 0 .937-.945v-3.779c0-.521.42-.944.938-.944h1.874c.518 0 .938.422.938.944v3.78c0 .521.42.944.938.944h3.75a.941.941 0 0 0 .937-.945v-8.074a.948.948 0 0 0-.32-.71Z"
    />
  </Svg>
)
export default Riddles
