import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Clientes',
    icon: 'nb-compose',
    children: [
      {
        title: 'Lista de Clientes',
        link: '/pages/clientes/lista',
      },
    ],
  }
];
