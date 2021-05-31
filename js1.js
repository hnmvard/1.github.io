const box = document.querySelector(".create__new__account__button");

box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "green";
});

box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "red";
});




const text = document.querySelector("#Email");
Email.addEventListener("keyup", function() {
    alert("text.value")
});