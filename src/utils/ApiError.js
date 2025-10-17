class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors = [],
        statck= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.success = false;
        this.errors = errors


        if(statck){
            this.stack = statck
        } else{
            Error.captureStackTrace(this, this.contructor)
        }

    }
}

export {ApiError}