# Search D_evs

Aplicação Angular para buscar perfis de desenvolvedores no GitHub e
exibir informações detalhadas, incluindo seus repositórios ordenados por
número de estrelas.

---

## 🎯 Objetivo do Desafio

Construir uma aplicação Angular que busque o perfil de desenvolvedores
na API pública do GitHub e exiba seus dados em uma página de perfil.

---

## 📝 Histórias de Usuário

-   Na **Home**, o usuário pode pesquisar por um `username` do GitHub.  
-   Ao submeter a busca, é redirecionado para a **página de Perfil**,
    onde:  
    -   Os dados do usuário são exibidos.  
    -   Os repositórios aparecem ordenados do que tem mais estrelas para
        o que tem menos.  
    -   Cada repositório é um link para o repositório original no
        GitHub.  
    -   Caso o perfil possua **site** ou **Twitter(atual X)**, botões com ícones
        direcionam para esses links.  
    -   Há um botão de **voltar** que leva de volta para a Home.  

---

## 🛠️ Tecnologias Utilizadas

-   **Angular 20.1** (standalone components)  
-   **TypeScript**  
-   **CSS puro**  
-   **Font Awesome** (ícones)  
-   **API pública do GitHub**  

---

## 📂 Estrutura do Projeto

```
src/app/
│── models/         # Interfaces de User e Repo
│── services/       # GithubApiService (requisições à API)
│── home/           # Página inicial de busca
│── profile/        # Página de perfil do usuário
│── app.routes.ts   # Rotas da aplicação
│── app.component.ts
```

---

## ⚙️ Instalação e Execução

### 🔹 Pré-requisitos

-   Node.js **>= 20**  
-   npm **>= 10**  
-   Angular CLI **>= 20.1**

### 🔹 Clonar o projeto

```bash
git clone https://github.com/ClaudivannJ/desafioAngular.git
cd desafioAngular
```

### 🔹 Instalar dependências

```bash
npm install
```

### 🔹 Rodar em ambiente de desenvolvimento

```bash
ng serve
```

Acesse: **http://localhost:4200**

### 🔹 Gerar build de produção

```bash
ng build --configuration production
```

---

## 📌 Endpoints da API do GitHub

-   **Buscar usuário** → `https://api.github.com/users/{username}`  
-   **Buscar repositórios** →
    `https://api.github.com/users/{username}/repos`

---

## 🎨 Layout

-   Layout seguido **fielmente** ao Figma.  
-   Responsividade para **desktop, tablet e mobile**.  
-   Ícones aplicados em todos os elementos relevantes (seguidores,
    localização, empresa, repositórios etc).  

👉 [Link do Design no Figma](https://www.figma.com/design/UhCv9vGXec1jKOsZqmEFdG/Teste-Petize?node-id=16-1130&t=1Qh7f3Ju1qBRXLvH-0)

---

## 🔧 Decisões Técnicas

-   Uso de **standalone components** para simplificar a arquitetura.  
-   **RxJS com subscribe** para controle direto das requisições.  
-   **Font Awesome** para ícones semelhantes ao protótipo.  
-   **CSS puro** garantindo fidelidade ao design sem dependência de
    bibliotecas externas.  

---

## ✅ Requisitos Atendidos

✔️ Home para busca de usuários  
✔️ Página de perfil com dados e repositórios ordenados por estrelas  
✔️ Links para repositórios, site e Twitter(atual X)  
✔️ Botão de voltar para home  
✔️ Layout responsivo (desktop, tablet, mobile)  
✔️ Ícones aplicados em todos os elementos  

---

## 👤 Autor

Desenvolvido por **Claudivannj**.
