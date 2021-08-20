'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users',{
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    paranoid: true,
    underscored: true
  });

  return Users;
};