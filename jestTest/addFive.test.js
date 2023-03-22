const { default: TestRunner } = require("jest-runner");//this appear after writing test() line 5
const addFive = require (`./addFive`);
// the reason for the forward slash / is to indicate that the function is on the same folder as the test file
test('returns the number plus 5', () =>{
    expect(addFive(1)).toBe(6);//on the Terminal type_ npm run test _to check if the thest is passed.
})

//failed test.. should be pass i dont know why