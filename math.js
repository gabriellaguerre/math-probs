window.addEventListener("DOMContentLoaded", () => {
    const div1 = document.createElement("div")
    div1.setAttribute("id", "number1");
    document.body.append(div1)
    div1.innerText = Math.floor(Math.random() * 10);

    const randNum1 = () => {
        div1.innerText = Math.floor(Math.random() * 10);
    }

    const div2 = document.createElement("div");
    div2.setAttribute("id", "number2");
    document.body.append(div2)
    div2.innerText = Math.floor(Math.random() * 10);

    const randNum2 = () => {
        div2.innerText = Math.floor(Math.random() * 10);
    }

    const div3 = document.createElement("div");
    div3.setAttribute("id", "number3");
    document.body.append(div3)
    const inputValue = document.createElement("input");

    inputValue.setAttribute("type", "text")
    inputValue.style.fontSize = "40px";

    div3.appendChild(inputValue);


    const plus = document.createElement("p");
    plus.setAttribute("id", "plus")
    document.body.append(plus)
    plus.innerText = "+";
    plus.style.fontSize = "50px";
    plus.style.position = "relative";
    plus.style.bottom = "220px";
    plus.style.left = "125px";

    const equal = document.createElement("p");
    equal.setAttribute("id", "equal")
    document.body.append(equal)
    equal.innerText = "=";
    equal.style.fontSize = "50px";
    equal.style.position = "relative";
    equal.style.bottom = "325px";
    equal.style.left = "300px";

    const div4 = document.createElement("div")
    div4.setAttribute("id", "buttonAnswer")
    document.body.append(div4)
    const buttonAnswer = document.createElement("button")
    buttonAnswer.setAttribute("id", "answer")
    div4.appendChild(buttonAnswer);
    buttonAnswer.innerText = "Check Answer";

    const div5 = document.createElement("div")
    div5.setAttribute("id", "image")
    document.body.append(div5)

    const fetcher = () => {
        fetch('https://emoji-api.com/categories/smileys-emotion?access_key=6905e9e1e34501e2c011e49d182c6e3a5db9b2cc')
            .then(res => res.json())
            .then(url => {
                //console.log(url.length)
                let randNum = Math.floor(Math.random() * 100)
                let emoImage = url[randNum].character
                div5.innerText = emoImage
            })
    }


    buttonAnswer.addEventListener("click", () => {
        if (inputValue.value === '') {
            return
        } else {
            localStorage.setItem("value", inputValue.value)
            localStorage.setItem("num1", div1.innerText)
            localStorage.setItem("num2", div2.innerText)

            let firstNum = Number(localStorage.getItem("num1"))
            let secondNum = Number(localStorage.getItem("num2"))
            let thirdNum = Number(localStorage.getItem("value"))

            let addition = firstNum + secondNum

            if (addition === thirdNum) {
                fetcher();
                randNum1();
                randNum2();
                inputValue.value = '';
            } else {
                inputValue.value = '';
                div5.innerText = 'Try Again !!!';
                addition = firstNum + secondNum;
                thirdNum = Number(localStorage.getItem("value"))
            }
        }
    })



})
