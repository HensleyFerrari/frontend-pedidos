# A3DATA Pedidos Cirúrgicos - Frontend

http://localhost:80

## Instalação

Criar imagem do frontend no docker

```sh
docker build --pull --rm -f "DockerFile" -t pedidofrontend:lastest "."
```
Roda um container da api
```sh
docker run --name pedidofronted -p 80:80 api:latest
```

## TODO ✅
- [ ] Implemetanção da lógica de edição de formulário.
- [ ] Corrigir erros de tipagem.
- [ ] Adicionar react-toastify para melhor feedback para o usuário.
- [ ] Refatorar componentes de estilo.
- [ ] Implementar testes.