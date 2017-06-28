import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './StudentCard.css'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import ListItem from 'material-ui/List/ListItem'

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
    const { name, picture, _id, batchId } = this.props

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
        <Link to={`/batches/${batchId}/students/${_id}`}>{ name }</Link>
      </ListItem>
      </Paper>
    )
  }
}


export default StudentCard
