const agents = document.querySelectorAll('.character');

agents.forEach(character => {
    character.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removeSelectionCharacter();

        character.classList.add('select');
    
        altImgCharacterSelected(character);
    
        altNameCharacterSelected(character);

        altDescCharacterSelected(character);
        
    })

})

function removeSelectionCharacter() {
    const characterSelect = document.querySelector('.select');
    characterSelect.classList.remove('select');
}

function altImgCharacterSelected(character) {
    const characterBig = document.querySelector('.big_character');

    const idCharcater = character.attributes.id.value;
    characterBig.src = `./src/img/${idCharcater}_full.png`;
}

function altNameCharacterSelected(character) {
    const characterName = document.getElementById('name_character');
    characterName.innerText = character.getAttribute('data-name');
}

function altDescCharacterSelected(character) {
    const descCharacter = document.getElementById('desc_character');
    descCharacter.innerText = character.getAttribute('data-desc');
}