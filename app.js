var translateBtn = document.querySelector('#btn');
var txtInput = document.querySelector('#txt-input');
var outputRes = document.querySelector('.result');
translateBtn.addEventListener('click', clickHandel);
var url='https://api.funtranslations.com/translate/minion.json';
function clickHandel() {
    var input = txtInput.value;
    fetch(url + '?' + 'text=' + input)
        .then((res) => {
            return res.json();
        }).then((res) => {
            outputRes.innerHTML = res.contents.translated;
        }).catch((error) => {
            alert("oops! ,there is an issue with server");
        });
}