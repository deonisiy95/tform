const getPolicy = () => {
  const connectSrc = `
  localhost localhost:* ws://localhost:*
  `;

  const scriptSrc = `
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
