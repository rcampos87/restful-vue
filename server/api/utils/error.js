const errorResponse = (message = 'Invalid Request') => ({
  success: false,
  payload: {
    error: true,
    message: message,
  },
})

module.exports = errorResponse
