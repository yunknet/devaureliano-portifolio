# net.dev — Portfólio de Aureliano Soares

Site: **https://netodev.com.br** — portfólio pessoal de **Aureliano Soares da Silva Neto**, desenvolvedor back-end com foco em APIs, automações com IA (n8n, LLMs) e plataformas SaaS.

- HTML, CSS e JavaScript puros — sem build
- Projetos com filtros e modal de detalhes (dados em `script.js`)
- Currículo integrado, com botão para salvar em PDF (layout de impressão)

## Rodar localmente
Abra `index.html` no navegador.

## Deploy (Docker / Easypanel)
A imagem usa `nginx:alpine` servindo os arquivos estáticos na porta **80**.

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

No Easypanel: **App → Source: GitHub** (`yunknet/devaureliano-portifolio`, branch `main`) → **Build: Dockerfile** → **Domains: porta 80**.

[LinkedIn](https://www.linkedin.com/in/dev-aureliano-soares/) · [GitHub](https://github.com/yunknet) · [Instagram](https://www.instagram.com/netinho.so)
