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
        projet_2_desc: "Développement d'une application desktop sous Windows utilisant C#.",
        projet_3_desc: "Site web responsive présentant mon parcours et mes compétences.",
        btn_savoir_plus: "En savoir plus",
        nav_contact_titre: "Contactez-moi",
        label_tel: "Téléphone",
        label_adresse: "Adresse",
        btn_envoyer: "Envoyer"
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
        projet_2_desc: "Development of a desktop application on Windows using C#.",
        projet_3_desc: "Responsive personal website showcasing my skills and background.",
        btn_savoir_plus: "Learn more",
        nav_contact_titre: "Contact Me",
        label_tel: "Phone",
        label_adresse: "Address",
        btn_envoyer: "Send Message"
    }
};

/* --- 3. Logique de Changement de Langue --- */
let langueActuelle = "fr";
const boutonLangue = document.getElementById("bouton-langue");

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

/* --- 4. Menu Mobile (Amélioré) --- */
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".barre-nav");
const liensMenu = document.querySelectorAll(".liens-nav a"); // Sélectionner les liens

if (hamburger && navBar) {
    // Ouvrir / Fermer le menu
    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("active");
        
        // Change l'icône du hamburger (optionnel mais sympa)
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
        lien.addEventListener("click", () => {
            navBar.classList.remove("active");
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

/* --- 5. Logique du Carrousel --- */
const cartes = document.querySelectorAll('.carte-projet');
const btnPrec = document.getElementById('btn-prec');
const btnSuiv = document.getElementById('btn-suiv');
let indexActuel = 0;

function majCarrousel() {
    if (cartes.length === 0) return; // Sécurité si pas de cartes

    cartes.forEach((carte, index) => {
        carte.className = 'carte-projet'; // Réinitialiser les classes
        
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

/* --- 7. Gestion de la Modale Projet --- */

// Données détaillées des projets
const donneesProjectes = {
    1: {
        nom: "SAE Application Nicolas",
        description: "Application de gestion desktop développée pour l'entreprise vinicole Nicolas. Système complet de gestion des stocks de vin, suivi des clients et traitement des commandes. Interface conviviale en WPF avec accès à une base de données PostgreSQL pour assurer la persistance et l'intégrité des données. Projet réalisé en collaboration avec Mateo Bourdin.",
        github: "https://github.com/MateoLeVre/SAE201-Dev",
        technologies: ["WPF", "C#", ".NET", "PostgreSQL"],
        contributeurs: ["Kilyan Gibert", "Mateo Bourdin"],
        images: ["image1.jpg", "image2.jpg", "image3.jpg"]
    },
    2: {
        nom: "Application C#",
        description: "Application desktop pour la gestion de projets avec interface moderne. Intégration base de données SQL Server et système de notifications en temps réel. Développée avec WPF pour une expérience utilisateur optimale.",
        github: "https://github.com/abriiiic/csharp-app",
        technologies: ["C#", ".NET", "WPF", "SQL Server"],
        contributeurs: ["Kilyan Gibert"],
        images: ["image1.jpg", "image2.jpg", "image3.jpg"]
    },
    3: {
        nom: "Portfolio Personnel",
        description: "Site web responsive présentant mon parcours, mes compétences et mes projets. Design moderne avec animations fluides et dark mode. Développé avec HTML5, CSS3 et JavaScript vanilla pour une performance optimale.",
        github: "https://github.com/abriiiic/portfolio",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        contributeurs: ["Kilyan Gibert"],
        images: ["image1.jpg", "image2.jpg", "image3.jpg"]
    }
};

const modale = document.getElementById('modale-projet');
const btnsFermer = document.querySelectorAll('.btn-fermer-modale');
const btnsModalProjet = document.querySelectorAll('.btn-modal-projet');

// Ouvrir la modale
btnsModalProjet.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projetId = btn.getAttribute('data-projet-id');
        ouvrirModale(projetId);
    });
});

// Fermer la modale
btnsFermer.forEach(btn => {
    btn.addEventListener('click', fermerModale);
});

// Fermer la modale en cliquant en dehors
modale.addEventListener('click', (e) => {
    if (e.target === modale) {
        fermerModale();
    }
});

function ouvrirModale(projetId) {
    const donnees = donneesProjectes[projetId];
    if (!donnees) return;

    // Remplir les données
    document.getElementById('modal-titre-projet').textContent = donnees.nom;
    document.getElementById('modal-description').textContent = donnees.description;
    document.getElementById('modal-lien-github').href = donnees.github;

    // Remplir les technologies
    const modalTechs = document.getElementById('modal-technologies');
    modalTechs.innerHTML = '';
    donnees.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag-tech';
        tag.textContent = tech;
        modalTechs.appendChild(tag);
    });

    // Remplir les contributeurs
    const modalContrib = document.getElementById('modal-contributeurs');
    modalContrib.innerHTML = '';
    donnees.contributeurs.forEach(contrib => {
        const li = document.createElement('li');
        li.textContent = contrib;
        modalContrib.appendChild(li);
    });

    // Remplir les images
    if (donnees.images.length > 0) {
        document.getElementById('modal-image-principale').src = donnees.images[0];
        
        const miniatures = document.querySelector('.miniatures');
        miniatures.innerHTML = '';
        donnees.images.forEach((img, index) => {
            const vignette = document.createElement('img');
            vignette.className = 'vignette';
            vignette.src = img;
            vignette.alt = `Image ${index + 1}`;
            vignette.addEventListener('click', () => {
                document.getElementById('modal-image-principale').src = img;
            });
            miniatures.appendChild(vignette);
        });
    }

    modale.classList.add('active');
}

function fermerModale() {
    modale.classList.remove('active');
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