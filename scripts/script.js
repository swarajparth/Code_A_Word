// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];

    if(userData){
        icon.onclick = ()=>{
            emptyArray = data.filter((d)=>{
                //filtering array value and user characters to lowercase and return only those words which includes user enetered characters
                return d.name.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
            });
            show(emptyArray);
        }
    }
}