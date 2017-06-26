import { CREATE_BATCH } from '../actions/batches/create'

const batches = [
  {
    number: 1,
    startDate: 150117,
    endDate: 150117,
    students: ["student1", "student2"],
  },
  {
    number: 2,
    startDate: 150117,
    endDate:  150117,
    students: ["student3", "student4"],
  },
]



export default (state = batches, { type, payload } = {}) => {
  switch(type) {
    case CREATE_BATCH :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
