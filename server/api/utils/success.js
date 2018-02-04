const successResponse = (
  data,
  message = 'Successful!',
) => ({
  success: true,
  payload: {
    data,
    message,
  },
})

module.exports = successResponse
