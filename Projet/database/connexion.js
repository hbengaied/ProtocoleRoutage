import { connect } from 'mongoose'

export default async function dbConnect() {
    try {
        await connect("mongodb://127.0.0.1:27017/HichDB")
        console.log("Connexion reussi à la base de donnée")
    } catch (error) {
        console.error(error)
    }
}