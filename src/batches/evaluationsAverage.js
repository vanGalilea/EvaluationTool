export default (student) => {
  const { evaluations } = student
  if(evaluations === null) return "red"
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
