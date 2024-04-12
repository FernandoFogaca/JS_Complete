


function somar() {
    let n1 = document.getElementById('input_1').value;
    let n2 = document.getElementById('input_2').value;
    let resultado = parseInt(n1) + parseInt(n2);
    document.getElementById('resultado').innerHTML = resultado;


}

async function search() {

    let search = document.getElementById('input_3').value;
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await response.json();
    
        console.log(data);
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('image').src = data.sprites.front_default;


}