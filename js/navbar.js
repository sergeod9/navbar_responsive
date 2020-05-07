
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const dropDownMenuArr = document.querySelectorAll('.dropdown');
let breakPointArr;
let breakPointSmall;
let toggleHamburger = true;
let dropdownMenuState = false;

breakPointArr = {
    "small":768,
    "medium": 1024,
    "large": 1280,
    "xlarge": 1366 
}
breakPointSmall = breakPointArr.small;


if(window.innerWidth > breakPointSmall){
    dropdownMenuState = true;
    console.log(breakPointSmall);
}else{
    dropdownMenuState = false;
}

// Create the arrwo down image element for the drop down menu
const arrowDown = document.createElement('span');
arrowDown.innerHTML = `<i class="dropdown-triangle"></i>`;

const dropdownElement = document.querySelectorAll('.dropdown');

// Add the arrow down image to all drop down elements
dropdownElement.forEach(element => {
    element.innerHTML += arrowDown.innerHTML;
})

// Response to screen size change
window.addEventListener('resize', () => {
    if(window.innerWidth > breakPointSmall){
        menu.style.display = 'inline-block';
        dropdownMenuState = true;

    }else{
        menu.style.display = 'none';
        toggleHamburger = true;
        dropdownMenuState = false;

    }
});

// Toggle Hamburger show/hide menu for small window width
hamburger.addEventListener('click', e =>{
    if(toggleHamburger){
        menu.style.display = 'inline-block';
        toggleHamburger = false;
    } else {
        menu.style.display = 'none';
        toggleHamburger =  true;
    }
})

// Toggle dropdown menu show/hide
dropDownMenuArr.forEach(dropdown => {
    // Check if there are drop down menus in the navbar
    if(dropdown){
        let toggleDropdown = true;
        if (dropdown.children.length > 0){
            // menu should return the ul element
            const menu = Array.from(dropdown.children).filter(child => child.className === "dropdown-menu")[0];
            // Show dropdown menu when clicked
            dropdown.addEventListener('click',()=>{
                if (toggleDropdown && menu){
                    
                    
                    menu.style.display = "block";
                    if(dropdownMenuState === false){
                        menu.style.position = "relative";
                        menu.style.width = 100+"%";
                    }
                    else{
                        menu.style.position = "absolute";
                        menu.style.width = "max-content";
                    }
                    toggleDropdown = false;
                    dropdown.addEventListener('mouseleave',()=>{
                        menu.style.display = "none";
                        toggleDropdown = true;
                    })
                }
                else {
                    menu.style.display = "none";
                    toggleDropdown = true;
                }
                
            });
        }
    }
})




