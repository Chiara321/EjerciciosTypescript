var Hoja = /** @class */ (function () {
    function Hoja(numero, contenido) {
        this.numero = numero;
        this.contenido = contenido;
    }
    Hoja.prototype.mostrarContenido = function () {
        console.log("Hoja ".concat(this.numero, ": ").concat(this.contenido));
    };
    return Hoja;
}());
var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.hojas = [];
    }
    Libro.prototype.agregarHoja = function (hoja) {
        this.hojas.push(hoja);
    };
    Libro.prototype.mostrarLibro = function () {
        console.log("Libro: ".concat(this.titulo, " por ").concat(this.autor));
        this.hojas.forEach(function (hoja) { return hoja.mostrarContenido(); });
    };
    return Libro;
}());
var libro = new Libro('Cien años de soledad', 'Gabriel García Márquez');
libro.agregarHoja(new Hoja(1, 'Muchos años después, frente al pelotón de fusilamiento...'));
libro.agregarHoja(new Hoja(2, 'Aureliano Buendía habría de recordar esa tarde remota en que su padre...'));
libro.mostrarLibro();
