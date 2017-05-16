import React from 'react'

function CoordinatesButton(props) {
  function getCoords(event) {
    let x = event.clientX
    let y = event.clientY
    props.onReceiveCoordinates([x,y])
  }
  return (
      <button onClick={getCoords}/>
    )
}


// class CoordinatesButton extends React.Component {
//   getCoords(event) {
//     let x = event.clientX
//     let y = event.clientY
//     this.props.onReceiveCoordinates([x,y])
//   }
//   render(){
//     return (
//       <button onClick={this.getCoords.bind(this)}/>
//     )
//   }
// }

export default CoordinatesButton
