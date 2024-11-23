require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
// FSOpen repo had 'o1opl' instead of 'wsec2' in connection string?

module.exports = {
  MONGODB_URI,
  PORT
}