var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: {type: String, default: ''}
});

module.exports = {
    url : 'mongodb+srv://username:password@cluster0.w0apc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}