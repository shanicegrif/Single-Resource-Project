const checkName = (req, res, next) => {
    if(typeof req.body.name === "string"){
        console.log("Name is valid.")
        next()
    } else {
        res.status(400).json({ error: "Name is required!" })
    }
}

const checkBounty = (req, res, next) => {
    if (typeof req.body.bounty === "number") {
        console.log("Bounty is valid.")
        next()
    } else {
        res.status(400).json({error: "Bounty is required!"})
    }
}

const checkBoolean = (req, res, next) => {
    if (req.body.has_power === true || req.body.has_power === false){
        console.log("Has power is valid");
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