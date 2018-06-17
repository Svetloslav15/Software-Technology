const Sequelize = require('sequelize');

    module.exports = function(sequalize) {
    const Article = sequalize.define('Article', {
        title: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            required: true,
            allowNull: false
        },

        date: {
            type: Sequelize.DATE,
            required: true,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    });

    Article.associate = function (models) {
        Article.belongsTo(models.User, {
            foreignKey: 'authorId',
            targetKey: 'id'
        });
    };


    return Article;
};
