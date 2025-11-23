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
        // NOUVELLES TRADUCTIONS POUR LA MODALE
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
        // NEW MODAL TRANSLATIONS
        modal_desc: "Description",
        modal_tech: "Technologies used",
        modal_contrib: "Contributors"
    }
};

/* --- 3. Logique de Changement de Langue --- */
let langueActuelle = "fr";
const boutonLangue = document.querySelector("#bouton-langue");

if (boutonLangue) {
    boutonLangue.addEventListener("click", () => {
        // Basculer la langue
        langueActuelle = langueActuelle === "fr" ? "en" : "fr";
        
        // Mettre à jour le texte du bouton
        boutonLangue.textContent = langueActuelle === "fr" ? "EN" : "FR";
        
        // Appliquer les traductions
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const cle = element.getAttribute("data-i18n");
            // Vérifier si la traduction existe pour éviter les erreurs
            if (traductions[langueActuelle][cle]) {
                element.textContent = traductions[langueActuelle][cle];
            }
        });
    });
}

/* --- 4. Menu Mobile (Amélioré) --- */
const hamburger = document.querySelector(".menu-burger");
const navBar = document.querySelector(".barre-navigation");
const liensMenu = document.querySelectorAll(".liens-navigation a"); 

if (hamburger && navBar) {
    // Ouvrir / Fermer le menu
    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("active");
        
        // Change l'icône du hamburger
        const icon = hamburger.querySelector('i');
        if(navBar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fermer le menu quand on clique sur un lien
    liensMenu.forEach(lien => {
        lien.addEventListener("click", (e) => {
            // Fermer le menu mobile
            navBar.classList.remove("active");
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Gérer le scroll fluide
            const href = lien.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    // Ajouter un petit délai pour fermer le menu avant de scroller
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        });
    });
}

/* --- 5. Menu Déroulant Télécharger CV --- */
const btnTelechargerCV = document.querySelector('#btn-telecharger-cv');
const dropdownCV = document.querySelector('.menu-deroulant-cv');
const optionsCV = document.querySelectorAll('.option-telecharger');

if (btnTelechargerCV && dropdownCV) {
    // Ouvrir/Fermer le menu en cliquant sur le bouton
    btnTelechargerCV.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownCV.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur une option
    optionsCV.forEach(option => {
        option.addEventListener('click', () => {
            dropdownCV.classList.remove('active');
        });
    });

    // Fermer le menu quand on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!btnTelechargerCV.contains(e.target) && !dropdownCV.contains(e.target)) {
            dropdownCV.classList.remove('active');
        }
    });
}

/* --- 5. Logique du Carrousel --- */
const cartes = document.querySelectorAll('.carte-portfolio');
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

// Initialiser le carrousel au chargement
majCarrousel();

/* --- 6. Smooth Scroll pour les Boutons d'Action --- */
document.querySelectorAll('a[href^="#"]').forEach(lien => {
    // Exclure les liens du menu (déjà traités)
    if (!lien.classList.contains('btn-modal-projet')) {
        lien.addEventListener('click', (e) => {
            const href = lien.getAttribute('href');
            if (href && href !== '#') {
                const element = document.querySelector(href);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }
});

/* --- 7. Gestion de la Modale Projet --- */

// NOUVELLE STRUCTURE DE DONNÉES (FR & EN)
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

const modale = document.querySelector('#fenetre-portfolio');
const btnsFermer = document.querySelectorAll('.bouton-fermer');

function attachModalEvents() {
    document.querySelectorAll('.btn-modal-projet').forEach(btn => {
        btn.removeEventListener('click', handleModalClick); 
        btn.addEventListener('click', handleModalClick);
    });
}

function handleModalClick(e) {
    e.preventDefault();
    const carte = e.target.closest('.carte-portfolio');
    const projetId = carte.getAttribute('data-projet-id');
    ouvrirModale(projetId);
}

// Appeler cette fonction au chargement
attachModalEvents();

// Fermer la modale
btnsFermer.forEach(btn => {
    btn.addEventListener('click', fermerModale);
});

if (modale) {
    modale.addEventListener('click', (e) => {
        if (e.target === modale) {
            fermerModale();
        }
    });
}

function ouvrirModale(projetId) {
    const donnees = donneesProjectes[projetId];
    if (!donnees) return;

    // SÉLECTION DE LA LANGUE (fr ou en)
    document.querySelector('#modal-titre-projet').textContent = donnees.nom[langueActuelle];
    document.querySelector('#modal-description').textContent = donnees.description[langueActuelle];
    document.querySelector('#modal-lien-github').href = donnees.github;

    // Technologies
    const modalTechs = document.querySelector('#modal-technologies');
    modalTechs.innerHTML = '';
    donnees.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag-tech';
        tag.textContent = tech;
        modalTechs.appendChild(tag);
    });

    // Contributeurs (Alignement géré par CSS flex)
    const modalContrib = document.querySelector('#modal-contributeurs');
    modalContrib.innerHTML = '';
    donnees.contributeurs.forEach(contrib => {
        const li = document.createElement('li');
        li.textContent = contrib;
        modalContrib.appendChild(li);
    });

    // Images
    if (donnees.images && donnees.images.length > 0) {
        document.querySelector('#modal-image-principale').src = donnees.images[0];
    }

    // Désactiver le scroll du body
    document.body.classList.add('no-scroll');
    
    modale.classList.add('active');
}

function fermerModale() {
    if (modale) {
        modale.classList.remove('active');
        // Réactiver le scroll du body
        document.body.classList.remove('no-scroll');
    }
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

