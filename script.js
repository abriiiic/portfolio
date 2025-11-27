/*  Menu Déroulant Téléchargement CV */
const boutonTelechargerCV = document.querySelector('#btn-telecharger-cv');
const menuDeroulantCV = document.querySelector('.dropdown-cv');

if (boutonTelechargerCV && menuDeroulantCV) {
    boutonTelechargerCV.addEventListener('click', (e) => {
        e.stopPropagation();
        menuDeroulantCV.classList.toggle('active');
    });

    document.querySelectorAll('.option-cv').forEach(option => {
        option.addEventListener('click', () => {
            menuDeroulantCV.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-cv')) {
            menuDeroulantCV.classList.remove('active');
        }
    });
}

/* Dictionnaire de Traduction */
const traductions = {
    fr: {
        nav_accueil: "Accueil",
        nav_cv: "Mon CV",
        nav_projets: "Projets",
        nav_contact: "Contact",
        btn_telecharger: "Télécharger CV",
        cv_fr: "CV Français",
        cv_en: "CV Anglais",
        banniere_salutation: "Bonjour, je suis",
        banniere_role: "Étudiant en Informatique",
        banniere_desc: "Actuellement en 2ème année de BUT Informatique à l'IUT d'Annecy. Je suis à la recherche d'un stage pour approfondir mes connaissances.",
        permis: "Permis B",
        btn_projets: "Voir mes projets",
        btn_contact: "Me contacter",
        cv_formation: "Formation",
        date_but: "2024 - Présent",
        titre_but: "BUT Informatique (2ème année)",
        desc_but: "Bachelor Universitaire de Technologie en informatique (En cours).",
        titre_bac: "Baccalauréat Général",
        desc_bac: "Spécialités Mathématiques et Physique-Chimie.",
        cv_experience: "Expérience",
        titre_projet_univ: "Projet Universitaire en Équipe",
        desc_projet_1: "Utilisation de la méthode Agile et diagrammes UML.",
        desc_projet_2: "Création d'un site PHP avec Laravel et conception de la base SQL.",
        date_ete_2025: "Juillet - Août 2025",
        titre_job_netto: "Employé de Rayon",
        desc_job_netto_1: "Supervision et organisation des rayons avec le responsable.",
        desc_job_netto_2: "Maintien de l'attractivité et respect des standards.",
        titre_job_basket: "Assistant Coach Basket",
        desc_job_basket_1: "Entraînement d'une équipe de jeunes.",
        desc_job_basket_2: "Préparation des sessions (technique, tactique, physique).",
        cv_competences: "Compétences",
        cat_technique: "Technique",
        cat_systemes: "Systèmes",
        cv_references: "Références",
        ref_vibrac_role: "Anglais / Coord. International",
        ref_colin_role: "Enseignant UML & SQL",
        cv_interets: "Intérêts",
        hobby_basket: "Basket (en club)",
        hobby_jeux: "Jeux vidéo (FPS, MOBA...)",
        cv_langues: "Langues",
        lang_fr: "Français :",
        niveau_fr: "Langue maternelle",
        lang_en: "Anglais :",
        niveau_en: "B2 (Niveau supérieur)",
        nav_projets_titre: "Mes Projets",
        search_projects: "Rechercher un projet...",
        filtre_tous: "Tous",
        projet_1_desc_courte: "Application desktop WPF pour la gestion d'une entreprise de vin.",
        projet_2_titre: "Portfolio Personnel",
        projet_2_desc_courte: "Site web responsive présentant mon parcours et mes compétences.",
        projet_3_titre: "SAE Site Web Club Med",
        projet_3_desc_courte: "Reproduction complète du site du Club Med avec Laravel.",
        btn_savoir_plus: "En savoir plus",
        nav_contact_titre: "Contactez-moi",
        titre_coordonnees: "Mes Coordonnées",
        label_tel: "Téléphone",
        label_adresse: "Adresse",
        label_linkedin: "LinkedIn",
        label_github: "GitHub",
        form_nom: "Nom / Prénom",
        form_email: "Email",
        form_message: "Message",
        btn_envoyer: "Envoyer",
        footer_droits: "© 2025 Kilyan Gibert. Tous droits réservés.",
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
        cv_fr: "French Resume",
        cv_en: "English Resume",
        banniere_salutation: "Hello, I am",
        banniere_role: "Computer Science Student",
        banniere_desc: "Currently completing my second year of a University Bachelor of Technology in Computer Science at the IUT of Annecy. I am looking for an internship to expand my knowledge.",
        permis: "Driving License",
        btn_projets: "See My Projects",
        btn_contact: "Contact Me",
        cv_formation: "Education",
        date_but: "2024 - Present",
        titre_but: "BUT Informatique (In progress)",
        desc_but: "University Bachelor of Technology in Computer Science.",
        titre_bac: "French Baccalaureate",
        desc_bac: "High school diploma specialized in mathematics and physics-chemistry.",
        cv_experience: "Work Experience",
        titre_projet_univ: "Team University Project",
        desc_projet_1: "Use of the Agile methodology and UML diagrams.",
        desc_projet_2: "Creation of a PHP website with Laravel and design of its SQL database.",
        date_ete_2025: "July - August 2025",
        titre_job_netto: "Shelf Stocker",
        desc_job_netto_1: "Supervised and organized store shelves in collaboration with the manager.",
        desc_job_netto_2: "Maintained shelf appeal and ensured compliance with presentation standards.",
        titre_job_basket: "Assistant Basketball Coach",
        desc_job_basket_1: "Coached and trained a youth basketball team.",
        desc_job_basket_2: "Contributed to the preparation of training sessions.",
        cv_competences: "Skills",
        cat_technique: "Technical",
        cat_systemes: "Systems",
        cv_references: "References",
        ref_vibrac_role: "English Lecturer, Int. Coordinator",
        ref_colin_role: "UML and SQL Teacher",
        cv_interets: "Interests",
        hobby_basket: "Basketball (club player)",
        hobby_jeux: "Video Games (FPS, MOBA...)",
        cv_langues: "Languages",
        lang_fr: "French:",
        niveau_fr: "Native speaker",
        lang_en: "English:",
        niveau_en: "B2 Upper Intermediate",
        nav_projets_titre: "My Projects",
        search_projects: "Search for a project...",
        filtre_tous: "All",
        projet_1_desc_courte: "Desktop WPF application for managing a wine company.",
        projet_2_titre: "Personal Portfolio",
        projet_2_desc_courte: "Responsive personal website showcasing my skills and background.",
        projet_3_titre: "SAE Club Med Website",
        projet_3_desc_courte: "Complete reproduction of the Club Med website using Laravel.",
        btn_savoir_plus: "Learn more",
        nav_contact_titre: "Contact Me",
        titre_coordonnees: "My Contact Details",
        label_tel: "Phone",
        label_adresse: "Address",
        label_linkedin: "LinkedIn",
        label_github: "GitHub",
        form_nom: "Name",
        form_email: "Email",
        form_message: "Message",
        btn_envoyer: "Send Message",
        footer_droits: "© 2025 Kilyan Gibert. All rights reserved.",
        modal_desc: "Description",
        modal_tech: "Technologies used",
        modal_contrib: "Contributors"
    }
};

/* Changement de Langue */
let langueActuelle = "fr";
const boutonLangue = document.querySelector("#bouton-langue");

if (boutonLangue) {
    boutonLangue.addEventListener("click", () => {
        langueActuelle = langueActuelle === "fr" ? "en" : "fr";
        boutonLangue.textContent = langueActuelle === "fr" ? "EN" : "FR";
        
        // Traduction des textes génériques
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const cle = element.getAttribute("data-i18n");
            if (traductions[langueActuelle][cle]) {
                element.textContent = traductions[langueActuelle][cle];
            }
        });

        // Traduction des placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
            const cle = element.getAttribute("data-i18n-placeholder");
            if (traductions[langueActuelle][cle]) {
                element.placeholder = traductions[langueActuelle][cle];
            }
        });

        const modale = document.querySelector('#modale-projet');
        if (modale.classList.contains('active')) {
        }
    });
}

