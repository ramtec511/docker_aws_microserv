const { promisify } = require('node:util');
const el_redis = require('redis');
const store_redis = el_redis.createClient({
    url: 'redis://redis'
})

/*const GET_ASYNC = promisify(store_redis.get).bind(store_redis)
const SET_ASYNC = promisify(store_redis.set).bind(store_redis)*/
const conecta=async()=>{
    await store_redis.connect();
};
conecta();
const SET_ASYNC=async(lakey=String,elvalor=String)=>{
    //await store_redis.connect();
    await store_redis.set(lakey,elvalor);
}

const GET_ASYNC=async(lakey=String)=>{
    //await store_redis.connect();
    return await store_redis.get(lakey);
}

const DEL_ASYNC=async(lakey=String)=>{
    //await store_redis.connect();
    return await store_redis.del(lakey);
}

const desconect=async()=>{
    await store_redis.disconnect()
}


module.exports={GET_ASYNC,SET_ASYNC,DEL_ASYNC,desconect};
