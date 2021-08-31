
const initialState = {

}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        role: action.payload.role,
        role_id: action.payload.role_id,
      }
    case 'REMOVE_USER':
      return {
        state: '',
      }

    default:
      return state
  }
}