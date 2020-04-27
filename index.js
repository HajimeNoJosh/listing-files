const fs = require("fs");

fs.readdir(process.cwd(), (err, response) => {
  if (err) {
    throw new Error(err);
  }

  console.log(response);
});
