import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import './CreateBatchButton.css'

const style = {
  height: 50,
  width: 50,
}

class AskQuestion extends PureComponent {
  static propTypes = {
    students: PropTypes.array.isRequired,
  }

  state = {
    open: false,
    luckyOne: "",
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

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
       this.setState({luckyOne: chosenStudents[randIndex]})
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
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={false}
          onTouchTap={this.handleClose}
        />,
      ];

      return (
        <div>
          <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} onClick={this.sortStudentsByColor.bind(this)}/>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                src={this.state.luckyOne.picture}
                size={75}
                style={style}
              />
            }
          ></ListItem>
            <p>{this.state.luckyOne.name}</p>
          </Dialog>
        </div>
      )
    }
}


export default AskQuestion
