//Reducer 
const FormReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_DATA":
          return state.concat(action.payload)
          // break;
  
      case "DELETE_DATA":
        const id = action.payload
        return state.filter((items) => items.id !== id);
        // break;
  
      default:
          return state;
    }
  }
  
  export default FormReducer;