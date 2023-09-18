
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
// require('dotenv').config()
// import * as mongoDb from 'mongodb'

// const usr = process.env.REACT_APP_MONGODB_USERNAME
// const pw = process.env.REACT_APP_MONGODB_PW
// const database = process.env.REACT_APP_MONGODB_FLASH_DB
// const cltn = process.env.REACT_APP_MONGODB_FLASH_CLN

// const uri = `mongodb+srv://${usr}:${pw}@sailorfairy.gtdlrmi.mongodb.net/?retryWrites=true&w=majority`
// const client = new mongoDb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: mongoDb.ServerApiVersion.v1 })

// export async function fetchFlash() {
//         let dataArr = []
        
//         const collection = client.db(database).collection(cltn).find()
//         await collection.forEach((data) => {
//             return dataArr.push(data)
//         })

//     return dataArr
    
// }

// export function postFlash(data) {
//     return client.db(database).collection(cltn).insertOne(data)
// }

// export async function deleteFlash(data) {
//     try {
//         const deletion = await client.db(database).collection(cltn).deleteOne({_id: mongoDb.ObjectId(data._id)})
//         return deletion
//     } catch (err) {
//         console.log(err.message)
//     }
// }

// module.exports = {
//     fetchFlash,
//     postFlash,
//     deleteFlash
// }