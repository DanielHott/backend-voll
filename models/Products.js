const Products = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        name: DataTypes.STRING,
        coins: DataTypes.INTEGER,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
    }, { 
        freezeTableName: true,
        timestamps: false
    })
    return Products
}

module.exports = Products;