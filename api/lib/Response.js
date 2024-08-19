const CustomError = require("./CustomError");
const Enum = require("./Enum")
class Response {
    static successResponse(data, code = 200) {
        return {
            code,
            data
        }
    }

    static errorResponse(error) {
        console.error(error);
        if (error instanceof CustomError) {
            return {
                code: error.code,
                error: {
                    message: error.message,
                    description: error.description
                }
            }
        } else {

        return {
            code: Enum.HTTP_CODES.INT_SERVER_ERROR,
            error: {
                message: error.message,
                description: error.message
            }
        }
    }
    }

}

module.exports = Response;