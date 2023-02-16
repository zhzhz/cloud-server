let exportObj = {
    login
}

function login(req, res)
{
    //console.log("login", req.body.username, req.body.password);
    res.json({token:req.body.username + req.body.password});
}

module.exports = exportObj;