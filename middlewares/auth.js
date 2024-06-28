const { verifyToken } = require('../libs/jwt');
const { User } = require('../models');

const authentication = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      const { username } = verifyToken(token);

      const user = await User.findOne({
        where: {
          username
        }
      });

      if (user) {
        req.loggedUser = {
          id: user.id,
          email: user.email,
          username: user.username
        };
        next();
      } else {
        throw {
          name: 'Unauthenticated'
        };
      }
    } else {
      throw {
        name: 'Unauthenticated'
      };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication };
