import React, { PureComponent } from 'react'
import BatchItem from './BatchItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'

class BatchesContainer extends PureComponent {
  static PropTypes = {
    batches: PropTypes.array.isRequired,
    fetchBatches: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  renderBatch(batch, index) {
    return <BatchItem key={ index } { ...batch } />
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <h2>Batches List:</h2>
        </header>

        <main>
          { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({
  batches
})

export default connect(mapStateToProps, { fetchBatches })(BatchesContainer)
