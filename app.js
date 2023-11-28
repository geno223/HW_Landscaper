const tools = [
    {name: "Teeth", generates: 1, price: 0},
    {name: "Scissors", generates: 5, price: 5},
    {name: "PushMower", generates: 50, price: 25},
    {name: "BatMower", generates: 100, price: 250},
    {name: "Team", generates: 250, price: 500},
]

const landScaper = {
    money: 0,
    tool: 0,
    winGame: false,
}

function cutGrass(){
    const tool = tools[landScaper.tool]
    alert(`Landscaper cut grass using ${tool.name} 
    and make ${tool.generates}dollars`)
    landScaper.money += tool.generates
}

function upgrade(){
    
    if(landScaper.tool + 1 <= tools.length){
    const nextTool = tools[landScaper.tool + 1];
    if(nextTool.price < landScaper.money){
        landScaper.money -= nextTool.price
        landScaper.tool += 1
    }
} else {
    alert("no more tools to upgrade")
    }
}

function winCondition(){
if(landScaper.tool === tools.length - 1 && landScaper.money >= 1000){
        alert("Landscaper win scenario")
        landScaper.winGame = true
    }
}
alert("Welcome to Landscaper")
while(!landScaper.winGame){
    const response = prompt(`You currently have ${landScaper.money} dollars, [c]ut grass or [u]pgrade tools`)
    if(response === 'c'){
        cutGrass()
    }
    if(response === 'u'){
        upgrade()
    }
    winCondition()
}