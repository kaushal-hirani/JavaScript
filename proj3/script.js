const courses = [
    {
        name: "Complete React course",
        price: 2.3,
    },
    {
        name: "Complete Js course",
        price: 2.1,
    },
    {
        name: "Complete ViewJS course",
        price: 2.9,
    },
    {
        name: "Complete Python course",
        price: 2.7,
    },
    {
        name: "Complete Perl course",
        price: 7.2,
    },
]

{/* <li class="list-group-item"> */}
{/* <span class="float-right">$2.1</span> */}
function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "",
    courses.forEach( (course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
};

// generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price);
    generateList();
})

const revButton = document.querySelectorAll(".btn-success")[1];
revButton.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price);
    generateList();
})