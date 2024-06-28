import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const verifyToken = async (request, response, next) => {
  const bearerHeader = request.headers['authorization']; // 'headers', not 'header'

  if (!bearerHeader || bearerHeader.indexOf(' ') === -1) {
    const data = {
      success: false,
      message: 'Missing Authorization Header'
    };
    return response.status(401).send(data);
  }

  const token = bearerHeader.split(' ')[1];

  if (!token) {
    const data = {
      success: false,
      message: 'Access Denied'
    };
    return response.status(401).send(data);
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    request.payload = verified;
    next();
  } catch (error) {
    const data = {
      success: false,
      message: 'Invalid Token'
    };
    return response.status(400).send(data); // return added for consistency
  }
};

export default verifyToken;