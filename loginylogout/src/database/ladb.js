const {MongoClient}=require('mongodb');

const uri='mongodb://mongo/mydatabase';
const cliente=new MongoClient(uri);
/*mongoose.connect('').then(res=>{
    console.log("conectad: ",res.connection.host)
}).catch(err=>{
    console.log(err)
})*/

/*haber=async()=>{
    try {
        await cliente.connect().then(res=>{
            console.log("conectado: ",res.options.dbName)
        }).catch(err=>{
            console.log(err)
        })       

    } finally {
        await cliente.close();

    }
}

haber();*/
module.exports=cliente;