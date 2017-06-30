import React, { PureComponent } from 'react'
import evaluationsAverage from '../evaluations/evaluationsAverage'
import './ColorBar.css'

export class ColorBar extends PureComponent {

  state = { red: "", yellow: "", green: "" }

  filterStudentsByColor(color) {
    const { students } = this.props

    return students.filter((student)=>{
       return evaluationsAverage(student) === color
     })
  }

  calculatePrecentage() {
    const { students } = this.props
    if(students.length < 1) return null
    const studentsCount = students.length
    const red = (this.filterStudentsByColor("red").length/studentsCount * 100).toFixed(0)
    const yellow = (this.filterStudentsByColor("yellow").length/studentsCount * 100).toFixed(0)
    const green = (this.filterStudentsByColor("green").length/studentsCount * 100).toFixed(0)
    this.setState({ red, yellow, green })
  }

  render() {
    const { students } = this.props
    if(students.length < 1) return null
    this.calculatePrecentage()
    const { red, yellow, green } = this.state
    return(
      <div>
        <p>Color status based on average student color</p>
        <div className="Bar">
          <div className="Red" style={{width: `${red/2}%`}}>{red}%</div>
          <div className="Yellow" style={{width: `${yellow/2}%`}}>{yellow}%</div>
          <div className="Green" style={{width: `${green/2}%`}}>{green}%</div>
        </div>
      </div>
    )
  }
}

export default ColorBar
