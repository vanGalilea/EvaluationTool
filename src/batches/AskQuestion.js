import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import './CreateBatchButton.css'

class AskQuestion extends PureComponent {
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

  sortStudentsByColor() {
    const { students } = this.props
    const randColor = this.randomColor()
    const chosenStudents = students.filter((student)=>{
       return this.evaluationsAverage(student) === randColor
     })

     if (chosenStudents.length < 1){
       this.sortStudentsByColor()
     } else {
       const randIndex = Math.floor(Math.random() * chosenStudents.length)
       window.alert(chosenStudents[randIndex].name)
     }
  }

  randomColor() {
    const randNumber = Math.random()

    if(randNumber < 0.49){
      return "red"
    } else if (randNumber > 0.82) {
      return "green"
    } else {
      return "yellow"
    }
  }

  render() {

    return (
      <div className="AskQuestion">
          <RaisedButton
            label="Ask a Question"
            primary={true}
            onClick={ this.sortStudentsByColor.bind(this) }/>
      </div>
    )
  }
}


export default AskQuestion
