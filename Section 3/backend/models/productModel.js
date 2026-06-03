const { model, Schema } = require('mongoose')

const mySchema = new Schema({

    name: { type: String, required: true },
    brand: { type: String, required: true},
    price: { type: Number }
},

    { timestamps: true });

module.exports = model('products', mySchema)
