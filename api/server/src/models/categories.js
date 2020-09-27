("use strict");

module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      categoryName: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      FKUser: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false,
      },
    },
    {}
  );
  Categories.associate = function (models) {
    // associations can be defined here
    // Categories.belongsToMany(models.Users, {
    //   through: "User_categories",
    // });
  };
  return Categories;
};
