function isValidHtml(html) {
    if(html==""){
        return true
    }
    else {
        let balises = html.split(">")
        balises.pop()

        let isValid = true
        for (let i = 0; i < balises.length; i++) {
            let search = balises[i]
            search.replace("<")
            search.replace("/")
    
            for (let j = i+1; j < balises.length; j++) {
                if (balises[j].indexOf("/") > 0 && balises[j].indexOf(search) == -1) {
                    isValid = false
                }
            }
        }
        return isValid
    } 
}