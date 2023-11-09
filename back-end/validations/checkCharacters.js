const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("Name is valid.")
        next()
    } else {
        res.status(400).json({ error: "Name is required!" })
    }
}

const checkBounty = (req, res, next) => {
    if (req.body.bounty) {
        console.log("Bounty is valid.")
        next()
    } else {
        res.status(400).json({error: "Bounty is required!"})
    }
}

const checkBoolean = (req, res, next) => {
    if (req.body.hasPower === true || req.body.hasPower === false){
        next()
    } else{
        res.status(400).json({ error: "hasPower must be a boolean value!"})
    }
}

module.exports = {
    checkName,
    checkBoolean,
    checkBounty
}