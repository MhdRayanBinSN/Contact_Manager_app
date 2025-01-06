const { constants } = require("../constant");

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode :500;

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title : "Not found",
                message : err.message, 
                statusTrace:err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title : "validation Failed",
                message : err.message, 
                statusTrace:err.stack
            })
            break;
        case constants.UNAUTHORIZATION:
            res.json({
                title : "UN AUTHORIZED",
                message : err.message, 
                statusTrace:err.stack
            })
        break;
        case constants.FORBIDDEN:
            res.json({
                title : "forbidden",
                message : err.message, 
                statusTrace:err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title : "server error",
                message : err.message, 
                statusTrace:err.stack
            })
            break;
        default:
            console.log("No error, All good");
            
            break;

    }

    
}

module.exports = errorHandler
