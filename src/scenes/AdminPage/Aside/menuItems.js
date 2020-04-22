export default (matchPath) => [
  {
    id: 0,
    title: 'Адміністратори',
    to: `${matchPath}/admins`,
  },
  {
    id: 1,
    title: 'Навчальні заклади',
    to: `${matchPath}/schools`,
  }
];
