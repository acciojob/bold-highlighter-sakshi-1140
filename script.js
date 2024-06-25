function highlight() {
    //Write your code here
    let words=document.querySelectorAll('strong');
    //console.log(words[0]);
    //console.log(words.length);
    words.forEach(elem=>{
        elem.style.color="green";
    })
}


function return_normal() {
    //Write your code here
    let words=document.querySelectorAll('strong');
    //console.log(words[0]);
    //console.log(words.length);
    words.forEach(elem=>{
        elem.style.color="black";
    })
}
    
