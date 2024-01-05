let noBtnClicked = 0;

function teletransportar() {
    const noBtn = document.getElementById('noBtn');
    noBtn.classList.add('teleport');
    noBtn.disabled = true;
    noBtnClicked++;

    if (noBtnClicked >= 4) {
        noBtn.disabled = true;
        noBtn.classList.remove('teleport');
        alert('¡Has alcanzado el límite de teletransportaciones!');
    }
}

function agradecer() {
    const graciasMessage = document.getElementById('graciasMessage');
    graciasMessage.classList.remove('hidden');
}