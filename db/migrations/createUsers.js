module.exports = {
    up: (db, Sequelize) => {
return db.createTable('Users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
        googleId: {
        type: Sequelize.STRING
    },
    createdAT: {
        allowNull: false,
        type: Sequelize.DATE
    },
updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
}
})
    },
    down: (db, Sequelize) => {
return db.dropTable('Users')
    }
    
}