const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 139.26 yens", function(){
    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 dollar are 139.26 yens, then 3.5 euros should be (3.5 * 139.26)
    const expected = 3.5 * 139.26; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(487.41); //1 dolar are 139.26 dolares, then 3.5 dollars should be = (3.5 * 1.2)
})

test("One yen should be 0.0058 pounds", function(){
    // use the function like its suppoed to be used
    const pound = fromYenToPound(3.5)

    // if 1 yen are 0.0058 pounds, then 3.5 euros should be (3.5 * 0.0058)
    const expected = 3.5 * 0.0058; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(.0203);
})