document.addEventListener('DOMContentLoaded', function() {

    const grid = document.querySelector('.grid')
    const overlayL = document.querySelector('.overlayLost')
    const overlayW = document.querySelector('.overlayWin')
    let width  = 100
    let minesAmount = 10
    var b = 0;


    function createBoard(){

            const minesArray = Array(minesAmount).fill('mines')
            const validArray = Array(width - minesAmount).fill('valids')
            const gameArray = validArray.concat(minesArray)
            const mixedArray = gameArray.sort(()=>Math.random()-0.5)    

            for(let i = 0; i < width; i++){
                const square = document.createElement('div')
                square.setAttribute('id',i)
                square.classList.add(mixedArray[i])
                grid.appendChild(square)
            }
            console.log(minesArray);

            
    }

  
    createBoard()

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('mines')){
            const allMines = document.querySelectorAll('.mines')
            allMines.forEach((mine)=>{
                mine.classList.add('mine')
                mine.textContent = '💣'
                overlayL.classList.remove('hidden')
            })
    }


        else if(e.target.classList.contains('valids')){
                const allValids = document.querySelectorAll('.valids')
                allValids.forEach((valid)=>{

                valid.onclick = function(){
                b++
                if(b==10){
                    overlayW.classList.remove('hidden2')
                    valid.textContent = '💶'
                }
                valid.textContent = '💶'
                valid.classList.add('valid')

                 ;
                }
                }
                ) 

        } 
    })
    






 })