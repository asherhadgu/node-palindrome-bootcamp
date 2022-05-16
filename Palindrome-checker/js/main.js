document.querySelector('button').addEventListener('click', checkWord)

function checkWord(){
    let wordCheck = document.querySelector('input').value

    fetch(`/api?palindrome=${wordCheck}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#answer').innerText = data.wordCheck = 'is a Palindrome'
    })

}