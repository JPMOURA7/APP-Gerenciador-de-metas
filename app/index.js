const { select } = require('@inquirer/prompts')


async function start(){

    while(true) {
        const opcao = await select ({
            message: "Menu",
            choices: [
            {
                name:"Cadastrar meta",
                value:"cadastrar"
            },
            {
                name: "Sair",
                value: "sair"
            }
        ]
        })
        
        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
            return
        }
        return
    }
}
start();