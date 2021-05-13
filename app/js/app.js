window.onload = () => {
    let input = window.prompt(`Enter a whole positive number`);
    let move = 0;
    const ONE_SECOND = 1000;
    let box = document.getElementById(`diamond-containter`);
    let direction = true;
    input = parseInt(input, 10);

    if (input % 2 === 0){
        let text = ` *`;
        for (let i=0; i<=input+1; i+=2){
            let temp = ` `;
            for (let j=0; j<i; j++){
                temp += `* `;
            }
            temp += `<br>`;
            text += temp;
        }
        for (let i=input-2; i>0; i-=2){
            let temp = ` `;
            for (let j=0; j<i; j++){
                temp += `* `;
            }
            temp += `<br>`;
            text += temp;
        }
        box.innerHTML = text + `*`;
        box.style.lineHeight = `100%`;
    }
    else{
        let text = ``;
        for (let i=1; i<=input; i+=2){
            let temp = ``;
            for (let j=0; j<i; j++){
                temp += `*`;
            }
            temp += `<br>`;
            text += temp;
        }
        for (let i = input-2; i>0; i-=2){
            let temp = ``;
            for (let j=0; j<i; j++){
                temp += `*`;
            }
            temp += `<br>`;
            text += temp;
        }
        box.innerHTML = text;
        box.style.lineHeight = `50%`;
    }


    setInterval( () => {
        let windowsize = window.innerWidth;
        let boxsize = box.offsetWidth;
        let limit = windowsize - boxsize;
        if (move === limit){
            direction = false;
        }
        else if (move === 0){
            direction = true;
        }
        if (direction == true){
            move += 1;
            box.style.left = move + `px`;
        }
        else{
            move -= 1;
            box.style.left = move + `px`;
        }
    }, (ONE_SECOND / 100) );

};