/* Menu Mobile */
const hamburger = document.querySelector(".hamburger");
const barreNav = document.querySelector(".barre-nav");
const liensMenu = document.querySelectorAll(".liens-nav a"); 

if (hamburger && barreNav) {
    hamburger.addEventListener("click", () => {
        barreNav.classList.toggle("active");
        const icone = hamburger.querySelector('i');
        if(barreNav.classList.contains('active')) {
            icone.classList.remove('fa-bars');
            icone.classList.add('fa-times');
        } else {
            icone.classList.remove('fa-times');
            icone.classList.add('fa-bars');
        }
    });

    liensMenu.forEach(lien => {
        lien.addEventListener("click", () => {
            barreNav.classList.remove("active");
            const icone = hamburger.querySelector('i');
            if (icone) {
                icone.classList.remove('fa-times');
                icone.classList.add('fa-bars');
            }
        });
    });
}

/* Données des Projets */
const catalogueProjets = {
    1: {
        titre: { fr: "SAE Application Nicolas", en: "SAE Nicolas Application" },
        description: {
            fr: "Application de gestion desktop développée pour l'entreprise vinicole Nicolas. Système complet de gestion des stocks de vin, suivi des clients et traitement des commandes. Interface conviviale en WPF avec accès à une base de données PostgreSQL pour assurer la persistance et l'intégrité des données. Projet réalisé en collaboration avec Mateo Bourdin.",
            en: "Desktop management application developed for the Nicolas wine company. Complete wine stock management system, customer tracking, and order processing. User-friendly WPF interface with PostgreSQL database access to ensure data persistence and integrity. Project realized in collaboration with Mateo Bourdin."
        },
        descriptionCourte: {
             fr: "Application desktop WPF pour la gestion d'une entreprise de vin.",
             en: "Desktop WPF application for managing a wine company."
        },
        github: "https://github.com/MateoLeVre/SAE201-Dev",
        technologies: ["WPF", "C#", ".NET", "PostgreSQL"],
        contributeurs: ["Kilyan Gibert", "Mateo Bourdin"],
        images: ["rechercheVin.png", "fichedétail.png", "Client.png"]
    },
    2: {
        titre: { fr: "Portfolio Personnel", en: "Personal Portfolio" },
        description: {
            fr: "Site web responsive conçu pour présenter mon parcours universitaire, mes compétences techniques et mes réalisations. Le site intègre un mode sombre, des animations fluides et un système de traduction dynamique (Français/Anglais). Le code est optimisé en JavaScript Vanilla sans dépendances lourdes pour garantir une performance maximale.",
            en: "Responsive website designed to showcase my university background, technical skills, and achievements. The site integrates a dark mode, fluid animations, and a dynamic translation system (French/English). The code is optimized in Vanilla JavaScript without heavy dependencies to ensure maximum performance."
        },
        descriptionCourte: {
            fr: "Site web responsive présentant mon parcours et mes compétences.",
            en: "Responsive personal website showcasing my skills and background."
        },
        github: "https://github.com/abriiiic/portfolio",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "JS"],
        contributeurs: ["Kilyan Gibert"],
        images: [] 
    },
    3: {
        titre: { fr: "SAE Site Web Club Med", en: "SAE Club Med Website" },
        description: {
            fr: "Projet ambitieux de reproduction du site officiel du Club Med. L'application web gère l'authentification des utilisateurs, la gestion complexe des réservations de séjours, et l'affichage dynamique des activités. Une attention particulière a été portée à la modélisation de la base de données PostgreSQL pour gérer les relations entre les villages, les clients et les disponibilités.",
            en: "Ambitious project reproducing the official Club Med website. The web application manages user authentication, complex stay reservations, and dynamic activity displays. Particular attention was paid to PostgreSQL database modeling to manage relationships between villages, clients, and availability."
        },
        descriptionCourte: {
            fr: "Reproduction complète du site du Club Med avec Laravel.",
            en: "Complete reproduction of the Club Med website using Laravel."
        },
        github: "https://github.com/Youpfun/Production-of-the-copy-of-the-club-med-site",
        technologies: ["Laravel", "PHP", "Blade", "PostgreSQL", "CSS"],
        contributeurs: ["Kilyan Gibert", "Achille Dutel", "Mathéïs Gilbrin", "Tristan Gastaldy", "Enzo Pages"],
        images: ["encours.jpg"]
    }
};

