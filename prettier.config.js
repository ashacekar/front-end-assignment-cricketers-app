const prettierConfig = require("sd-ts-prettier-config");

module.exports = {
    requirePragma: true,
    overrides: [
      {
        files: '{.,src/**,test}/{*.js,*.ts,*.tsx}',
        options: {
          requirePragma: false
        },
      },
    ],
    ...prettierConfig,
  }