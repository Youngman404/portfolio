const path = require('path');

//Permet de remplacer le . par @ pour avoir une route relative à utiliser dans App.js
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};