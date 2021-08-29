
const initialState = {
  name: '',
  idade: 0
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        name: action.payload.name,
        idade: action.payload.idade,
      }
    case 'REMOVE_USER':
      return {
        state: '',
      }

    default:
      return state
  }
}