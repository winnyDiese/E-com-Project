
import mongoose from "mongoose"

export async function initMongoose() {
    if(mongoose.connection.readyState === 1) {
        console.log('Database yet connected')
        return mongoose.connection.asPromise()
    }

    console.log('Connexion successful')
    return await mongoose.connect(process.env.MONGODB_URL)
}