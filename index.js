const numResult = document.getElementById('numResult');

let numberToFind = 0;
let attempts = 0;

function refresh(){

    numberToFind = parseInt(Math.random() * 100);

}

function verifyNumber(){

    let bet = document.getElementById( 'bet' ).value;

    if(bet > 100 || bet < 1){
        alert('aposta inválida')
        return;
    }

    if(bet > numberToFind){
        attempts++;
       numResult.textContent = '🚨O número pra ser encontrado precisa ser MENOR!';
    }
    else if(bet < numberToFind){
        attempts++;
       numResult.textContent = '🚨O número pra ser encontrado precisa ser MAIOR!';
    
    }
    else{
        numResult.textContent = `😎 Parabéns você acertou!! Com ${attempts} tentativas.`;
    }
}






refresh();