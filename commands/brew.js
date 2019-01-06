const brew = require('homebrew-services');

const services = async () => {
  let total = 0;
  const srv = await brew.list();
  srv.services.forEach((status, service) => {
    if (status === 'started') {
      total++;
    }
  });
  console.log(total);
};

module.exports = { services };