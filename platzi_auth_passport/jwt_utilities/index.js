const jwt = require('jsonwebtoken');

/* process argumernt -- para leer argumentos de la terminal
  pero solo a partir del tercer argumento 
  1: proceso de node
  2: archivo actual
  3: options */
  const [, , option, secret, nameOrToken] = process.argv;

  if ( !option || !secret || !nameOrToken ) {
    return console.log('missing arguments');
  }

  function signToken(payload, secret) {
    return jwt.sign(payload, secret);
  }

  function verifyToken(token, secret) {
    return jwt.verify(token, secret)
  }

  if (option == "sign") {
    console.log(signToken({ sub: nameOrToken }, secret));
  } else if (option == "verify") {
    console.log(verifyToken(nameOrToken, secret));
  } else {
    console.log('Options needs to be "sign" or "verify"');
  }