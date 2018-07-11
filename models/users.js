module.exports = (sequelize, type) => {
    const User = sequelize.define(
        'User',
        {googleId: type.STRING },
        {
            classMethods: {
                associate: function(models) {

                }
            }
        }
    )
return User
}
