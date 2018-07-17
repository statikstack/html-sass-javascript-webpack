module.exports = (env) => {
  const config = require(`./webpack/webpack.${env.mode}`);

  return config;
};
