const { User } = require('../models');

const userData = [
  {
    username: "Mariama",
    email: "mariamab8@gmail.com",
    password: "Tech123"
  },
  {
    username: "Bill",
    email: "bill23@gmail.com",
    password: "Tech123"
  },
  {
    username: "Karen",
    email: "karen22@gmail.com",
    password: "Tech123"
  },
  {
    username: "Robert",
    email: "robert24@gmail.com",
    password: "Tech123"
  },
  {
    username: "Mary",
    email: "mary25@gmail.com",
    password: "Tech123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;
