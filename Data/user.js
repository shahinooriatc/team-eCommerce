const bcrypt = require('bcrypt');

const userData = [
    {
        name: 'shahinoor',
        email: 'shahinoor@gmail.com',
        password: bcrypt.hashSync('Shahin12@', 10),
        isAdmin: true
    },
    {
        name: 'Mahmudul Hasan',
        email: 'Hasan22dev@gmail.com',
        password: bcrypt.hashSync('Hasan5343@', 10),
        isAdmin: false
    },
    {
        name: 'Tanvir Hasan',
        email: 'tanvir@gmail.com',
        password: bcrypt.hashSync('Tanvir242@', 10),
        isAdmin: false
    }
]


module.exports = userData