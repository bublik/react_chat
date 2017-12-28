// export const =  identities (state = [], action) {
//   switch (action.type) {
//     case 'ANY':
//       return action.data;
//     default:
//       return state;
//   }
// }
//
export const messages = (state = {} , action) => {
  switch (action.type) {
    case 'SHOW_MESSAGES':
      return {...state, data: action.data};
    default:
      return state;
  }
}
