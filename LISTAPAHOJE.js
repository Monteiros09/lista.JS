function CriarNo(NOME)
{
    return{dado: NOME, proximo: null};
}

function CriarLista()
{
    return{inicio: null, fim: null};
}
const lista = CriarLista();

function ListarTodos()
{
    if (lista.inicio === null)
        {
            console.log("Lista vazia, Tente inserir novos valores.");
            return;
        }

    let atual = lista.inicio
    while (atual !== null)
        {
            console.log("->",atual.dado);
            atual = atual.proximo;
        }
}

function InserirFim(NOME)
{
    const NoFinal = CriarNo(NOME);

    if (lista.inicio === null)
        {
            lista.inicio = NoFinal;
            lista.fim = NoFinal;
        }
    else
        {
            lista.fim.proximo = NoFinal;
            lista.fim = NoFinal;
        }
    console.log(`${NOME} foi inserido com sucesso ao final da lista`);
}

function InserirPosicao(NOME, POSICAO)
{
    if (!Number.isInteger(POSICAO) || POSICAO < 0)
        {
            console.log("Posição inválida!");
            return;
        }

    const NovoNo = CriarNo(NOME);

    // INSERIR NO INICIO
    
    if (POSICAO === 0)
        {
            NovoNo.proximo = lista.inicio;
            lista.inicio = NovoNo;

        if (lista.fim === null)
            {
                lista.fim = NovoNo;
            }

        console.log(`${NOME} inserido na posição ${POSICAO}`);
        return;

        }

    // INSERIR NA POSIÇÃO

    
    let atual = lista.inicio;

    for (let i = 0; i < POSICAO - 1; i++)
    {
        if (atual === null)
            {
                console.log("Posição inválida!");
                return;
            }

        atual = atual.proximo;
    }

    if (atual === null)
        {
            console.log("Posição inválida!");
            return;
        }

    NovoNo.proximo = atual.proximo;
    atual.proximo = NovoNo;

    if (NovoNo.proximo === null)
        {
            lista.fim = NovoNo;
        }

    console.log(`${NOME} inserido na posição ${POSICAO}`);
}

function Menu()
{
    let op;

    do
    {
        console.log("\n [ MENU PRINCIPAL ]");
        console.log("[1] Listar Todos");
        console.log("[2] Inserir no Fim");
        console.log("[3] Inserir na Posição");
        console.log("[9] Sair");

        op = prompt("Por favor insira o número de uma das opções acima:\n");

        switch (op) {
            case "1":
                {   ListarTodos();
                    break;
                }
            case "2":
                {
                    const nome = prompt("Por favor, insira um nome:\n");
                    InserirFim(nome);
                    break;
                }
            
            case "3":
                {
                    const nome = prompt("Por favor, insira um nome:\n");

                    if (nome === null || nome.trim() === "") 
                    {
                        console.log("Nome não informado. Operação cancelada.");
                    break;
                    }

                    const entrada = prompt("Por favor, digite a posição:\n");

                    if (entrada === null || entrada.trim() === "") 
                    {
                        console.log("Operação cancelada ou posição não informada.");
                        break;
                    }

                    const posicao = Number(entrada);

                    InserirPosicao(nome, posicao);
                    break;
                }

            
            case "9":
                {
                    console.log("Programa encerrado!");
                    break;
                }
            default:
            console.log("Por favor escolha uma opção válida!");   
                
        }
        
    }   while(op !== "9");
}

Menu();
