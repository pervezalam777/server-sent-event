
export const initialState = {
    list:[],
    formData:{momma:"", eggs:0, temperature:0}
  };

export const reducer = (state, action) => {
    switch(action.type){
      case "momma":
        return {...state, formData:{...state.formData, momma:action.payload}};
      case "eggs":
        return {...state, formData:{...state.formData, eggs:action.payload}};
      case "temperature":
        return {...state, formData:{...state.formData, temperature:action.payload}};
      case "reset":
        return {...state, formData:{...initialState.formData}}
      case "update_local_list":
        return {...state, list:[...state.list, ...action.payload]}
      case "update_list_item": 
        let updatedList = [...state.list];
        let index = updatedList.findIndex((item) => item.id === action.payload.id);
        updatedList[index] = action.payload;
        return {...state, list:updatedList}
      default:
        return state;
    }
}