/* Carrousel et Filtres*/
const conteneurCarrousel = document.querySelector('.conteneur-carrousel');
const toutesLesCartes = document.querySelectorAll('.carte-projet');
const boutonPrecedent = document.querySelector('#btn-prec');
const boutonSuivant = document.querySelector('#btn-suiv');
const inputRecherche = document.querySelector('#recherche-projets');
const boutonsFiltres = document.querySelectorAll('.btn-filtre');

let indexActuel = 0;
let filtreActif = 'tous';
let termeRecherche = '';

function mettreAJourCarrousel() {
    const cartesVisibles = Array.from(toutesLesCartes).filter(carte => !carte.classList.contains('hidden'));

    toutesLesCartes.forEach(carte => {
        carte.classList.remove('active', 'suivante', 'precedente');
    });

    if (cartesVisibles.length === 0) return;

    if (indexActuel >= cartesVisibles.length) {
        indexActuel = 0;
    }

    cartesVisibles[indexActuel].classList.add('active');

    if (cartesVisibles.length > 1) {
        const indexSuivant = (indexActuel + 1) % cartesVisibles.length;
        const indexPrecedent = (indexActuel - 1 + cartesVisibles.length) % cartesVisibles.length;

        cartesVisibles[indexSuivant].classList.add('suivante');
        cartesVisibles[indexPrecedent].classList.add('precedente');
    }
}

