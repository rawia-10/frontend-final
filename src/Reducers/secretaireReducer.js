var secretaires = [

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
  var secretaire = {};
  const secretaireReducer = (state = secretaires, action) => {
    switch (action.type) {

      case 'ADD_SECRETAIRE':
        return (
          state.concat({ newsecretaire: action.newsecretaire.newsecretaire })
        )

      case 'EDIT_SECRETAIRE':
        return (
          state.map(el => el.Id === action.editsecretaire.Id ? el = action.editsecretaire : el)
        )

      case 'REMOVE_SECRETAIRE':
        return (
          state.filter(el => el.Id !== action.Id)
        )
      case 'SECRETAIRE_INFO':
        return (
          state = action.secretaire
        )
      case 'UPDATE_SECRETAIRE':
        return (
          state = action.secretaires
        )
      default:
        return state
    }
  }
  export default secretaireReducer
