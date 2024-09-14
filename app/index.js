const { select, input, checkbox} = require('@inquirer/prompts')
let meta = {
    value:'Tomar agua',
    checked:false
}

let metas = [ meta ]

async function cadastrarMetas(){
    const meta = await input (
        {message: "Digite a sua meta;" }

    )
    if (meta.lenght == 0)
    {
        console.log("A meta não pode ser vazia")
        return
    }
    metas.push(
        {
            value: meta, checked: false
        }
    )
}
async function listarMetas (){
    const respostas = await checkbox(
    {
    message : "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
    choices: [...metas]
    }
)
    if(respostas.lenght){
        console.log("Nenhuma meta selecionada!")
        return
    }
    respostas.forEach((respost) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checkbox = true
    })
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
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                console.log()
                break
            case "sair":
                console.log("Até a próxima")
            return
        }
        return
    }
}
start();