const INITAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    { id: 1, title: 'Iniciando com React', lessons: [
      { id: 1, title: 'Primeira aula'},
      { id: 2, title: 'Segunda aula'}
    ]},
    { id: 2, title: 'Apresendo Reux', lessons: [
      { id: 3, title: 'Terceira aula'},
      { id: 4, title: 'Quarta aula'}
    ]},
  ]
};

//Funcão que armazena o stado inicial.
export default function course(state = INITAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state, 
      activeLesson: action.lesson, 
      activeModule: action.module }
  }
  return state;
}