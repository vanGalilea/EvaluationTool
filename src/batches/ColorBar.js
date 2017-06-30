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
    const red = this.filterStudentsByColor("red").length/studentsCount * 100
    const yellow = this.filterStudentsByColor("yellow").length/studentsCount * 100
    const green = this.filterStudentsByColor("green").length/studentsCount * 100
    this.setState({ red: `width: ${red}`, yellow: `width: ${yellow}`, green: `width: ${green}` })
  }

  render() {
    const { students } = this.props
    if(students.length < 1) return null
    this.calculatePrecentage()
    const { red, yellow, green } = this.state
    return(
      <div className="Bar">
        <p>Red students: {red}%</p>
        <p>Yellow students: {yellow}%</p>
        <p>Green students: {green}%</p>
      </div>
    )
  }
}

export default ColorBar
