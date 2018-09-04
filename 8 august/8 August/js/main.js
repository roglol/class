window.onload = () => {
    let countOb = {};
    let text = document.querySelector('#text')
    let count = document.querySelector('#count')
    let result = document.querySelector('#result')

    count.addEventListener('click', (event) => {
        let str = text.value;
        str = str.replace(/[^A-Za-z]/g, '').toLowerCase().split('');
        console.log(str);
        str.forEach(element => {
            if( countOb[element]) {
                countOb[element] += 1;
            } 
            else {
                countOb[element] = 1;
            }
        });
        for( let prop in countOb ){
            result.innerHTML += `<tr> 
                                <td>${prop}</td>
                                <td>${countOb[prop]}</td>
                                </tr>`;
        }
    })
}

