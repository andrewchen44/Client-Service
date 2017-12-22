const client = require("./elastic.js");

const search = (query, callback) => {
  return client.search({
  index: 'videos',
  type: 'document',
  body:{
    query: {
      match: {"title": query}
    },
  },
    })
    .then(
      function(body) {
        callback(body);
      },
      function(error) {
        console.log(error.message);
      }
    );
}

module.exports = search;
