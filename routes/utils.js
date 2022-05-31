const jwt = require('jsonwebtoken');

const generateToken = (user)=>{
    return jwt.sign({user}, process.env.JWT_SECRET, {
        expiresIn:'10d'
    })
}

const isAuth = (req,res,next)=>{
    const authoraization = req.headers.authoraization

    if(authoraization){
        const token = authoraization.slice(7, authoraization.length)

        jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err,docs)=>{
                if(err){
                    res.status(401).send({msg:'Invalid Token'})
                }else{
                    req.users = docs
                    next()
                }
            }
        )
    }else{
        res.status(401).send({msg: 'No Token'})
    }
}


module.exports = {generateToken,isAuth}