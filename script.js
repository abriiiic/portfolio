/* --- 1. Menu Déroulant CV --- */
const btnTelechargerCV = document.querySelector('#btn-telecharger-cv');
const dropdownCV = document.querySelector('.dropdown-cv');

if (btnTelechargerCV && dropdownCV) {
    btnTelechargerCV.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownCV.classList.toggle('active');
    });

    document.querySelectorAll('.option-cv').forEach(option => {
        option.addEventListener('click', () => {
            dropdownCV.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-cv')) {
            dropdownCV.classList.remove('active');
        }
    });
}

/* --- 1.5 Menu Déroulant Filtres --- */
const btnMenuFiltres = document.querySelector('#btn-menu-filtres');
const dropdownFiltres = document.querySelector('.dropdown-filtres');
const optionsFiltres = document.querySelectorAll('.filtre-option');

if (btnMenuFiltres && dropdownFiltres) {
    btnMenuFiltres.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownFiltres.classList.toggle('active');
    });

    optionsFiltres.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Retirer la classe active de tous les options
            optionsFiltres.forEach(opt => opt.classList.remove('active'));
            
            // Ajouter la classe active à l'option cliquée
            option.classList.add('active');
            
            // Mettre à jour le filtre actif
            filtreActif = option.getAttribute('data-filtre');
            
            // Appliquer les filtres
            appliqueFiltresEtRecherche();
            
            // Fermer le menu après la sélection
            dropdownFiltres.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-filtres')) {
            dropdownFiltres.classList.remove('active');
        }
    });
}

/* --- 2. Dictionnaire de Traduction --- */
const traductions = {
    fr: {
        nav_accueil: "Accueil",
        nav_cv: "Mon CV",
        nav_projets: "Projets",
        nav_contact: "Contact",
        btn_telecharger: "Télécharger CV",
        banniere_salutation: "Bonjour, je suis",
        banniere_role: "Étudiant en Informatique",
        banniere_desc: "Actuellement en 2ème année de BUT Informatique à l'IUT d'Annecy. Je suis à la recherche d'un stage pour approfondir mes connaissances.",
        permis: "Permis B",
        btn_projets: "Voir mes projets",
        btn_contact: "Me contacter",
        nav_cv_titre: "Mon Parcours",
        cv_formation: "Formation",
        titre_but: "BUT Informatique (2ème année)",
        desc_but: "Bachelor Universitaire de Technologie en informatique (En cours).",
        titre_bac: "Baccalauréat Général",
        desc_bac: "Spécialités Mathématiques et Physique-Chimie.",
        cv_experience: "Expérience",
        titre_projet_univ: "Projet Universitaire en Équipe",
        desc_projet_1: "Utilisation de la méthode Agile et diagrammes UML.",
        desc_projet_2: "Création d'un site PHP avec Laravel et conception de la base SQL.",
        titre_job_netto: "Employé de Rayon",
        desc_job_netto_1: "Supervision et organisation des rayons avec le responsable.",
        desc_job_netto_2: "Maintien de l'attractivité et respect des standards.",
        titre_job_basket: "Assistant Coach Basket",
        desc_job_basket_1: "Entraînement d'une équipe de jeunes.",
        desc_job_basket_2: "Préparation des sessions (technique, tactique, physique).",
        cv_competences: "Compétences",
        cat_technique: "Technique",
        cat_systemes: "Systèmes",
        cat_savoir_etre: "Savoir-être",
        soft_skills: "Autonome, dynamique, ponctuel, travail d'équipe.",
        cv_langues: "Langues",
        lang_fr: "Français :",
        niveau_fr: "Langue maternelle",
        lang_en: "Anglais :",
        niveau_en: "B2 (Niveau supérieur)",
        cv_interets: "Intérêts",
        hobby_basket: "Basket (en club)",
        hobby_jeux: "Jeux vidéo (FPS, MOBA...)",
        cv_references: "Références",
        ref_vibrac_role: "Anglais / Coord. International",
        ref_colin_role: "Enseignant UML & SQL",
        nav_projets_titre: "Mes Projets",
        projet_1_desc: "Création d'un site PHP avec Laravel et conception de la base de données SQL.",
        projet_2_titre: "Portfolio Personnel",
        projet_2_desc: "Site web responsive présentant mon parcours et mes compétences.",
        projet_3_titre: "SAE Site Web Club Med",
        projet_3_desc: "Reproduction complète du site du Club Med avec Laravel. Gestion BDD PostgreSQL.",
        btn_savoir_plus: "En savoir plus",
        nav_contact_titre: "Contactez-moi",
        label_tel: "Téléphone",
        label_adresse: "Adresse",
        btn_envoyer: "Envoyer",
        modal_desc: "Description",
        modal_tech: "Langages utilisés",
        modal_contrib: "Contributeurs"
    },
    en: {
        nav_accueil: "Home",
        nav_cv: "Resume",
        nav_projets: "Projects",
        nav_contact: "Contact",
        btn_telecharger: "Download CV",
        banniere_salutation: "Hello, I am",
        banniere_role: "Computer Science Student",
        banniere_desc: "Currently completing my second year of a Bachelor's Degree of Technology in Computer Science at the IUT of Annecy. I am looking for an internship to expand my knowledge.",
        permis: "Car License",
        btn_projets: "See My Projects",
        btn_contact: "Contact Me",
        nav_cv_titre: "My Background",
        cv_formation: "Education",
        titre_but: "BUT Informatique (In progress)",
        desc_but: "Technical Bachelor's Degree in computer science.",
        titre_bac: "French Baccalaureate",
        desc_bac: "High school diploma specialized in mathematics and physics-chemistry.",
        cv_experience: "Work Experience",
        titre_projet_univ: "Team University Project",
        desc_projet_1: "Use of the Agile methodology and UML diagrams.",
        desc_projet_2: "Creation of a PHP website with Laravel and design of its SQL database.",
        titre_job_netto: "Shelf Stocker",
        desc_job_netto_1: "Supervised and organized store shelves in collaboration with the store manager.",
        desc_job_netto_2: "Maintained shelf appeal and ensured compliance with presentation standards.",
        titre_job_basket: "Assistant Basketball Coach",
        desc_job_basket_1: "Coached and trained a youth basketball team.",
        desc_job_basket_2: "Contributed to the preparation of training sessions.",
        cv_competences: "Skills",
        cat_technique: "Technical",
        cat_systemes: "Systems",
        cat_savoir_etre: "Soft Skills",
        soft_skills: "Adaptable, self-sufficient, innovative, dynamic.",
        cv_langues: "Languages",
        lang_fr: "French:",
        niveau_fr: "Native speaker",
        lang_en: "English:",
        niveau_en: "B2 Upper Intermediate",
        cv_interets: "Interests",
        hobby_basket: "Basketball (practicing in club)",
        hobby_jeux: "Video Games (FPS, MOBA...)",
        cv_references: "References",
        ref_vibrac_role: "English Lecturer, International Coordinator",
        ref_colin_role: "UML and SQL teacher",
        nav_projets_titre: "My Projects",
        projet_1_desc: "Creation of a PHP website with Laravel and design of its SQL database.",
        projet_2_titre: "Personal Portfolio",
        projet_2_desc: "Responsive personal website showcasing my skills and background.",
        projet_3_titre: "SAE Club Med Website",
        projet_3_desc: "Complete reproduction of the Club Med website using Laravel. PostgreSQL DB management.",
        btn_savoir_plus: "Learn more",
        nav_contact_titre: "Contact Me",
        label_tel: "Phone",
        label_adresse: "Address",
        btn_envoyer: "Send Message",
        modal_desc: "Description",
        modal_tech: "Technologies used",
        modal_contrib: "Contributors"
    }
};

