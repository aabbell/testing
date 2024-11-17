const reverse = require('../code/reverseString.js')

test ("the reversed word is" , () => {
    expect(reverse('john')).toBe('nhoj')
})

module.exports = reverse