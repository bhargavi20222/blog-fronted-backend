const { default: mongoose } = require('mongoose');
const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://myblog:hello123@cluster0.xduznvm.mongodb.net/bloglists?retryWrites=true&w=majority", {

    useNewUrlParser: true,
}).then(() => {
    console.log('DB connect Done');
}).catch((error) => {
    console.log(error);
})
