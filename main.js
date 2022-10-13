const boxlist = document.querySelectorAll(".btn-operador");
let turn = true
const moveArray = new Array(9).fill(null)
function ganador (i,j,k){
    if (moveArray[i] == moveArray[j] && 
        moveArray[j]== moveArray[k] &&
        moveArray[i] != null  ){
            winrrer.innerHTML = "<h1>Ganaste</h1>" + turn    
        }
}
const winrrer = document.getElementById("winer")
boxlist.forEach((box,indece)=>{
    box.textContent =indece
    box.addEventListener("click",()=>{
        if(turn){
            box.textContent = "x"
            turn = false
        }else{
            box.textContent = "0"
            turn = true
        }

        moveArray[indece] = turn
        ganador (0,1,2)
           
    },{once:true})
})