const perfilUsuarios = new Map();

function adicionarInteresses(idUsuario, listaDeTags) {

    perfilUsuarios.has(idUsuario);

    if (!perfilUsuarios.has(idUsuario)){
        perfilUsuarios.set(idUsuario, new Set());
    } 

    const perfilAtualizado = perfilUsuarios.get(idUsuario);

    for (let tag of listaDeTags){
        perfilAtualizado.add(tag);
    };
}


function obterInteresses(idUsuario) { // Retorna um array com as tags únicas do usuário.
    if (perfilUsuarios.has(idUsuario)){

        const conversao = new Set(perfilUsuarios.get(idUsuario));
        return [...conversao];
    }
        return [];
}

// --- --- TESTE --- --- //
adicionarInteresses("user_#0001", ["anime", "acao", "sci-fi"]);
adicionarInteresses("user_#2545", ["acao", "comedia"]);

console.log("Interesses do user_#0001:", obterInteresses("user_#0001"));
console.log("Interesses do user_#2545:", obterInteresses("user_#2545"));

