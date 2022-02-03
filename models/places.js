const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'https://www.fillmurray.com/640/360' },
  techniques: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  discovered: {
    type: Number,
    min: [500, 'From before the Dawn of the Order of Solomon?!'],
    max: [new Date().getFullYear(), 'Are you a prophet or divinomancer?']
  }
})



placeSchema.methods.showDiscovered = function() {
  return `${this.name} has been a bound warlock serving ${this.city} since ${this.discovered}.`
}

module.exports = mongoose.model('Place', placeSchema)
