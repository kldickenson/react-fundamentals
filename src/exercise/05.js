// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
let smallBox = <div className="box box--small" style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}>small lightblue box</div>
let mediumBox = <div className="box box--medium" style={{fontStyle: 'italic', backgroundColor: 'pink'}}>medium pink box</div>
let largeBox = <div className="box box--large" style={{fontStyle: 'italic', backgroundColor: 'orange'}}>large orange box</div>

// Extra Credit 1
// function Box({className = '', style, ...otherProps}) {
//   return (
//     <div
//       className={`box ${className}`}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//     />
//    )
// }
smallBox = <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box>
mediumBox = <Box className="box--medium" style={{backgroundColor: 'pink'}}>
  medium pink box
</Box>
largeBox = <Box className="box--large" style={{backgroundColor: 'orange'}}>
  large orange box
</Box>

// Extra Credit 2
function Box({style, size, className = '', ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
  <div
    className={`box ${className} ${sizeClassName}`}
    style={{fontStyle: 'italic', ...style}}
    {...otherProps}
  />
  )
}
smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box>
mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>
  medium pink box
</Box>
largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>
  large orange box
</Box>


function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
