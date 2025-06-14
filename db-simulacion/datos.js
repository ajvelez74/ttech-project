
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Desarrollo Web", descripcion: "Cursos sobre tecnologías para el desarrollo web", imagen: "img/cat101.jpeg" },
    "102" : { codigo: "102", nombre: "Lenguajes de Programación", descripcion: "Cursos de programación en diferentes lenguajes", imagen: "img/cat102.jpg"  },
    "103" : { codigo: "104", nombre: "Bases de Datos", descripcion: "Cursos sobre bases de datos y SQL", imagen: "img/cat103.jpeg"  },
    "104" : { codigo: "103", nombre: "Metodología de Desarrollo", descripcion: "Cursos sobre metodologías ágiles y de desarrollo de software", imagen: "img/cat103.jpeg"  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));


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
