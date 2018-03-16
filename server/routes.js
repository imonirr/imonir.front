module.exports = () => {
  return {
    '/': { page: 'index' },
    '/whatidid': { page: 'whatidid' },
    '/whatido': { page: 'whatido' },
    '/404': { page: '/404' },
    '/note/:slug': { page: 'note/index' },
  };
};
