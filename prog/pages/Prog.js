let ProfileName = document.querySelector('#Profile__Input_Name');
console.log(`Имя ph ${ProfileName.placeholder}`);

let ProfileAbout = document.querySelector('#Profile__Input_About');
console.log(`О себе ph ${ProfileAbout.placeholder}`)

let ProfileButton = document.querySelector('.profile__button');
console.log(`button ${ProfileButton}`)

function ShowClick() {
    console.log(`Имя ${ProfileName.value} \nО себе ${ProfileAbout.value}`);
}
ProfileButton.addEventListener('click', ShowClick);

