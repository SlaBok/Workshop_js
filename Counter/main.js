

function main() {
    
    let counter = 0;
    
    
    
    const $plus = document.querySelector("#plus");
    const $minus = document.querySelector("#minus");
    const $counter = document.querySelector("#counter");
    
    function renderCounter() {
        $counter.value = counter;
    }
    
    renderCounter();
    
    $plus.addEventListener("click", function () {
        //counter = counter + 1;
        //counter++; inkrementacja postfixowa
        //++counter; inkrementacja prefixsowa
        //$counter.value = counter;
        ++counter
        renderCounter();
    })
        
     $minus.addEventListener("click", function () {
        //counter = counter - 1;
        //$counter.value = counter;
        --counter
        renderCounter();
     })
}

window.addEventListener("load", main);