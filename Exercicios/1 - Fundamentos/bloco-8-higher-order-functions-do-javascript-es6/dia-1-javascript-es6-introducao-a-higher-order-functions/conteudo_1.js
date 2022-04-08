const acorda = () => {
  return 'Acordando!!' 
};

const cafeManha = () => {
  return 'Bora tomar café!!'
}

const dormir = () => {
  return 'Partiu dormir!!' 
}

const doingThings = (calback) =>{
  const resul = calback()
  console.log(resul)
}

doingThings(dormir);
doingThings(acorda);
doingThings(cafeManha);