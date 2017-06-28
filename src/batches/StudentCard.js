import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './StudentCard.css'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import ListItem from 'material-ui/List/ListItem'
import FlatButton from 'material-ui/FlatButton';
import deleteStudent from '../actions/students/delete'

const style1 = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

const style2 = {
  height: 150,
  width: 450,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

class StudentCard extends PureComponent {
  static PropTypes = {
    student: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      evaluations: PropTypes.array.isRequired,
    })
  }

  render() {
    const { name, picture, _id } = this.props

    return(
      <Paper style={style2} zDepth={2} circle={false} >
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              src={picture}
              size={75}
              style={style1}
            />
          }
        >
          <Link to={`/students/${_id}`}>{ name }</Link>
          <FlatButton label="X Student" primary={true} onClick={()=> {this.props.deleteStudent(this.props)}} />

        </ListItem>
      </Paper>
    )
  }
}

export default connect(null, { deleteStudent })(StudentCard)