/* --- 3. Changement de Langue --- */
let langueActuelle = "fr";
const boutonLangue = document.querySelector("#bouton-langue");

if (boutonLangue) {
    boutonLangue.addEventListener("click", () => {
        langueActuelle = langueActuelle === "fr" ? "en" : "fr";
        boutonLangue.textContent = langueActuelle === "fr" ? "EN" : "FR";
        
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const cle = element.getAttribute("data-i18n");
            if (traductions[langueActuelle][cle]) {
                element.textContent = traductions[langueActuelle][cle];
            }
        });
    });
}

/* --- 4. Menu Mobile --- */
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".barre-nav");
const liensMenu = document.querySelectorAll(".liens-nav a"); 

if (hamburger && navBar) {
    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("active");
        const icon = hamburger.querySelector('i');
        if(navBar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    liensMenu.forEach(lien => {
        lien.addEventListener("click", () => {
            navBar.classList.remove("active");
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

/* --- 5. Carrousel --- */
const cartes = document.querySelectorAll('.carte-projet');
const btnPrec = document.querySelector('#btn-prec');
const btnSuiv = document.querySelector('#btn-suiv');
let indexActuel = 0;

function majCarrousel() {
    if (cartes.length === 0) return; 

    cartes.forEach((carte, index) => {
        carte.className = 'carte-projet'; 
        
        if (index === indexActuel) {
            carte.classList.add('active');
        } else if (index === (indexActuel + 1) % cartes.length) {
            carte.classList.add('suivante');
        } else if (index === (indexActuel - 1 + cartes.length) % cartes.length) {
            carte.classList.add('precedente');
        }
    });
}

if (btnSuiv && btnPrec) {
    btnSuiv.addEventListener('click', () => {
        indexActuel = (indexActuel + 1) % cartes.length;
        majCarrousel();
    });

    btnPrec.addEventListener('click', () => {
        indexActuel = (indexActuel - 1 + cartes.length) % cartes.length;
        majCarrousel();
    });
}

majCarrousel();

/* --- 5.5 Recherche et Filtres --- */
const rechercheInput = document.querySelector('#recherche-projets');
const btnsFiltres = document.querySelectorAll('.btn-filtre');
let filtreActif = 'tous';
let termeRecherche = '';

// Données des projets pour la recherche
const projetsDonnees = {
    1: {
        titre: 'SAE Application Nicolas',
        description: 'Application desktop WPF pour la gestion d\'une entreprise de vin.',
        technologies: ['WPF', 'C#', 'PostgreSQL']
    },
    2: {
        titre: 'Portfolio Personnel',
        description: 'Site web responsive présentant mon parcours et mes compétences.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'JS']
    },
    3: {
        titre: 'SAE Site Web Club Med',
        description: 'Reproduction complète du site du Club Med avec Laravel.',
        technologies: ['Laravel', 'PostgreSQL', 'Blade', 'PHP']
    }
};

function appliqueFiltresEtRecherche() {
    let projetsTrouves = 0;
    
    cartes.forEach(carte => {
        const projetId = carte.getAttribute('data-projet-id');
        const donnees = projetsDonnees[projetId];
        
        // Vérifier la recherche
        const texteRecherche = termeRecherche.toLowerCase();
        const titreCorrespond = donnees.titre.toLowerCase().includes(texteRecherche);
        const descriptionCorrespond = donnees.description.toLowerCase().includes(texteRecherche);
        const rechercheOk = texteRecherche === '' || titreCorrespond || descriptionCorrespond;
        
        // Vérifier le filtre
        const filtreOk = filtreActif === 'tous' || donnees.technologies.includes(filtreActif);
        
        // Afficher ou masquer la carte
        if (rechercheOk && filtreOk) {
            carte.classList.remove('hidden');
            projetsTrouves++;
        } else {
            carte.classList.add('hidden');
        }
    });
    
    // Réinitialiser l'index du carrousel si nécessaire
    if (projetsTrouves > 0) {
        indexActuel = 0;
        majCarrouselFiltre();
    }
}

function majCarrouselFiltre() {
    const cartesVisibles = Array.from(cartes).filter(c => !c.classList.contains('hidden'));
    
    if (cartesVisibles.length === 0) return;
    
    cartes.forEach(carte => {
        carte.className = 'carte-projet';
        if (carte.classList.contains('hidden')) return;
        
        const indexVis = cartesVisibles.indexOf(carte);
        
        if (indexVis === indexActuel) {
            carte.classList.add('active');
        } else if (indexVis === (indexActuel + 1) % cartesVisibles.length) {
            carte.classList.add('suivante');
        } else if (indexVis === (indexActuel - 1 + cartesVisibles.length) % cartesVisibles.length) {
            carte.classList.add('precedente');
        }
    });
}

// Événement de recherche
if (rechercheInput) {
    rechercheInput.addEventListener('input', (e) => {
        termeRecherche = e.target.value;
        appliqueFiltresEtRecherche();
    });
}

// Événements des filtres
btnsFiltres.forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        btnsFiltres.forEach(b => b.classList.remove('active'));
        
        // Ajouter la classe active au bouton cliqué
        btn.classList.add('active');
        
        // Mettre à jour le filtre actif
        filtreActif = btn.getAttribute('data-filtre');
        
        // Appliquer les filtres
        appliqueFiltresEtRecherche();
    });
});

// Mettre à jour les boutons du carrousel pour les cartes filtrées
if (btnSuiv && btnPrec) {
    btnSuiv.addEventListener('click', () => {
        const cartesVisibles = Array.from(cartes).filter(c => !c.classList.contains('hidden'));
        if (cartesVisibles.length > 0) {
            indexActuel = (indexActuel + 1) % cartesVisibles.length;
            majCarrouselFiltre();
        }
    });

    btnPrec.addEventListener('click', () => {
        const cartesVisibles = Array.from(cartes).filter(c => !c.classList.contains('hidden'));
        if (cartesVisibles.length > 0) {
            indexActuel = (indexActuel - 1 + cartesVisibles.length) % cartesVisibles.length;
            majCarrouselFiltre();
        }
    });
}

/* --- 6. Scroll Fluide --- */
document.addEventListener('click', function(e) {
    const lien = e.target.closest('a[href^="#"]');
    if (!lien) return;
    
    const href = lien.getAttribute('href');
    if (href === '#' || href === '#modale-projet') return;
    
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (!element) return;
    
    const navBar = document.querySelector('.barre-nav');
    const navHeight = navBar ? navBar.offsetHeight : 0;
    const targetPosition = element.offsetTop - navHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start = null;
    
    function ease(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = ease(progress);
        
        window.scrollTo(0, startPosition + distance * easeProgress);
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
});

/* --- 7. Modale Projet --- */
const donneesProjectes = {
    1: {
        nom: {
            fr: "SAE Application Nicolas",
            en: "SAE Nicolas Application"
        },
        description: {
            fr: "Application de gestion desktop développée pour l'entreprise vinicole Nicolas. Système complet de gestion des stocks de vin, suivi des clients et traitement des commandes. Interface conviviale en WPF avec accès à une base de données PostgreSQL pour assurer la persistance et l'intégrité des données. Projet réalisé en collaboration avec Mateo Bourdin.",
            en: "Desktop management application developed for the Nicolas wine company. Complete wine stock management system, customer tracking, and order processing. User-friendly WPF interface with PostgreSQL database access to ensure data persistence and integrity. Project realized in collaboration with Mateo Bourdin."
        },
        github: "https://github.com/MateoLeVre/SAE201-Dev",
        technologies: ["WPF", "C#", ".NET", "PostgreSQL"],
        contributeurs: ["Kilyan Gibert", "Mateo Bourdin"],
        images: ["image1.jpg"]
    },
    2: {
        nom: {
            fr: "Portfolio Personnel",
            en: "Personal Portfolio"
        },
        description: {
            fr: "Site web responsive conçu pour présenter mon parcours universitaire, mes compétences techniques et mes réalisations. Le site intègre un mode sombre, des animations fluides et un système de traduction dynamique (Français/Anglais). Le code est optimisé en JavaScript Vanilla sans dépendances lourdes pour garantir une performance maximale.",
            en: "Responsive website designed to showcase my university background, technical skills, and achievements. The site integrates a dark mode, fluid animations, and a dynamic translation system (French/English). The code is optimized in Vanilla JavaScript without heavy dependencies to ensure maximum performance."
        },
        github: "https://github.com/abriiiic/portfolio",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        contributeurs: ["Kilyan Gibert"],
        images: ["image1.jpg"]
    },
    3: {
        nom: {
            fr: "SAE Site Web Club Med",
            en: "SAE Club Med Website"
        },
        description: {
            fr: "Projet ambitieux de reproduction du site officiel du Club Med. L'application web gère l'authentification des utilisateurs, la gestion complexe des réservations de séjours, et l'affichage dynamique des activités. Une attention particulière a été portée à la modélisation de la base de données PostgreSQL pour gérer les relations entre les villages, les clients et les disponibilités.",
            en: "Ambitious project reproducing the official Club Med website. The web application manages user authentication, complex stay reservations, and dynamic activity displays. Particular attention was paid to PostgreSQL database modeling to manage relationships between villages, clients, and availability."
        },
        github: "https://github.com/Youpfun/Production-of-the-copy-of-the-club-med-site",
        technologies: ["Laravel", "PHP", "Blade", "PostgreSQL", "CSS"],
        contributeurs: ["Kilyan Gibert", "Achille Dutel", "Mathéïs Gilbrin", "Tristan Gastaldy", "Enzo Pages"],
        images: ["image1.jpg"]
    }
};

const modale = document.querySelector('#modale-projet');
const btnsFermer = document.querySelectorAll('.btn-fermer-modale');

document.querySelectorAll('.btn-modal-projet').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const carte = e.target.closest('.carte-projet');
        const projetId = carte.getAttribute('data-projet-id');
        const donnees = donneesProjectes[projetId];
        
        if (!donnees) return;
        
        document.querySelector('#modal-titre-projet').textContent = donnees.nom[langueActuelle];
        document.querySelector('#modal-description').textContent = donnees.description[langueActuelle];
        document.querySelector('#modal-lien-github').href = donnees.github;
        
        const modalTechs = document.querySelector('#modal-technologies');
        modalTechs.innerHTML = '';
        donnees.technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tag-tech';
            tag.textContent = tech;
            modalTechs.appendChild(tag);
        });
        
        const modalContrib = document.querySelector('#modal-contributeurs');
        modalContrib.innerHTML = '';
        donnees.contributeurs.forEach(contrib => {
            const li = document.createElement('li');
            li.textContent = contrib;
            modalContrib.appendChild(li);
        });
        
        if (donnees.images && donnees.images.length > 0) {
            document.querySelector('#modal-image-principale').src = donnees.images[0];
        }
        
        document.body.classList.add('no-scroll');
        modale.classList.add('active');
    });
});

btnsFermer.forEach(btn => {
    btn.addEventListener('click', () => {
        modale.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

if (modale) {
    modale.addEventListener('click', (e) => {
        if (e.target === modale) {
            modale.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

/* --- 8. Animation au Scroll --- */
const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach(entree => {
        if (entree.isIntersecting) {
            entree.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".cache").forEach((el) => observateur.observe(el));