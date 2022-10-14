import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: 'log.json', level: 'debug' })]
});

const errorHandler = (err, req, res, next) => {
  const error = err.error;
  let statusCode = err.statusCode || 500;
  let message =
    (statusCode === 500)
      ? "Internal Server Error"
      : err.message || "Internal Server Error";

  if (error?.name === "SequelizeValidationError") {
    const fields = error.errors.map((field) => field.path ?? field);
    message = `These fields should not be empty: ${fields.join(", ")}`;
    statusCode = 400;
  }

  if (error?.name === "SequelizeUniqueConstraintError") {
    const field = error.errors.map((error) => error.path)[0];
    message = `The {${field}} is already taken`;
    statusCode = 400;
  }

  if (error?.name === "SequelizeForeignKeyConstraintError") {
    message = `Please enter correct id`;
    statusCode = 400;
  }

  if (error) {
    logger.error(error);
  }

  res.status(statusCode).json({ success: "false", message });
};

export default errorHandler;
