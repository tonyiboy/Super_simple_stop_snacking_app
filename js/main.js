

document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking(){
    let numOfSnacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""
    for(let i = 1; i <= numOfSnacks; i++){
        document.querySelector('#stops').innerText += ' STOP!'
    }
}