import addAdmin from '../addAdmin/index';
import editAdmin from '../editAdmin/index';

export default (matchPath) => [
  {
    id: 0,
    title: 'Test',
    path: `${matchPath}/test`,
    component: () => 'test',
  },
  {
    id: 1,
    title: 'Додати адміністратора',
    path: `${matchPath}/add-admin`,
    component: addAdmin,
  },
  {
    id: 2,
    title: 'Змінити адміністратора',
    path: `${matchPath}/edit-admin`,
    component: editAdmin,
  }
];
