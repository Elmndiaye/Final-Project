const { Sequelize, db } = require('./db');

const Post = db.define('Post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    set: function (value) {
      this.setDataValue('title', value.trim());
    }
  },
  urlTitle: {
    type: Sequelize.VIRTUAL,
    get: function () {
      var title = this.getDataValue('title')
      return title.replace(/\s+/g, '-')
    }
  },
  itemsc: {
    type: Sequelize.STRING,
    get: function () {
      var items = this.getDataValue('itemsc')

      if (items) {
        return items
      } else {
        items = this.getDataValue('content')
        items = items.add
        return `${items}`
      }
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});
Post.sync()
module.exports = { Sequelize, users, Post };