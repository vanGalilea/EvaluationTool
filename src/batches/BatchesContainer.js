import React, { PureComponent } from 'react'
import BatchItem from './BatchItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import CreateBatchButton from './CreateBatchButton'

class BatchesContainer extends PureComponent {
  static PropTypes = {
    batches: PropTypes.array.isRequired,
    fetchBatches: PropTypes.func.isRequired,
    signedIn: PropTypes.bool,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  renderBatch(batch, index) {
    return <BatchItem key={ index } { ...batch } />
  }

  render() {
    if (!this.props.signedIn) return <p>Make sure you first Sign in...</p>
    return(
      <div className="batches wrapper">
        <header>
          <h2>All Batches: </h2>
          <CreateBatchButton />
        </header>

        <main>
          { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({
  batches,
  signedIn: !!currentUser && !!currentUser._id
})


export default connect(mapStateToProps, { fetchBatches })(BatchesContainer)
