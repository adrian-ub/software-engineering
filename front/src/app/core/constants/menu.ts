import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Escritorio',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Estudiantes',
          children: [
            { label: 'Ver Estudiantes', route: '/dashboard/students' },
            { label: 'Crear Estudiante', route: '/dashboard/create-student' },
          ],
        },
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Profesores',
          children: [{ label: 'Ver Profesores', route: '/dashboard/teachers' }],
        },
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Asistencias',
          children: [
            { label: 'Ver Asistencias', route: '/dashboard/attendances' },
            {
              label: 'Crear Asistencia',
              route: '/dashboard/create-attendance',
            },
          ],
        },
      ],
    },
  ];
}
