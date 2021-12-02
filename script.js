const nav = document.querySelector('.nav');
const dropdownOne = document.getElementById('dropdown_1');
var dropdownList = document.getElementById('dropdownContent');
const dropdownItem = document.getElementById('dropdown_1');
var navItem = document.querySelectorAll('.item');

// navItem.preventDefault();

window.addEventListener('scroll', fixNav);
dropdownItem.addEventListener('click', displayDropdown);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
};

function getElPos() {
    // var topPos = dropdownOne.getBoundingClientRect().top + window.scrollY;
    var leftPos = dropdownOne.getBoundingClientRect().left + window.scrollX;
    dropdownList.style.left = 'calc(' + leftPos + 'px - 10px)';
}

getElPos();

function displayDropdown() {
    dropdownList.classList.toggle('dropped');   
}

function moveDropdown() {
    if (nav.classList.contains('active')) {
        var leftPos = dropdownOne.getBoundingClientRect().left + window.scrollX;
        dropdownList.style.left = 'calc(' + leftPos + 'px - 15px)';
    } else {
        var leftPos = dropdownOne.getBoundingClientRect().left + window.scrollX;
        dropdownList.style.left = 'calc(' + leftPos + 'px - 10px)';
    }
}

moveDropdown();

// displayDropdown();