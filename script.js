const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
	if (entry.isIntersecting) {
	  entry.target.classList.add('visible');
	  observer.unobserve(entry.target);
	}
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

reveals.forEach(el => observer.observe(el));

const textEl = document.getElementById('typewriter');
const fullText = "outils qui ont du sens.";
textEl.textContent = "";

let i = 0;
function typeWriter() {
  if (i < fullText.length) {
	textEl.textContent += fullText.charAt(i);
	i++;
	setTimeout(typeWriter, Math.random() * 40 + 40);
  } else {
	setInterval(() => {
	  textEl.style.borderColor = textEl.style.borderColor === 'transparent' ? 'var(--accent)' : 'transparent';
	}, 500);
  }
}

setTimeout(typeWriter, 500);

const projectDetails = {
  'festival-cannes-crm': {
	title: 'Festival de Cannes CRM',
	tag: '<i class="fa-solid fa-users" aria-hidden="true"></i> SAE / CRM',
	body: `
	<p><strong>Contexte :</strong> Projet de cours réalisé dans le cadre de la SAE du semestre 5, autour d'un CRM pour le Festival de Cannes.</p>
	<p><strong>Point de départ :</strong> trois modules existaient déjà séparément : un module de gestion des hébergements, un module de gestion des VIP et un module de planning.</p>
	<p><strong>Objectif :</strong> associer ces trois briques dans une application cohérente, tout en identifiant les fonctionnalités pertinentes à ajouter. Le chatbot fait partie de ces ajouts : il apporte une couche IA capable d'interpréter les demandes des utilisateurs et de les transformer en intentions puis en mots-clés exploitables.</p>
	<p><strong>Contribution :</strong> j'ai intégré le module de planning dans l'application et développé entièrement le chatbot, de l'API Python à son intégration côté Symfony.</p>
	<div class="project-gallery">
	  <button type="button" class="gallery-image-button" data-lightbox-src="img/cannes_1.png" aria-label="Ouvrir la capture 1 du CRM Festival de Cannes">
		<div class="card-image-placeholder project-image" style="--project-image: url('img/cannes_1.png');"></div>
	  </button>
	  <button type="button" class="gallery-image-button" data-lightbox-src="img/cannes_2.png" aria-label="Ouvrir la capture 2 du CRM Festival de Cannes">
		<div class="card-image-placeholder project-image" style="--project-image: url('img/cannes_2.png');"></div>
	  </button>
	  <button type="button" class="gallery-image-button" data-lightbox-src="img/cannes_3.png" aria-label="Ouvrir la capture 3 du CRM Festival de Cannes">
		<div class="card-image-placeholder project-image" style="--project-image: url('img/cannes_3.png');"></div>
	  </button>
	</div>
	<h3>Zoom technique :</h3>
	<ul>
	  <li><strong>Assemblage applicatif :</strong> rapprochement du module de gestion des hébergements, du module VIP et du module de planning dans une même application Symfony.</li>
	  <li><strong>Service IA séparé :</strong> l'application Symfony appelle une API Python dédiée au chatbot, afin d'isoler l'interprétation des demandes utilisateur.</li>
	  <li><strong>Recherche guidée :</strong> le chatbot transforme la demande en intention puis en mots-clés exploitables par le CRM.</li>
	</ul>
	<h3>Compétences mises en avant :</h3>
	<ul>
	  <li><strong>Symfony / PHP :</strong> structuration d'une application web métier avec contrôleurs, templates Twig, formulaires et logique serveur.</li>
	  <li><strong>IA en deux étapes :</strong> extraction d'intent pour comprendre la demande, puis déduction de mots-clés exploitables par le CRM.</li>
	  <li><strong>API Python maison :</strong> séparation de la logique IA dans un service dédié appelé par l'application Symfony.</li>
	  <li><strong>Intégration fullstack :</strong> coordination entre interface utilisateur, backend PHP, API IA et données métier.</li>
	</ul>
	<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
	  <a href="https://github.com/axemd/crm_festival_cannes" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
		<span>Dépôt GitHub</span>
		<span class="transfer-arrow">→</span>
	  </a>
	</div>
  `
  },
  'ticket-manager': {
	title: 'Gestion de tickets',
	tag: '<i class="fa-solid fa-list-check" aria-hidden="true"></i> Support / Workflow',
	body: `
	<p><strong>Contexte :</strong> Plateforme de ticketing complète réalisée dans le cadre d'un projet de BUT3, conçue pour gérer le cycle de vie des demandes : création, suivi, priorisation, commentaires, historique et administration.</p>
	<p><strong>Contribution :</strong> j'ai réalisé le projet seul, de la conception fonctionnelle au développement Symfony, en couvrant les rôles, les droits, les référentiels métier et la traçabilité.</p>
	<p><strong>Objectif :</strong> fournir un espace où les utilisateurs créent, filtrent, consultent et commentent des tickets, tandis que les administrateurs pilotent les référentiels métier.</p>
	<div class="project-gallery">
	  <button type="button" class="gallery-image-button" data-lightbox-src="img/ticket_1.png" aria-label="Ouvrir la capture 1 de Gestion de tickets">
		<div class="card-image-placeholder project-image" style="--project-image: url('img/ticket_1.png');"></div>
	  </button>
	  <button type="button" class="gallery-image-button" data-lightbox-src="img/ticket_2.png" aria-label="Ouvrir la capture 2 de Gestion de tickets">
		<div class="card-image-placeholder project-image" style="--project-image: url('img/ticket_2.png');"></div>
	  </button>
	</div>
	<h3>Zoom technique :</h3>
	<ul>
	  <li><strong>Workflow de tickets :</strong> création, modification, priorités, statuts, catégories, étiquettes et fermeture / réouverture avec protection CSRF.</li>
	  <li><strong>Droits métier :</strong> les admins voient tout ; les autres utilisateurs accèdent aux tickets créés par eux ou rattachés à leur rôle via la catégorie.</li>
	  <li><strong>Traçabilité :</strong> historique des changements sur le titre, la description, la priorité, la catégorie, le statut et les étiquettes.</li>
	  <li><strong>Collaboration :</strong> commentaires, profils utilisateurs et statut lu / non lu basé sur la dernière interaction du ticket.</li>
	  <li><strong>Environnement :</strong> Symfony 6.4, PHP 8.1+, Doctrine ORM, PostgreSQL et Docker Compose.</li>
	</ul>
	<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
	  <a href="https://github.com/axemd/ticket_manager" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
		<span>Dépôt GitHub</span>
		<span class="transfer-arrow">→</span>
	  </a>
	</div>
  `
  },
  'soundquiz': {
	title: 'SoundQuiz',
	tag: '<i class="fa-solid fa-music" aria-hidden="true"></i> IA / Audio',
	body: `
	<p><strong>Contexte :</strong> Projet personnel conçu comme un blind test multijoueur complet, avec une séparation nette entre l'interface, l'API métier, le serveur de jeu temps réel et le pipeline d'analyse audio.</p>
	<p><strong>Problématique :</strong> Comment automatiser l'ajout de musiques, détecter un extrait intéressant, puis garder plusieurs joueurs synchronisés pendant une partie ?</p>
	<p><strong>Contribution :</strong> j'ai réalisé le projet seul, de l'architecture générale au front React/Vite, en passant par l'API Flask, le serveur WebSocket, le pipeline audio et l'orchestration Docker.</p>
	<div class="project-gallery">
	  <button type="button" class="gallery-image-button" data-lightbox-src="img/soundquiz_1.png" aria-label="Ouvrir la capture 1 de SoundQuiz">
		<div class="card-image-placeholder project-image" style="--project-image: url('img/soundquiz_1.png');"></div>
	  </button>
	  <button type="button" class="gallery-image-button" data-lightbox-src="img/soundquiz_2.png" aria-label="Ouvrir la capture 2 de SoundQuiz">
		<div class="card-image-placeholder project-image" style="--project-image: url('img/soundquiz_2.png');"></div>
	  </button>
	</div>
	<h3>Architecture :</h3>
	<ul>
	  <li><strong>Front React/Vite :</strong> interface joueur et administration, gestion des playlists, file d'attente, sélection des morceaux et communication avec les proxys <code>/api</code> et <code>/ws</code>.</li>
	  <li><strong>API principale Flask :</strong> authentification JWT, ressources REST, gestion MySQL, ingestion YouTube/Spotify avec <code>yt-dlp</code> et suivi des jobs de meilleur moment.</li>
	  <li><strong>Serveur de jeu WebSocket :</strong> service Python séparé qui conserve l'état autoritatif des lobbies, joueurs, timers, manches, réponses, reconnexions et scores.</li>
	  <li><strong>Pipeline audio asynchrone :</strong> une API d'analyse dépose les jobs dans Redis, un worker les consomme, puis un processeur GPU calcule séparation, embeddings <a href="https://github.com/marl/openl3" target="_blank" rel="noopener">OpenL3</a>, features audio, scoring et sélection de fenêtre.</li>
	  <li><strong>Orchestration Docker :</strong> services isolés pour le front, l'API REST, le WebSocket, l'analyse audio, MySQL, Redis et les outils d'administration, avec volumes partagés pour les uploads, embeddings et runtime <code>yt-dlp</code>.</li>
	</ul>
	<h3>Ce que ça montre :</h3>
	<ul>
	  <li><strong>Découplage :</strong> les traitements coûteux sont sortis de l'API principale afin de garder l'expérience web réactive.</li>
	  <li><strong>Temps réel :</strong> le serveur WebSocket centralise les décisions de partie au lieu de laisser chaque client calculer son propre état.</li>
	  <li><strong>Data/audio :</strong> la base conserve morceaux, playlists, œuvres, scores et métadonnées d'analyse pour réutiliser les résultats et éviter de recalculer inutilement.</li>
	</ul>
	<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
	  <a href="https://github.com/axemd/soundquiz" target="_blank" rel="noopener" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
		<span>Dépôt GitHub (Public)</span>
		<span class="transfer-arrow">→</span>
	  </a>
	</div>
  `
  }
};

