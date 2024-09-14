const { select, input} = require('@inquirer/prompts')

async function cadastrarMetas(){
    const meta = await input (
        {message: "Digite a sua meta;" }

    )
    if (meta.lenght == 0)
    {
        console.log("A meta não pode ser vazia")
        return
    }
}

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
                name:"Listar metas",
                value:"listar"
            },
            {
                name: "Sair",
                value: "sair"
            }
        ]
        })

        switch(opcao){
            case "cadastrar":
                await cadastrarMetas();
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Até a próxima")
            return
        }
        return
    }
}
start();