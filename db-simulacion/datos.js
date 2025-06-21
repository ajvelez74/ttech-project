
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Desarrollo Web", descripcion: "Cursos sobre tecnologías para el desarrollo web", imagen: "img/cat101.jpeg" },
    "102" : { codigo: "102", nombre: "Lenguajes de Programación", descripcion: "Cursos de programación en diferentes lenguajes", imagen: "img/cat102.jpg"  },
    "103" : { codigo: "103", nombre: "Bases de Datos", descripcion: "Cursos sobre bases de datos y SQL", imagen: "img/cat103.jpeg"  },
    "104" : { codigo: "104", nombre: "Metodología de Desarrollo", descripcion: "Cursos sobre metodologías ágiles y de desarrollo de software", imagen: "img/cat103.jpeg"  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

// Inicialización de banners en localStorage
banners = {
    "101" : { codigo: "101", titulo: "Introducción a la Programación", subtitulo: "", 
              descripcion: "Antes de empezar a utilizar un lenguajes de programación, es imporante que aprendas a resolver problemas y a pensar como un programador. Este curso te ayudará a desarrollar esas habilidades fundamentales.", 
              imagen: "img/ban101.png" },
    "102" : { codigo: "102", titulo: "Tecnologías Web", subtitulo: "", 
              descripcion: "Las tecnologías web son esenciales para el desarrollo de aplicaciones modernas. En este curso aprenderás HTML, CSS y JavaScript, las bases del desarrollo web.", 
              imagen: "img/ban102.png" },
    "103" : { codigo: "103", titulo: "Fundamentos en Python", subtitulo: "", 
              descripcion: "Python es un lenguaje de programación versátil y fácil de aprender. Este curso te enseñará los fundamentos de Python, desde la sintaxis básica hasta conceptos más avanzados.", 
              imagen: "img/ban103.png" },
};

localStorage.setItem("banners", JSON.stringify(banners));

// Inicialización de cursos en localStorage
cursos = {
    "1011" : { codigo: "1011", nombre: "Curso de HTML", descripcion: "Aprende los conceptos básicos de HTML.", 
              categoria: "101", imagen: "img/cur1011.jpg", precio: 29.99, duracion: "4 semanas", clasificacion: 4,
              contenido: ["Introducción a HTML", "Estructura de un documento HTML", "Etiquetas y atributos", "Listas y tablas", "Formularios"] },
    "1012" : { codigo: "1012", nombre: "Curso de CSS", descripcion: "Aprende a personilzar tus páginas web con CSS.", 
              categoria: "101", imagen: "img/cur1012.png", precio: 29.99, duracion: "4 semanas", clasificacion: 4,
            contenido: ["Introducción a CSS", "Selectores y propiedades", "Colores y fuentes", "Diseño de cajas", "Flexbox y Grid"]  },

    "1020" : { codigo: "1020", nombre: "Curso de Introducción a la Programación", descripcion: "Aprende a resolver problemas para luego implementarlos en un lenguaje de programación.", 
              categoria: "102", imagen: "img/cur1020.png", precio: 39.99, duracion: "6 semanas" , clasificacion: 5 ,
            contenido: ["Introducción a la programación", "Resolviendo problemas", "Funciones", "Toma de decisiones", "procesos repetitivos", "Gestión de la información"] },
    "1021" : { codigo: "1021", nombre: "Curso de JavaScript", descripcion: "Domina JavaScript para el desarrollo web interactivo.", 
              categoria: "102", imagen: "img/cur1021.png", precio: 39.99, duracion: "6 semanas" , clasificacion: 3 ,
            contenido: ["Introducción a JavaScript", "Sintaxis y operadores", "Estructuras de control", "Funciones y eventos", "Manipulación del DOM"] },
    "1022" : { codigo: "1022", nombre: "Curso de Python para Principiantes", descripcion: "Introducción a la programación con Python.", 
              categoria: "102", imagen: "img/cur1022.png", precio: 29.99, duracion: "5 semanas" , clasificacion: 3 ,
            contenido: ["Introducción a Python", "Sintaxis básica", "Estructuras de control", "Funciones y módulos", "Manejo de errores"] },

    "1030" : { codigo: "1030", nombre: "Curso de Diseño de Bases de Datos Relacionales", descripcion: "Aprende los fundamentos del diseño de bases de datos relacionales.", 
              categoria: "103", imagen: "img/cur104.jpg", precio: 19.99, duracion: "3 semanas" , clasificacion: 3 ,
              contenido: ["Introducción a bases de datos", "Modelo entidad-relación", "Normalización", "Diseño de tablas", "Consultas SQL básicas"] },
    "1031" : { codigo: "1031", nombre: "Curso de SQL Básico", descripcion: "Aprende los fundamentos de bases de datos y SQL estándar.", 
              categoria: "103", imagen: "img/cur104.jpg", precio: 34.99, duracion: "3 semanas" , clasificacion: 3 ,
              contenido: ["Introducción a SQL", "Consultas SELECT", "Filtrado de datos", "Ordenación y agrupación", "Funciones de agregación"] },
    "1032" : { codigo: "1032", nombre: "Curso de MySQL", descripcion: "Aprende a diseñar, implementar y gestionar bases de datos en MySQL.", 
              categoria: "103", imagen: "img/cur104.jpg", precio: 59.99, duracion: "6 semanas" , clasificacion: 4 ,
              contenido: ["Introducción a MySQL", "Instalación y configuración", "Consultas avanzadas", "Gestión de usuarios y permisos", "Optimización de consultas"] },
    "1033" : { codigo: "1033", nombre: "Curso de PostgreSQL", descripcion: "Aprende a diseñar, implementar y gestionar bases de datos en PostgreSQL.", 
              categoria: "103", imagen: "img/cur104.jpg", precio: 59.99, duracion: "6 semanas" , clasificacion: 4 ,
              contenido: ["Introducción a PostgreSQL", "Instalación y configuración", "Consultas avanzadas", "Gestión de usuarios y permisos", "Optimización de consultas"] },
    "1034" : { codigo: "1034", nombre: "Curso de MongoDB", descripcion: "Aprende sobre bases de datos NoSQL y gestionar bases de datos en MongoDB.", 
              categoria: "103", imagen: "img/cur104.jpg", precio: 59.99, duracion: "3 semanas" , clasificacion: 4 ,
              contenido: ["Introducción a MongoDB", "Instalación y configuración", "Consultas básicas", "Gestión de colecciones y documentos", "Indexación y rendimiento"] },

    "1041" : { codigo: "1041", nombre: "Curso de Scrum", descripcion: "Aprende sobre la metodología ágil Scrum para el desarrollo de software.", 
              categoria: "104", imagen: "img/cur104.jpg", precio: 59.99, duracion: "4 semanas" , clasificacion: 4 ,
              contenido: ["Introducción a Scrum", "Roles en Scrum", "Eventos de Scrum", "Artefactos de Scrum", "Implementación de Scrum"] },

    "9011" : { codigo: "9010", nombre: "Curso de HTML y CSS", descripcion: "Aprende a crear páginas web con HTML y CSS.", 
              categoria: "101", imagen: "img/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5 ,
            contenido: ["Curso de HTML", "Curso de CSS"]},
    "9012" : { codigo: "9020", nombre: "Curso de HTML, CSS y JavaScript", descripcion: "Aprende a crear páginas web con HTML y CSS.", 
              categoria: "101", imagen: "img/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5 ,
            contenido: ["Curso de HTML", "Curso de CSS", "Curso de JavaScript"]},
    "9021" : { codigo: "9010", nombre: "Introducción a la Programación e Implementación en JavaScript", descripcion: "Aprende resolver problemas para luego implementarlos en JavaScript.", 
              categoria: "102", imagen: "img/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5 ,
            contenido: ["Curso de Introducción a la Programación", "Curso de JavaScript"]},
    "9022" : { codigo: "9020", nombre: "Introducción a la Programación e Implementación en Python", descripcion: "Aprende resolver problemas para luego implementarlos en Python.", 
              categoria: "102", imagen: "img/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5 ,
            contenido: ["Curso de Introducción a la Programación", "Curso de Python"]  },
};

localStorage.setItem("cursos", JSON.stringify(cursos));


