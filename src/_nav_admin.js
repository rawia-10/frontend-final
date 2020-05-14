export default {
  items: [
    {
      name: 'Admin',
      url: '/admin',
      // icon: 'fa fa-user',
      
    },
   
    {
      name: 'Medecin',
      url: '/base',
      icon: 'fa fa-user-md',
      children: [
        {
          name: 'Liste medecin ',
          url: '/admin/listemedecin',
          icon: 'icon-cursor',
        },
        // {
        //   name: 'Ajout medecin',
        //   url: '/home/ajoutmedecin',
        //   icon: 'icon-puzzle',
        // },
      
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
        // {
        //   name: 'Ajout secrétaire',
        //   url: '/home/ajoutsecrétaire',
        //   icon: 'icon-puzzle',
        // },
      
      ],
    },
   
  ],
};
