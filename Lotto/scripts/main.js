
function getRandom() {
    return Math.ceil(Math.random()* 49);
}

function buildRandomNumbers(size) {
    console.log(size);
    const number =[];
    
    let i =0;
    while (i < size) {
        number.push(getRandom());
        ++i;
    }
    console.log('numbers', number);
    
//    return [
//        getRandom(),
//        getRandom(),
//        getRandom(),
//        getRandom(),
//        getRandom(),
//        getRandom(),
//    ]

return number.sort(function (a ,b) {
    console.log('a', a, 'b', b);
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
})

} 


function main() {
    const randomNumbers = buildRandomNumbers(6);
    console.log("random", randomNumbers);
    
    const $circles = document.querySelectorAll('.circle');
    //console.log('$circles', $circles)
    
    $circles.forEach(function ($circle, index) {
        console.log({$circle, index})
        $circle.textContent = randomNumbers[index]
        
    });
}

window.addEventListener('load', main);