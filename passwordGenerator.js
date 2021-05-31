function generatePassword() {
    var maxL = document.getElementById("maxlength").value
    if (maxL > 100 || maxL <=0){
        alert("This length is out of range! remember that the length must be between 1 and 100 characters")
        return -1
    }

    var useSpecialCharacters = document.getElementById("specialCharacters").checked
    var useUppercaseCharacters = document.getElementById("CAPS").checked

    var settings = [useSpecialCharacters, useUppercaseCharacters]


    var password = ""
    var characterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var specialCharactersArray = ['.', ',', '!', '@', '#']
    var avaiableCharacters = []

    if (settings[0] == true){
        avaiableCharacters = [characterArray, specialCharactersArray]
    }
    else{
        avaiableCharacters = [characterArray]
    }
    for (i = 0; i < maxL; i++){
        var randomElementArray = avaiableCharacters[Math.floor(Math.random() * avaiableCharacters.length)];
        if (randomElementArray == characterArray){
            if (settings[1] == true){
                var toUpper = Math.random() > 0.5
            }
        }
        var randomElement = randomElementArray[Math.floor(Math.random() * randomElementArray.length)];
        if (toUpper == true){
            randomElement = randomElement.toUpperCase()
        }
        toUpper = false
        password += randomElement
    }
    document.getElementById("passwordOutput").innerHTML = password
}