import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LeadersScreen = ({color} : {color: string}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
  >
    <Path
      stroke={color}
      strokeWidth={1.405}
      d="M11.92 4.643a4.036 4.036 0 0 0 1.524 0l3.59-.69a2.63 2.63 0 0 1 3.127 2.583v9.143a2.63 2.63 0 0 1-1.271 2.252l-4.849 2.927a2.63 2.63 0 0 1-2.719 0l-4.848-2.927-.364.601.364-.601a2.63 2.63 0 0 1-1.271-2.252V6.536A2.63 2.63 0 0 1 8.33 3.953l3.59.69Z"
    />
    <Path
      fill={color}
      d="M17.006 11.077a.736.736 0 0 0-.41-1.256l-2.193-.318a.107.107 0 0 1-.08-.058l-.98-1.989a.736.736 0 0 0-1.32 0l-.983 1.99a.107.107 0 0 1-.08.058l-2.194.318a.736.736 0 0 0-.407 1.255l1.587 1.548a.107.107 0 0 1 .031.094l-.374 2.185a.736.736 0 0 0 1.068.776l1.962-1.032a.104.104 0 0 1 .1 0l1.962 1.032a.737.737 0 0 0 1.068-.776l-.375-2.185a.107.107 0 0 1 .032-.095l1.586-1.547Z"
    />
  </Svg>
)
export default LeadersScreen
