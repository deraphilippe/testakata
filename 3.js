function pairProgramming(experiences, mostExperienced) {
    let array = [] 

    if(mostExperienced==true){
        experiences.forEach((number, index) => {
            if(array.length<2){
                array.push(index)
            }
            else {
                let indexA = array[0]
                let indexB = array[1]
                if(experiences[ indexA ] < number) {
                    array[0] = index
                }
                else {
                    if(experiences[ indexB ] < number) {
                        array[1] = index
                    }
                }                
            }
        })
    }

    else {
        experiences.forEach((number, index) => {
            if(array.length<2){
                array.push(index)
            }
            else {
                let indexA = array[0]
                let indexB = array[1]
                if(experiences[ indexA ] > number) {
                    array[0] = index
                }
                else {
                    if(experiences[ indexB ] > number) {
                        array[1] = index
                    }
                }

                
            }
        });
    }

    return array
}