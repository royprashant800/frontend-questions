let textBox = document.getElementById('text');
const countChars = () => {
    let length = textBox.value.length
    document.getElementById('count').innerHTML = length;
    if(length == 30) {
        alert("You have reached the limit..")
    }

}