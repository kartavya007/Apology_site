let count = 0;
const hi_array = [
    "https://i.pinimg.com/originals/2c/09/5e/2c095ebc0495402f58da4425890d0b7c.gif",
    "https://i.pinimg.com/originals/98/a8/8a/98a88a6bac551e5e05b0eb6c9a9f3b95.gif",
    "https://i.pinimg.com/originals/b2/de/b3/b2deb325dfa8cc4e351e72dfa5936b55.gif",
    "https://i.pinimg.com/564x/68/b8/f2/68b8f2f4159d0f80602569d405ef9491.jpg"
];

const no_hi_text = [
    "Please HII!!!",
    "Intna Gussa mat kar na plz...",
    "Plzzzz naa sorryyy",
    "Yrrrrr aisa mat kar"
];

function click_hi_no() {
    const img = document.getElementById("Hi_IMG");
    const no_hi_ele = document.getElementById("no_hi_text");
    no_hi_ele.style.display = 'block';
    no_hi_ele.innerText = no_hi_text[count];
    img.src = hi_array[count];
    count = (count + 1) % hi_array.length;
}

function click_hi()
{
    document.getElementsByClassName('section2')[0].style.display = 'grid'
    document.getElementsByClassName("section1")[0].style.display = 'none' ; 
}