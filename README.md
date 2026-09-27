# sistema-interese-usuarios
Este projeto foi uma demonstração prática de como gerenciar dados relacionais e garantir a unicidade de informações em JavaScript.

# Sistema de Gerenciamento de Interesses de Usuários

Este projeto é uma demonstração prática de como gerenciar dados relacionais e garantir a unicidade de informações em **JavaScript** utilizando as estruturas de dados nativas **Map** e **Set**.

O objetivo do código é permitir o cadastro e a recuperação de tags/interesses de usuários de forma altamente eficiente, simulando o comportamento de um módulo de perfil para redes sociais ou plataformas de conteúdo.

- O `Map` foi feito para criar a coleção `perfilUsuarios`. Ele mapeia o `idUsuario` diretamente para o seu conjunto de interesses, permitindo buscas, inserções e verificações com alta performance.
- O `Set`tilizado para armazenar as listas de tags. Como o `Set` armazena apenas valores únicos, o sistema impede automaticamente que um usuário tenha interesses duplicados (ex: adicionar "ação" duas vezes).
- **Spread Operator (`[...]`)**: Aplicado na função de busca para converter o `Set` interno de volta em um `Array`, facilitando a manipulação dos dados por outras partes de uma aplicação.

