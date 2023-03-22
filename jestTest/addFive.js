/* console.log("--Testing if code runs as expection--")
console.log("JEST framework")
function concatStrings(strA, strB){
  return strA + strB;
}

expect(concatStrings("123", "456")).toBe("123456"); */

//Wrting TEST with Jest STEP by STEP --------------------starts here-------------------------
function addFive(val){ //1. here is a normal function
    return val + 5;
}

module.exports = addFive;
//2. then check if you have node js or npm on the system.
//2. by typing on terminal_ node --version _and press enter
//2. and type_ npm --version _for checking npm version
//2. check if jest is installed by typing_ jest --version _on the terminal

//3. returning red means jest is not globally installed in device
//3. jest not found? intall it on the project by typing_ npm init -y
//3. the command will create a package json file.

//4.to install jest library, type_ npm install --save-dev jest _and press enter
//4. package-lock.json _file is created.
//4. also_ node_modules _folder is created. Inside it are module files.

//5. Open the package.json file and rewrite the string on the test: line 7 to "jest"

//6.NOTE: Jest runs tests for code in your current project to verify the expected output

//7. create a new file named. addFive.test.js