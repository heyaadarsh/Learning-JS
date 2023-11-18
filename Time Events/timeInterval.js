// let showTheName = () => {
//     setTimeout(() => {
//         console.log("hello");
//     }, 1000)
// }

// showTheName();

var num = 0;
let timeRef;

let showMyNum = () => {
    timeRef = setInterval(() => {
        console.log("hello");
        num++;
        
        if(num===10){
            clearInterval(timeRef);
        }
    }, 1000)
    
}

showMyNum();

