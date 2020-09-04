const  phaseScores  =  [
    {  nome : 'Vinicius Costa' ,  pontuação : 337  } ,
    {  nome : 'Roger Melo' ,  pontuação : 43  } ,
    {  nome : 'Alfredo Braga' ,  pontuação : 234  } ,
    {  nome : 'Pedro H. Silva' ,  pontuação : 261  } ,
    {  nome : 'Ana Paula Rocha' ,  pontuação : 491  } ,
    {  nome : 'Vinicius Costa' ,  pontuação : 167  } ,
    {  nome : 'Roger Melo' ,  pontuação : 137  } ,
    {  nome : 'Alfredo Braga' ,  pontuação : 135  } ,
    {  nome : 'Ana Paula Rocha' ,  pontuação : 359  } ,
    {  nome : 'Pedro H. Silva' ,  pontuação : 133  }
  ]

  const viniciusScore = phaseScores.reduce((accumulator, phaseScore) => {

    if(phaseScore.name === 'Vinicius Costa') {
        accumulator += phaseScore.score

    }
    return accumulator
  },0)


  console.log(viniciusScore)