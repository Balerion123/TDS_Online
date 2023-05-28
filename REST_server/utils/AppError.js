class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
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
