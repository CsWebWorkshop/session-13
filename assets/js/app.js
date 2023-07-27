console.clear();

// DOM === Document Object Model

// const container = document.getElementById("container");
// let para = document.getElementById("para");

// const tests = document.getElementsByClassName("test");

// const tagNames = document.getElementsByTagName("p");

// const para = document.querySelector("#para");

// const paras = document.querySelectorAll(".test");

// paras.forEach(item => console.log(item));

// const newContainer = document.querySelector(".new-container");


// const newSection = document.createElement("section");
// newSection.id = "newSection";
// newSection.innerHTML = "hello world!";
// newSection.style.backgroundColor = "#00f"
// newSection.classList.add("active");
// newSection.classList.remove("active");

// console.log(newSection.className);


// const btnSubmit = document.createElement("button");
// btnSubmit.id = "btn";
// btnSubmit.innerHTML = "submit"


// newContainer.appendChild(newSection);
// newContainer.appendChild(btnSubmit);

// const firstName = "moeid";

// const str = `hello ${firstName}`

// window.addEventListener("load" , () => {
//     console.log("loaded")
// })

// window.addEventListener("unload" , () => {
//     console.log("unloaded")
// })


// const d = document;
// const para = d.querySelector("#para");
// const input = d.querySelector(".input");
// const form = d.querySelector("form");

// para.addEventListener("click" , event => {
//     // event.target.classList.add("active");
//     event.target.classList.toggle("active")
// })



// input.addEventListener("change" , e => {
//     if(e.target.value.length < 10){
//         console.error("less than 10");
//     }else{
//         console.log("ok!")
//     }
// })

// form.addEventListener("submit", (e) => {
//     console.log("hello")
// })


// input.addEventListener("blur" , (e) => {
//     console.log("blur")
// })




// callback
// function test(func){
//     func()
// }


// const test2 = () => console.log("hello")


// test(test2)

const form = document.querySelector("form");

const input = document.querySelector(".input");

const paragraph = document.querySelector("#result");

window.addEventListener("load" , () =>{
    const result = localStorage.getItem("result");
    if(result){
        paragraph.innerHTML = `Result: ${result}`;
    }
})

form.addEventListener("submit", event => {
    event.preventDefault();
    

    if(input.value.trim().length){
        const str = "Result: "
        paragraph.innerHTML = str + input.value;
        localStorage.setItem("result" , input.value);
    }else{
        alert("input is empty!!! :| ")
    }

    input.value = ""
})


localStorage.setItem("array" , JSON.stringify(["hello" ,"hi" , "bye"]))


