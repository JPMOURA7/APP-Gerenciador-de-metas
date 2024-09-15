const { select, input, checkbox} = require('@inquirer/prompts')

let meta = {
    value:'Tomar agua',
    checked:false
}

let metas = [meta]

async function cadastrarMetas(){
    const meta = await input (
        {message: "Digite a sua meta;" }

    )
    if (meta.length == 0)
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

    if(respostas.length == 0){
        console.log("Nenhuma meta selecionada!")
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        meta.checkbox = true
    })

    console.log('Meta(s) marcadas como concluida(s)')
}
const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if (realizadas.length == 0){
        console.log("Nenhuma meta realizada :(")
        return
    }
    await select ({
        message: "Metas realizadas " + realizadas.length,
        choices: [...realizadas]
    })
}
const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })
    if (abertas.length == 0){
        console.log("Não existem metas abertas :)")
        return
    }
    await select ({
        message: "Metas abertas " +  abertas.length,
        choices: [...abertas]
    })
}
const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return {value:meta.value,
                checked:false
        }
    })
    const itensADeletar = await checkbox(
        {
        message : "Selecione meta(s) para deletar",
        choices: [...metasDesmarcadas],
        instructions:false
        })
        if(itensADeletar.length == 0){
            console.log("Nenhum item para deletar")

        }
        itensADeletar.forEach((item) => {
            metas = metas.filter((meta) => {
                return meta.value != true
            })
        })
        console.log("Meta(s) deletada(s) com sucesso")
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
                name: "Deletar metas",
                value: "deletar"
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
            case "deletar":
                await deletarMetas();
                break
            case "sair":
                console.log("Até a próxima");
            return
        }
        return
    }
}
start();