// ===== Dados dos projetos =====
const projects = [
  {
    title: 'SaaS roiLead',
    cat: 'saas', catLabel: 'SaaS', icon: 'roi', cover: 'g1',
    short: 'Plataforma omnichannel com CRM e gestão estratégica de leads, com IA para WhatsApp e app mobile nativo.',
    text: [
      'Plataforma omnichannel com CRM e gestão estratégica de leads. Desenvolvida em React (Vite) com arquitetura serverless em tempo real (Supabase, TypeScript e PostgreSQL).',
      'O ecossistema conta com integração de IA para automação de WhatsApp via webhooks e um aplicativo mobile nativo (React Native) que gamifica a distribuição de leads, garantindo atendimento instantâneo e maximizando taxas de conversão.'
    ],
    tags: ['React', 'Vite', 'TypeScript', 'Supabase', 'PostgreSQL', 'IA', 'WhatsApp'],
    site: 'https://roilead.com.br/',
    code: 'https://github.com/yunknet/roiLead'
  },
  {
    title: 'App Cúpula de Leads',
    cat: 'saas', catLabel: 'Mobile', icon: '{ ⚡ }', cover: 'g2',
    short: 'Extensão mobile do roiLead: distribuição competitiva de leads em tempo real, com push e roleta.',
    text: [
      'Extensão mobile do ecossistema roiLead. Aplicativo para distribuição competitiva e captura de leads em tempo real, desenvolvido em React Native (Expo) com backend TypeScript serverless (Supabase Edge Functions e PostgreSQL).',
      'Focado em maximizar o "speed to lead", gamifica o atendimento de equipes comerciais com notificações push integradas ao Firebase (FCM) e timers de escassez (roleta), garantindo contato instantâneo e altíssima conversão.'
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Edge Functions', 'PostgreSQL', 'Firebase FCM'],
    code: 'https://github.com/yunknet/cupula-app'
  },
  {
    title: 'Agente de Vendas com IA — Melhor Versão',
    cat: 'ia', catLabel: 'IA & Automação', icon: 'AI', cover: 'g7',
    short: 'Vendas 24/7 no WhatsApp com agente LLM, voz clonada (TTS), filas, Redis e Meta CAPI — com o influenciador Pedro Lotz.',
    text: [
      'Sistema de vendas automatizado via WhatsApp para uma operação de infoprodutos e suplementos (com o influenciador Pedro Lotz), com arquitetura híbrida entre o DataCrazy CRM e o n8n.',
      'O núcleo é um agente conversacional com LLM que segue os scripts comerciais do cliente: conduz o lead pela esteira de produtos, trata objeções e oferece downsell de forma estratégica. O agente também dispara áudios personalizados com a voz clonada do especialista por síntese TTS.',
      'A integração usa chamadas HTTP síncronas entre CRM e n8n, com envio pelos blocos nativos do CRM para contornar o rate limit da API. Em caso de timeout, o fallback é a API REST, com filas e exponential backoff. Inclui scripts JavaScript serverless (async/await) no CRM e debounce em Redis para agrupar mensagens fragmentadas antes do envio à IA.',
      'Há ainda sanitização de dados do lead, controle de estado para transferência ao atendimento humano e webhooks de pagamento que pausam a IA na compra aprovada. O rastreamento de conversões é server-side via Meta Conversions API (CAPI/CTWA). Resultado: atendimento 24/7, recuperação de vendas e maior conversão sem intervenção humana.'
    ],
    tags: ['n8n', 'LLM', 'TTS', 'Redis', 'JavaScript', 'Meta CAPI', 'WhatsApp']
  },
  {
    title: 'Sistema de Orçamento Inteligente',
    cat: 'ia', catLabel: 'IA & Automação', icon: 'm²', cover: 'g3',
    short: 'Orçamentos automáticos para vidraçaria com agente multimodal no WhatsApp, Whisper, visão computacional e PDFs.',
    text: [
      'Plataforma de orçamento automatizado para vidraçaria, que substitui o antigo processo manual de croqui em papel e planilha Excel/VBA por um fluxo digital guiado por IA.',
      'O núcleo é um agente conversacional multimodal (áudio, texto e imagem) construído em n8n, integrado ao WhatsApp via Z-API, com transcrição por Whisper, visão computacional e memória persistente em PostgreSQL.',
      'O ecossistema conta com um formulário web responsivo que a IA envia ao próprio cliente para captura de medidas, um microsserviço em Node.js hospedado em VPS para geração dinâmica de PDFs de orçamento, e um motor de cálculo que reproduz com exatidão as regras de desconto por tipo de projeto (portas, janelas, báscula, pivotante) e a precificação por m² de cada tipo de vidro.'
    ],
    tags: ['n8n', 'Z-API', 'Whisper', 'Visão computacional', 'Node.js', 'PostgreSQL'],
    site: 'https://pontualtemper.mivaia.com/'
  },
  {
    title: 'API de Cadastro em PHP',
    cat: 'web', catLabel: 'API', icon: '</>', cover: 'g5',
    short: 'API CRUD de cadastro de pessoas em PHP e MySQL, com upload de foto e script SQL de criação do banco.',
    text: [
      'API de cadastro de pessoas, desenvolvida em PHP e MySQL. Permite operações CRUD com nome, idade, telefone, e-mail e foto.',
      'Inclui script SQL para criação automática do banco de dados e conexão configurável, servindo como base de estudo para desenvolvimento de APIs e integração com sistemas externos.'
    ],
    tags: ['PHP', 'MySQL', 'REST', 'CRUD'],
    code: 'https://github.com/yunknet/api-php'
  },
  {
    title: 'Sistema de Controle e Gerenciamento',
    cat: 'web', catLabel: 'Web', icon: '▦', cover: 'g6',
    short: 'Gestão CRUD de clientes, produtos, encomendas, fornecedores e manutenção com PHP, MySQL e Bootstrap.',
    text: [
      'Sistema web de gerenciamento CRUD para clientes, produtos, componentes, encomendas, fornecedores e manutenção.',
      'Desenvolvido com PHP, MySQL e Bootstrap, possui interface responsiva, uso de modais, formulários dinâmicos e JOINs para exibição integrada de dados.'
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JOINs'],
    code: 'https://github.com/yunknet/Controle-e-Gerenciamento'
  },
  {
    title: 'Sistema Web de Agendamento',
    cat: 'web', catLabel: 'Web', icon: '✂', cover: 'g4',
    short: 'Agendamento para barbearia em Java Spring Boot, banco H2 e containerização com Docker.',
    text: [
      'Sistema web de agendamento para barbearia, desenvolvido em Java (Spring Boot) com banco H2 em memória.',
      'Containerizado em Docker, permite fácil execução em qualquer ambiente e suporta migração para MySQL em produção.'
    ],
    tags: ['Java', 'Spring Boot', 'H2', 'Docker']
  }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function linksHTML(p) {
  let h = '';
  if (p.site) h += `<a class="pbtn solid" href="${p.site}" target="_blank" rel="noopener"><svg><use href="#i-ext"/></svg>Ver site</a>`;
  if (p.code) h += `<a class="pbtn" href="${p.code}" target="_blank" rel="noopener"><svg><use href="#i-github"/></svg>Código</a>`;
  return h;
}

// ===== Render dos cards =====
const grid = $('#projectGrid');
grid.innerHTML = projects.map((p, i) => `
  <article class="project reveal" data-cat="${p.cat}" data-i="${i}" tabindex="0">
    <div class="cover ${p.cover}"><span class="badge">${p.catLabel}</span><span class="cover-icon">${esc(p.icon)}</span></div>
    <div class="project-text">
      <h3>${p.title}</h3>
      <p>${p.short}</p>
      <div class="tags">${p.tags.slice(0, 4).map((t) => `<span>${t}</span>`).join('')}</div>
      <div class="project-buttons">
        <button class="pbtn" data-open="${i}">Detalhes</button>
        ${linksHTML(p)}
      </div>
    </div>
  </article>`).join('');

// ===== Filtros =====
$$('#filters .chip').forEach((btn) => btn.addEventListener('click', () => {
  $$('#filters .chip').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  $$('.project').forEach((card) => card.classList.toggle('hide', f !== 'all' && card.dataset.cat !== f));
}));

// ===== Modal =====
const modal = $('#modal');
function openModal(i) {
  const p = projects[i];
  $('#modalCover').className = `modal-cover ${p.cover}`;
  $('#modalCat').textContent = p.catLabel;
  $('#modalTitle').textContent = p.title;
  $('#modalText').innerHTML = p.text.map((t) => `<p>${esc(t)}</p>`).join('');
  $('#modalTags').innerHTML = p.tags.map((t) => `<span>${t}</span>`).join('');
  $('#modalLinks').innerHTML = linksHTML(p);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  $('.modal-close').focus();
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
}
grid.addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  const card = e.target.closest('.project');
  if (card) openModal(+card.dataset.i);
});
grid.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('project')) openModal(+e.target.dataset.i);
});
$$('[data-close]', modal).forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===== Nav =====
const nav = $('#nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const burger = $('#burger');
const links = $('#navLinks');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});
$$('a', links).forEach((a) => a.addEventListener('click', () => {
  links.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', false);
}));

