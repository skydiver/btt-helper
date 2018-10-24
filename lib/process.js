const find = require('find-process');

const search = async (process) => {
  let running = 0;

  await find('name', process)
    .then((list) => {
      if (list.length > 0) {
        list.forEach(proc => {
          if (!proc.cmd.includes('btt-helper')) {
            running++;
          }
        });
      }
    });

  return running;
};

module.exports = { search };