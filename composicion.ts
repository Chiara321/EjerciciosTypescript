class Hoja {
    numero: number;
    contenido: string;

    constructor(numero: number, contenido: string) {
        this.numero = numero;
        this.contenido = contenido;
    }

    mostrarContenido() {
        console.log(`Hoja ${this.numero}: ${this.contenido}`);
    }
}

class Libro {
    titulo: string;
    autor: string;
    hojas: Hoja[];

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.hojas = [];
    }

    agregarHoja(hoja: Hoja) {
        this.hojas.push(hoja);
    }

    mostrarLibro() {
        console.log(`Libro: ${this.titulo} por ${this.autor}`);
        this.hojas.forEach(hoja => hoja.mostrarContenido());
    }
}

const libro = new Libro('Cien años de soledad', 'Gabriel García Márquez');
libro.agregarHoja(new Hoja(1, 'Muchos años después, frente al pelotón de fusilamiento...'));
libro.agregarHoja(new Hoja(2, 'Aureliano Buendía habría de recordar esa tarde remota en que su padre...'));
libro.mostrarLibro();
