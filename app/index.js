const { select, input, checkbox} = require('@inquirer/prompts')

let meta = {
    value:'Tomar agua',
    checked:false,
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
    choices: [...metas],
    instructions:false
    })

    metas.forEach((m) => {
    m.checked = false
    })

    if(respostas.lenght){
        console.log("Nenhuma meta selecionada!")
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checkbox = true
    })

    console.log('meta(s) marcadas como concluida(s)')
}
const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if (realizadas.lenght == 0){
        console.log("Nenhuma meta realizada :(")
        return
    }
    await select({
        message: "Metas realizadas",
        choices: [...realizadas]
    })

}
const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })
    if (abertas.lenght == 0){
        console.log("Não existem metas abertas :)")
        return
    }
    await select ({
        message: "Metas abertas",
        choices: [...abertas]
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
                name: "Metas realizadas",
                value: "realizadas"
            },
            {
                name: "Metas abertas",
                value: "abertas"
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
                console.log(metas);
                break
            case "listar":
                await listarMetas();
                console.log();
                break
            case "realizadas":
                await metasRealizadas();
                break
            case "abertas":
                await metasAbertas();
                break
            case "sair":
                console.log("Até a próxima");
            return
        }
        return
    }
}
start();