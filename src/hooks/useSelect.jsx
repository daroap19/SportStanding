export function useSelect(e){
  
    if(e.target.parentElement.classList.contains("equipo_local") ||
      e.target.parentElement.classList.contains("equipo_visitante") ){
        const id = e.target.parentElement.parentElement.getAttribute("id")
        const dataNewBet = Array.from(e.target.parentElement.parentElement.children).map(element => element.innerText)
        const target = e.target.parentElement
        const dataSelect = Array.from(e.target.parentElement.children).map(element => element.innerText)
        return [
        {
          id : id,
          estado: dataNewBet[0],
          local: dataNewBet[1],
          marcador: dataNewBet[2],
          visitante: dataNewBet[3],
          select: {
            ganador: dataSelect[1]
          }
        },
        target
          ]
    }
    
    

    const id = e.target.parentElement.getAttribute("id")
    const data = Array.from(e.target.parentElement.children)
    const dataNewBet = data.map(element => element.innerText)
    const target = e.target
    const dataSelect = Array.from(e.target.children).map(element => element.innerText)

    return [
      {
        id : id,
        estado: dataNewBet[0],
        local: dataNewBet[1],
        marcador: dataNewBet[2],
        visitante: dataNewBet[3],
        select: {
          ganador: dataSelect[1]
        }
      },
      target
        ]
  } 