const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const output1 = document.querySelector('#output-1');
const output2 = document.querySelector('#output-2');

const output = () =>{
    output1.value = input1.value;
}

input1.addEventListener('keyup', output)

input2.addEventListener('keyup', function () {
    output2.value = input2.value;
})

//function () {
//    output1.value = input1.value;