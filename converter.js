const convertBtn = document.querySelector('#convert-btn');
const copyBtn = document.querySelector('#copy-btn');
const textareaKeywords = document.querySelector('#textarea-keywords');
const info = document.querySelector('.info');

convertBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let keyResult = ''
    const keyArray = textareaKeywords.value.split(/\n/);
    const keyArrayUpperCase = keyArray.map(key => key.split(' ').map(keyItem => keyItem[0].toUpperCase() + keyItem.slice(1)));
    keyArrayUpperCase.forEach((key, kwCount = 1) => {
        kwCount++;
        keyResult +=  `kw${kwCount}=${key.join('+')}&`
    });
    textareaKeywords.value = keyResult.slice(0, -1)
    toggleBlock(info, 'Ключи конвертированы')
})

copyBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(textareaKeywords.value).then(function() {
        toggleBlock(info, 'Ключи скопированы')
      }, function(err) {
        console.error('Произошла ошибка при копировании текста: ', err);
      });
})

function toggleBlock(block, textContent) {
    block.textContent = textContent;
    block.classList.toggle('hidden')
    setTimeout(() => {
        block.classList.toggle('hidden')
    }, 1000)
}