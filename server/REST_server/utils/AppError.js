class AppError extends Error {
  constructor(message, statusCode, res) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);

    this.sendResponse(res); // Call sendResponse method with res as an argument
  }

  sendResponse(res) {
    const errorResponse = {
      status: this.status,
      message: this.message,
    };

    return res.status(this.statusCode).json(errorResponse);
  }
}

module.exports = AppError;
