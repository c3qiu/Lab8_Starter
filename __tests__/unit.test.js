// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber (True)
test('123-456-7890 is Phone number (true)', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('909-151-2525 is Phone number (true)', () => {
    expect(functions.isPhoneNumber('909-151-2525')).toBe(true);
});

//isPhoneNumber (False)
test('1234-56-7890 is Phone number (false)', () => {
    expect(functions.isPhoneNumber('1234-56-7890')).toBe(false);
});
test('1234567890 is Phone number (false)', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

//isEmail (True)
test('ucsd1@ucsd.edu is Email (true)', () => {
    expect(functions.isEmail('ucsd1@ucsd.edu')).toBe(true);
});
test('ucsd123@gmail.com is Email (true)', () => {
    expect(functions.isEmail('ucsd123@gmail.com')).toBe(true);
});

//isEmail (False)
test('ucsd1*ucsd.edu is Email (false)', () => {
    expect(functions.isEmail('ucsd1*ucsd.edu')).toBe(false);
});
test('1234567890.com is Email (false)', () => {
    expect(functions.isEmail('1234567890.com')).toBe(false);
});

//isStrongPassword (True)
test('MygSHZZEs is Strong Password (true)', () => {
    expect(functions.isStrongPassword('MygSHZZEs')).toBe(true);
});
test('abcdef is Strong Password (true)', () => {
    expect(functions.isStrongPassword('abcdef')).toBe(true);
});

//isStrongPassword (False)
test('x%Qqs$:Kx{ is Strong Password (false)', () => {
    expect(functions.isStrongPassword('x%Qqs$:Kx{')).toBe(false);
});
test('1111111 is Strong Password (false)', () => {
    expect(functions.isStrongPassword('1111111')).toBe(false);
});

//is Date (True)
test('06/20/1020 is Date (true)', () => {
    expect(functions.isDate('06/20/1020')).toBe(true);
});
test('8/1/2022 is Date (true)', () => {
    expect(functions.isDate('08/1/2022')).toBe(true);
});

//is Date (False)
test('8-1-2022 is Date (false)', () => {
    expect(functions.isDate('8-1-2022')).toBe(false);
});
test('Today is Date (false)', () => {
    expect(functions.isDate('Today')).toBe(false);
});

//is Hex Color (True)
test('#2c041c is Hex Color (true)', () => {
    expect(functions.isHexColor('#2c041c')).toBe(true);
});
test('#003754 is Hex Color (true)', () => {
    expect(functions.isHexColor('#003754')).toBe(true);
});

//is Hex Color (False)
test('#103754# is Hex Color (false)', () => {
    expect(functions.isHexColor('#103754#')).toBe(false);
});
test('#@2i2! is Hex Color (false)', () => {
    expect(functions.isHexColor('#@2i2!')).toBe(false);
});