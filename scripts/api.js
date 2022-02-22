    // api url
    const url =
    "https://unpkg.com/color-name-list/dist/colornames.json";
    
    let data;
    // Defining async function
    async function getapi(url) {
        
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        data = await response.json();
        console.log(data);
        
        show(data);
    }
    // Calling that async function
    getapi(url);
    
    function show(data) {
        let tab ='';
        let type = ["tall", "wide", "big"];
        
        // Loop to access all rows
        for (let r of data) {
            tab += `<div class=${type[Math.floor(Math.random() * type.length)]} style="background-color: ${r.hex};">${r.name}: ${r.hex}</div>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("colors").innerHTML = tab;
    }
      
