const  changeWord = require('../code/capitalize.js')

test('capitalize word' , () => {
    expect(changeWord('john')).toBe('John')
})