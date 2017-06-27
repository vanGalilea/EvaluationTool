import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { replace } from 'react-router-redux'
import { showError } from '../actions/loading'
import createBatch from '../actions/batches/create'
import RaisedButton from 'material-ui/RaisedButton'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import './CreateBatchButton.css'

class CreateBatchButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="CreateBatchButton">
        <Link to="/create-batch">
          <RaisedButton
            label="Create Batch"
            primary={true}
            icon={<StarIcon />} />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createBatch, replace, showError })(CreateBatchButton)
