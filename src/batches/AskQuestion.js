import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import './CreateBatchButton.css'

class AskQuestion extends PureComponent {
  constructor(props) {
    super()

    this.state = {
      greenStudents: {},
      yellowStudents: {},
      redStudents: {},
    }
  }

  static propTypes = {
    students: PropTypes.array.isRequired,
  }


  evaluationsAverage (student) {
    const { evaluations } = student
    const colorsSum = evaluations.reduce((acc, evaluation)=> {
      return acc + evaluation.color
    }, 0)

    const average = Math.round(colorsSum/evaluations.length)

    switch(average){
      case 3 :
        return "green"

      case 2 :
        return "yellow"

      case 1 :
        return "red"

      default :
        return null
    }
  }

  sortStudents() {
    const { students } = this.props
    const greenStudents = students.filter((student)=>{
       return this.evaluationsAverage(student) === "green"
     })

   const yellowStudents = students.filter((student)=>{
      return this.evaluationsAverage(student) === "yellow"
    })

    const redStudents = students.filter((student)=>{
       return this.evaluationsAverage(student) === "red"
     })

    this.setState({
      greenStudents,
      yellowStudents,
      redStudents
    })

  }

  randomStudent() {
    this.sortStudents()
    const {greenStudents, yellowStudents, redStudents} = this.state
    const randNumber = Math.random()

    if(randNumber < 0.49){
      
    } else if (randNumber > 0.82) {

    } else {

    }
  }

  render() {

    return (
      <div className="AskQuestion">
          <RaisedButton
            label="Ask a Question"
            primary={true}
            onClick={ this.randomStudent.bind(this) }/>
      </div>
    )
  }
}


export default AskQuestion
