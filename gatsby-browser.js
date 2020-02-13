/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './src/styles/index.less';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`
    This application Gilbertly.com has been updated.
    Reload to display the latest version?
  `);
  if (answer === true) {
    window.location.reload();
  }
};
