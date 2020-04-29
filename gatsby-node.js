const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);

  // Remove trailing slash
  page.path = replacePath(page.path);
  if (page.path !== oldPage.path) {
    deletePage(oldPage);
    createPage(page);
  }
};
