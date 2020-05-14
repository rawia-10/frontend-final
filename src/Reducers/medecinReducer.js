var medecins = [

/*
  {  Firstname:'Refka',
  Lastname:' Messoudi ',Email:'refka.messoudi@gmail.com',
 Phone:'27699896',numero:'1', Address:'khzema est', Password:'refka123'},
 {  Firstname:'mohamed',
 Lastname:'mohamed ',Email:'mohamed.mohamed@gmail.com',
Phone:'22254541',numero:'2', Address:'khzema est', Password:'salwa123'},
{  Firstname:'amna',
Lastname:'Mesoudi ',Email:'amna.messoudi@gmail.com',
Phone:'98654123',numero:'3', Address:'khzema est', Password:'salwa123'} */
];
var medecin = {};
const medecinReducer = (state = medecins, action) => {
  switch (action.type) {

    case 'ADD_MEDECIN':
      return (
        state.concat({ newmedecin: action.newmedecin.newmedecin })
      )

    case 'EDIT_MEDECIN':
      return (
        state.map(el => el.Id === action.editmedecin.Id ? el = action.editmedecin : el)
      )

    case 'REMOVE_MEDECIN':
      return (
        state.filter(el => el.Id !== action.Id)
      )
    case 'MEDECIN_INFO':
      return (
        state = action.medecin
      )
    case 'UPDATE_MEDECIN':
      return (
        state = action.medecins
      )
    default:
      return state
  }
}
export default medecinReducer
