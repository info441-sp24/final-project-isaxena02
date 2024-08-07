import mongoose from 'mongoose';

let models = {};

console.log("connecting to mongodb");

await mongoose.connect("mongodb+srv://ericazqy:d6hDrcVVP5tCCNYN@cluster0.qc2c1bb.mongodb.net/wordle");

console.log("successfully connected to mongodb");

const userSchema = new mongoose.Schema({
    username: String,
    elo: Number,
    gamesPlayed: [String],
    gamesWon: Number,
    gamesLost: Number,
    friends: [String], 
    requests: [String]
})

models.User = mongoose.model('User', userSchema)

const gameSchema = new mongoose.Schema({
    gameID: String, 
    players: [String],
    winner: String,
})

models.Game = mongoose.model('Game', gameSchema)

console.log("mongoose models created");

export default models;