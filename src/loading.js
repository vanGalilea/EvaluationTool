import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import loadingImage from './img/Loading.gif'

class Loading extends PureComponent {
  static PropTypes = {
    ready: PropTypes.bool,
  }

  render() {
    if (this.props.ready) return null

    return (
      <div className="Loading">
        <img src={loadingImage} alt="Loading..." />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ ready: !loading })

export default connect(mapStateToProps)(Loading)
