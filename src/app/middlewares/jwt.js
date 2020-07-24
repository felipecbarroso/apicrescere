const jwt = require('jsonwebtoken');
const { auth } = require('../controller/UserController');
const { promisify } = require('util');



module.exports = async (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({erro: "Token nao enviado"});
    }
const jwtParts = authHeader.split(' ')

if(jwtParts.length != 2){
    return res.status(401).json({erro: 'Token com formato inválido'})
}

const [scheme, token] = jwtParts;

if(scheme != "Bearer"){
    return res.status(401).json({erro: 'Token com prefixo inválido'});
}
try {
    const tokenDecoded = await promisify(jwt.verify)(token, 'fn34u795fn23');
    console.log(tokenDecoded);
    return next();
} catch (error) {
    console.log(error)
    return res.status(401).json({erro: "Token com problema"});
    }
}