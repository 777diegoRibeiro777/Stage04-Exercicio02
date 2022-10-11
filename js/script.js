const student = [
  {
    name: "Diego",
    noteOne: 7.0,
    noteTwo: 8.0,
  },

  {
    name: "Mayk",
    noteOne: 7.0,
    noteTwo: 7.0,
  },

  {
    name: "Bruna",
    noteOne: 5.0,
    noteTwo: 6.0,
  }
]

const calcAverage = (noteOne, noteTwo) => {
  let average = (noteOne + noteTwo) / 2
  return average 
}

const showMessage1 =  (massageContent) => {
  let messageOne = `A média do aluno(a) ${massageContent.name} é ${calcAverage(massageContent.noteOne, massageContent.noteTwo)}:
  Parabéns, ${massageContent.name}! Você foi aprovado(a) no concurso.`
  return messageOne
}

const showMessage2 = (massageContent) => {
  let massageTwo = `A média do aluno(a) ${massageContent.name} é ${calcAverage(massageContent.noteOne, massageContent.noteTwo)}:
  Não foi dessa vez ${massageContent.name}! Estude mais e vamos tentar de novo.`
  return massageTwo
}

for(massageContent of student) {
  if(calcAverage(massageContent.noteOne, massageContent.noteTwo) >= 7) {
    alert(showMessage1(massageContent))
  } else {
    alert(showMessage2(massageContent))
  }
}