function appliquerFiltres() {
    toutesLesCartes.forEach(carte => {
        const projetId = carte.getAttribute('data-projet-id');
        const donnees = catalogueProjets[projetId];
        
        if (!donnees) return;

        const texte = termeRecherche.toLowerCase();
        // Recherche dans le titre et la description (en français pour simplifier la logique de recherche ici)
        const matchTexte = texte === '' || 
                           donnees.titre.fr.toLowerCase().includes(texte) || 
                           donnees.description.fr.toLowerCase().includes(texte);

        const matchFiltre = filtreActif === 'tous' || donnees.technologies.includes(filtreActif);

        if (matchTexte && matchFiltre) {
            carte.classList.remove('hidden');
            carte.classList.remove('filtering');
        } else {
            carte.classList.add('hidden');
            carte.classList.add('filtering');
        }
    });

    indexActuel = 0;
    mettreAJourCarrousel();
}

if (boutonSuivant && boutonPrecedent) {
    boutonSuivant.addEventListener('click', () => {
        const cartesVisibles = document.querySelectorAll('.carte-projet:not(.hidden)');
        if (cartesVisibles.length > 0) {
            indexActuel = (indexActuel + 1) % cartesVisibles.length;
            mettreAJourCarrousel();
        }
    });

    boutonPrecedent.addEventListener('click', () => {
        const cartesVisibles = document.querySelectorAll('.carte-projet:not(.hidden)');
        if (cartesVisibles.length > 0) {
            indexActuel = (indexActuel - 1 + cartesVisibles.length) % cartesVisibles.length;
            mettreAJourCarrousel();
        }
    });
}

if (inputRecherche) {
    inputRecherche.addEventListener('input', (e) => {
        termeRecherche = e.target.value.trim();
        appliquerFiltres();
    });
}

boutonsFiltres.forEach(btn => {
    btn.addEventListener('click', () => {
        boutonsFiltres.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtreActif = btn.getAttribute('data-filtre');
        appliquerFiltres();
    });
});

mettreAJourCarrousel();

/* Scroll Fluide */
document.addEventListener('click', function(e) {
    const lien = e.target.closest('a[href^="#"]');
    if (!lien) return;
    
    const href = lien.getAttribute('href');
    if (href === '#' || href === '#modale-projet') return;
    
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (!element) return;
    
    const navBar = document.querySelector('.barre-nav');
    const hauteurNav = navBar ? navBar.offsetHeight : 0;
    const positionCible = element.offsetTop - hauteurNav;
    const positionDepart = window.scrollY;
    const distance = positionCible - positionDepart;
    const duree = 1200;
    let depart = null;
    
    function ease(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    function animation(tempsActuel) {
        if (depart === null) depart = tempsActuel;
        const ecoule = tempsActuel - depart;
        const progression = Math.min(ecoule / duree, 1);
        const progressionEase = ease(progression);
        
        window.scrollTo(0, positionDepart + distance * progressionEase);
        
        if (progression < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
});

/* Modale Projet */
const modale = document.querySelector('#modale-projet');
const boutonsFermer = document.querySelectorAll('.btn-fermer-modale');

document.querySelectorAll('.btn-modal-projet').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const carte = e.target.closest('.carte-projet');
        const projetId = carte.getAttribute('data-projet-id');
        const donnees = catalogueProjets[projetId];
        
        if (!donnees) return;
        
        document.querySelector('#modal-titre-projet').textContent = donnees.titre[langueActuelle];
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
        
        // Gestion des images
        const imgPrincipale = document.querySelector('#modal-image-principale');
        const containerMiniatures = document.querySelector('.miniatures');
        
        containerMiniatures.innerHTML = '';
        
        if (donnees.images && donnees.images.length > 0) {
            imgPrincipale.src = donnees.images[0];
            imgPrincipale.style.display = 'block';

            donnees.images.forEach((srcImg, index) => {
                const vignette = document.createElement('img');
                vignette.src = srcImg;
                vignette.className = 'vignette';
                
                if (index === 0) {
                    vignette.classList.add('active');
                }
                
                vignette.addEventListener('click', () => {
                    imgPrincipale.src = srcImg;
                    document.querySelectorAll('.vignette').forEach(v => v.classList.remove('active'));
                    vignette.classList.add('active');
                });
                
                containerMiniatures.appendChild(vignette);
            });
        } else {
            imgPrincipale.style.display = 'none';
        }
        
        document.body.classList.add('no-scroll');
        modale.classList.add('active');
    });
});

boutonsFermer.forEach(btn => {
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

/* Animation Scroll  */
const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach(entree => {
        if (entree.isIntersecting) {
            entree.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".cache").forEach((el) => observateur.observe(el));