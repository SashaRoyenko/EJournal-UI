export default (matchPath) => [
  {
    id: 0,
    title: 'Test',
    path: `${matchPath}/test`,
    component: () => 'test',
  },
];
