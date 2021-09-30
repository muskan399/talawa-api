let URL = 'http://calico.palisadoes.org/talawa/graphql';

if (process.env.NODE_ENV === 'test') {
  URL = 'http://talawa-graphql-api.herokuapp.com/graphql';
}

module.exports.URL = URL;