const modalOverlay = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalTag = document.getElementById('modal-tag');
const modalBody = document.getElementById('modal-body');
const imageLightbox = document.getElementById('image-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCount = document.getElementById('lightbox-count');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentLightboxImages = [];
let currentLightboxIndex = 0;

function renderLightboxImage() {
  const src = currentLightboxImages[currentLightboxIndex];
  lightboxImage.src = src;
  lightboxImage.alt = `Capture ${currentLightboxIndex + 1}`;
  lightboxCount.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
  lightboxPrev.disabled = currentLightboxImages.length <= 1;
  lightboxNext.disabled = currentLightboxImages.length <= 1;
}

function openImageLightbox(src, images) {
  currentLightboxImages = images.length ? images : [src];
  currentLightboxIndex = Math.max(0, currentLightboxImages.indexOf(src));
  renderLightboxImage();
  imageLightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
  imageLightbox.classList.remove('active');
  lightboxImage.removeAttribute('src');

  if (!modalOverlay.classList.contains('active')) {
	document.body.style.overflow = '';
  }
}

function showLightboxImage(direction) {
  if (!currentLightboxImages.length) return;
  currentLightboxIndex = (currentLightboxIndex + direction + currentLightboxImages.length) % currentLightboxImages.length;
  renderLightboxImage();
}

lightboxPrev.addEventListener('click', () => showLightboxImage(-1));
lightboxNext.addEventListener('click', () => showLightboxImage(1));

modalBody.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-lightbox-src]');
  if (!trigger) return;

  event.preventDefault();
  event.stopPropagation();

  const gallery = trigger.closest('.project-gallery');
  const images = gallery
	? [...gallery.querySelectorAll('[data-lightbox-src]')].map((item) => item.dataset.lightboxSrc)
	: [trigger.dataset.lightboxSrc];

  openImageLightbox(trigger.dataset.lightboxSrc, images);
});

function openProject(id) {
  if (!projectDetails[id]) return;

  modalTitle.textContent = projectDetails[id].title;
  modalTag.innerHTML = projectDetails[id].tag;
  modalBody.innerHTML = projectDetails[id].body;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.querySelector('.modal-close').focus();
}

document.querySelectorAll('[data-open-project]').forEach(trigger => {
  trigger.addEventListener('click', (event) => {
	event.stopPropagation();
	openProject(trigger.dataset.openProject);
  });
});

document.querySelectorAll('.card-repo-link').forEach(link => {
  link.addEventListener('click', (event) => event.stopPropagation());
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (event) => {
	if (event.target.closest('a, button')) return;
	openProject(card.id);
  });
});

function closeModal(e) {
  if (e) {
	const isClickInside = e.target.closest('.modal-content-wrap');
	const isCloseButton = e.target.closest('.modal-close');

	if (isClickInside && !isCloseButton) return;
  }
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (imageLightbox.classList.contains('active')) {
	if (e.key === 'Escape') closeImageLightbox();
	if (e.key === 'ArrowLeft') showLightboxImage(-1);
	if (e.key === 'ArrowRight') showLightboxImage(1);
	return;
  }

  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
	closeModal();
  }
});