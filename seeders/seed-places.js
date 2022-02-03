const db = require('../models')

db.Place.create([{
    name: 'Mike Magician',
    city: 'Seattle',
    state: 'WA',
    techniques: 'Thai, Pan-Asian',
    pic: '/images/mikeMagician.jpg',
    discovered: 1989
}, {
    name: 'Sally Shaman',
    city: 'Phoenix',
    state: 'AZ',
    techniques: 'Coffee, Bakery',
    pic: '/images/sallyShaman.jpg',
    discovered: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})