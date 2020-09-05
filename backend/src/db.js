import mongo from 'mongodb'

let conncection_string = 'mongodb+srv://erdal:novalozinka1@cluster0-q2bqc.mongodb.net/employeerating?retryWrites=true&w=majority'

let client = new mongo.MongoClient(conncection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = null

export default () => {
    return new Promise((resolve, reject) => {

        if (db && client.isConnected()) {
            resolve(db)
        }

        client.connect(err => {
            if (err) {
                reject("GRESKA : " + err)
            }
            else {
                console.log("Connected to employeerating")
                let db = client.db("employeerating")
                resolve(db)
            }
        })
    })
}