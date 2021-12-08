const {MongoClient}=require('mongodb');

const uri='mongodb://mongo/mydatabase';
const cliente=new MongoClient(uri);
/*mongoose.connect('').then(res=>{
    console.log("conectad: ",res.connection.host)
}).catch(err=>{
    console.log(err)
})*/

module.exports=cliente;
