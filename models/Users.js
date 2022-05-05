const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        coins: DataTypes.INTEGER,
    }, { 
        freezeTableName: true,
        timestamps: false
    })
    return Users
}

module.exports = Users;