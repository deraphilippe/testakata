function nonConsecutiveDigits(N) {
    let strNumber = `${N + 1}`
    let notFound = true
    let index = 1

    while (notFound) {
        if(strNumber[index - 1]==strNumber[index]) {
            strNumber = `${parseInt(strNumber) + 1}`
            index = 1
        }
        else {
            if(strNumber[index] == undefined) {
                break
            }
            index+=1
        }
    
    }

    return strNumber
}