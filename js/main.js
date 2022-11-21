let dice = document.getElementsByClassName('dice')[0];
let adviceId = document.getElementById('advice-id');
let description = document.getElementsByClassName('description')[0];

dice.addEventListener('click', function() {
    fetch('	https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        adviceId.textContent = '# '+data.slip?.id;
        description.textContent = `"${data.slip?.advice}"`
    })

})