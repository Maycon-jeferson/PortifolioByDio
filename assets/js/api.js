async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Maycon-jeferson/PortifolioByDio/main/data/profile.json';
    const fechting = await fetch(url)
    return await fechting.json()
}

//A função fetchProfileData é uma função assíncrona utilizada para obter dados de um perfil a partir de uma URL que aponta para um arquivo JSON

//fetch é usada para fazer uma solicitação HTTP para a URL especificada.
//await aguarda a conclusão da solicitação antes de continuar a execução do código.
//O método .json() é utilizado para extrair o corpo da resposta como um objeto JSON

//a function fetchProfileData recebe e armazena o arquivo json fornecido