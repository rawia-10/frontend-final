export default {
  items: [
    {
      name: 'Admin',
      url: '/admin',
      // icon: 'fa fa-user',
      
    },
   
    {
      name: 'Médecin',
      url: '/base',
      icon: 'fa fa-user-md',
      children: [
        {
          name: 'Liste medécin ',
          url: '/admin/listemedecin',
          icon: 'icon-cursor',
        },
        {
          name: 'Ajout médecin',
          url: '/admin/ajoutmedecin',
          icon: 'icon-cursor',
        },
      
      ],
    },


    {
      name: 'Secrétaire',
      url: '/base',
      icon: 'fa fa-user',
      children: [
        {
          name: 'Liste secrétaire ',
          url: '/admin/listesecretaire',
          icon: 'icon-cursor',
        },
        {
          name: 'Ajout secrétaire',
          url: '/admin/ajoutsecretaire',
          icon: 'icon-cursor',
        },
      
      ],
    },
   
  ],
};
