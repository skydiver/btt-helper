const process = require('../lib/process');

const search = async (query) => {
  const running = await process.search(query);
  console.log(running);
};

const multi = async (query) => {
  const procs = query.split(',');
  const unique = [...(new Set(procs))];
  let running = 0;
  for (const proc of unique) {
    const count = await process.search(proc);
    running = running + count;
  }
  console.log(running);
};

module.exports = { search, multi };