// link ativo
const sections = $$('section[id]');
const navObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) $$('.nav-links a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => navObs.observe(s));

// ===== Reveal on scroll =====
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('visible'); revObs.unobserve(en.target); } });
}, { threshold: 0.12 });
$$('.reveal').forEach((el) => revObs.observe(el));

// ===== Palavras rotativas =====
const words = ['Back-end', 'de Automações com IA', 'Full-stack', 'de Plataformas SaaS', 'n8n & APIs'];
const rot = $('#rotator');
let wi = 0, ci = words[0].length, deleting = true;
function rotate() {
  const w = words[wi];
  rot.textContent = w.slice(0, ci);
  let delay = deleting ? 45 : 85;
  if (deleting) {
    if (--ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; delay = 300; }
  } else if (++ci > words[wi].length) { deleting = true; ci = words[wi].length; delay = 1800; }
  setTimeout(rotate, delay);
}
setTimeout(rotate, 2200);

// ===== Código digitado no hero =====
const codeLines = [
  ['c', '// agente de qualificação de leads'],
  ['k', 'const ', '', 'lead = ', 'k', 'await ', 'f', 'whatsapp', '', '.receive(msg);'],
  ['k', 'const ', '', 'intent = ', 'k', 'await ', 'f', 'llm', '', '.classify(lead.text);'],
  [''],
  ['k', 'if ', '', '(intent === ', 's', "'comprar'", '', ') {'],
  ['', '  ', 'k', 'await ', 'f', 'crm', '', '.update(lead.id, { score: ', 'n', '98', '', ' });'],
  ['', '  ', 'k', 'await ', 'f', 'handoff', '', '(lead, ', 's', "'vendedor'", '', ');'],
  ['', '} ', 'k', 'else ', '', '{'],
  ['', '  ', 'k', 'await ', 'f', 'agent', '', '.reply(lead, { memory: ', 's', "'postgres'", '', ' });'],
  ['', '}'],
  [''],
  ['c', '// ✔ atendimento 24/7, sem intervenção humana']
];
const typed = $('#typed');
const flat = [];
codeLines.forEach((line) => {
  if (line.length === 1) { flat.push([line[0], line[0] === 'c' ? '' : '']); }
  for (let i = 0; i < line.length; i += 2) {
    const cls = line[i], txt = line[i + 1] ?? (line.length === 2 ? line[1] : '');
    if (txt) [...txt].forEach((ch) => flat.push([cls, ch]));
  }
  flat.push(['', '\n']);
});
let ti = 0;
function typeCode() {
  if (ti >= flat.length) return;
  const [cls, ch] = flat[ti++];
  if (!ch) return typeCode();
  if (cls) {
    const last = typed.lastElementChild;
    if (last && last.className === cls && typed.lastChild === last) last.textContent += ch;
    else { const s = document.createElement('span'); s.className = cls; s.textContent = ch; typed.appendChild(s); }
  } else typed.appendChild(document.createTextNode(ch));
  setTimeout(typeCode, ch === '\n' ? 90 : 18);
}
setTimeout(typeCode, 700);

$('#year').textContent = new Date().getFullYear();
