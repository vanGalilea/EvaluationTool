import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'

export class BatchPage extends PureComponent {
  static PropTypes = {
    number: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  render() {
    const { number, startDate, endDate, students } = this.props

    return(
      <div className="batch page">
        <h1>Batch No. {number}</h1>
        <h4>{startDate}</h4>
        <h4>{endDate}</h4>
        <h5>Students List:</h5>
        
      </div>
    )
  }
}

const mapStateToProps = ({ batches}, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}

export default connect(mapStateToProps, { fetchBatches })(BatchPage)