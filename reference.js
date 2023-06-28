const fs = require('node:fs/promises');
const backstop = require('backstopjs');

(async () => {
  const files = await fs.readdir('./');
  for (const file of files) {
    if (file.match(/backstop-test.*\.config\.js$/)) {
      await backstop('reference', {config: file});
    }
  }
})()
