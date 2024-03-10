const triggers = document.querySelectorAll('.trigger')
const acordeons = document.querySelectorAll('.acordeon')

triggers.forEach((trigger, index) =>{
    trigger.addEventListener('click', () =>{
        const isOpen = acordeons[index].classList.contains('open');

        acordeons.forEach((acordeon) =>{
            acordeon.classList.remove('open')
        })

        if(!isOpen){
            acordeons[index].classList.add('open')
        }
    })
})


// querySelectorAll - selecionar um conjunto de elementos no DOM (Modelo de Objetos do Documento) usando um seletor CSS. de todos os elementoss na pagina. Para cada elemnto encontrado ele cria uma variavel e aglomera em uma array

//forEach - executa a função fornecida uma vez para cada elemento presente no array, em ordem, e não retorna um novo array

//addEventListener - ele permite que você especifique uma função (ou "listener") que será chamada quando ocorrer um determinado evento no elemento alvo.

//classList - usado para acessar a lista de classes de um elemento HTML. 
//contains(nomeDaClasse): Verifica se o elemento tem uma classe específica; retorna true se presente e false se ausente.
//add(nomeDaClasse): Adiciona uma classe ao elemento.
// remove(nomeDaClasse): Remove uma classe do elemento.