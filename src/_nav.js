export default {
  items: [
    {
      name: 'Secrétaire',
      url: '/dashboard',
      // icon: 'icon-user',

    },

    {
      name: 'Patient',
      url: '/base',
      icon: 'icon-people',
      children: [
        {
          name: 'Liste patient ',
          url: '/home/listepatient',
          icon: 'icon-cursor',
        },
        {
          name: 'Ajout patient',
          url: '/home/ajoutpatient',
          icon: 'icon-cursor',
        },

      ],
    },


    {
      name: 'Rendez-vous',
      url: '/base',
      icon: 'icon-notebook',
      children: [
        {
          name: 'Liste rendez-vous ',
          url: '/home/listerendezvous',
          icon: 'icon-cursor',
        },
        {
          name: 'Ajout rendez-vous',
          url: '/home/ajoutrendezvous',
          icon: 'icon-cursor',
        },

      ],
    },

  
  ],
};
