window.addEventListener("DOMContentLoaded", () => {
    const div1 = document.createElement("div")
    div1.setAttribute("id", "number1");
    document.body.append(div1)
    div1.innerText = Math.floor(Math.random() * 10);

    const div2 = document.createElement("div");
    div2.setAttribute("id", "number2");
    document.body.append(div2)
    div2.innerText = Math.floor(Math.random() * 10);

    const div3 = document.createElement("div");
    div3.setAttribute("id", "number3");
    document.body.append(div3)

    const plus = document.createElement("p");
    plus.setAttribute("id", "plus")
    document.body.append(plus)
    plus.innerText = "+";
    plus.style.fontSize = "50px";
    plus.style.position = "relative";
    plus.style.bottom = "130px";
    plus.style.left = "125px";

    const equal = document.createElement("p");
    equal.setAttribute("id", "equal")
    document.body.append(equal)
    equal.innerText = "=";
    equal.style.fontSize = "50px";
    equal.style.position = "relative";
    equal.style.bottom = "235px";
    equal.style.left = "300px";

    const div4 = document.createElement("div")
    div4.setAttribute("id", "buttonAnswer")
    document.body.append(div4)
    const buttonAnswer = document.createElement("button")
    buttonAnswer.setAttribute("id", "answer")
    div4.appendChild(buttonAnswer);
    buttonAnswer.innerText = "Check Answer";



})
