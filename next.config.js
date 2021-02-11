// next.config.js

const withImages = require("next-images");
module.exports = withImages();

module.exports = {
  env: {
    MONGODB_URI:
      "mongodb+srv://user:7fYN2ilSBz1JTXdV@cluster0.v3gpu.mongodb.net/cluster0?retryWrites=true&w=majority",
  },
};
