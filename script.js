let addButton = document.getElementById('add');

addButton.addEventListener('click', function(){
    let wordInput = document.getElementById('input_word').value;
    let showNum = wordInput.length;
    let outputNum = document.getElementById('output_num');

    outputNum.innerHTML = `<h1>${showNum}</h1>`
});

