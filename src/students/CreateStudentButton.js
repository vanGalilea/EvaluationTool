import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const style = {
  marginRight: 20,
}


class CreateBatchButton extends PureComponent {
  render() {
    const {batchNum} = this.props
    return (
      <div className="CreateBatchButton">
        <Link to={`/batches/${batchNum}/create-student`}>
          <FloatingActionButton style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
}

export default CreateBatchButton
