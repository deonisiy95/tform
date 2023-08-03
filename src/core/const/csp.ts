const getPolicy = () => {
  const connectSrc = `
  'self' *.askio.ru
  localhost localhost:* ws://localhost:*
  `;

  const scriptSrc = `
  'self' *.askio.ru
  'unsafe-eval' 'unsafe-inline' localhost:*
  `;

  return {
    connectSrc,
    scriptSrc
  };
};

module.exports = function () {
  const {connectSrc, scriptSrc} = getPolicy();
  return `
      connect-src ${connectSrc};
      script-src ${scriptSrc};
    `;
};
