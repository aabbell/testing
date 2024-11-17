const {sum,subract,divide,multiply} = require('../code/calculator')


test ("the sum is equal to 8" , () => {
    expect(sum(6,2)).toEqual(8)
})

test ('the differce is equal to 4', () => {
    expect(subract(6,2)).toEqual(4)
})

test('the division is equal ton3' , () => {
    expect(divide(6,2)).toEqual(3)
})

test('the multiplication is equal to 12', () => {
    expect(multiply(6,2)).toEqual(12)
})