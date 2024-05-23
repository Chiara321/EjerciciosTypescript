var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        console.log("Hola, me llamo ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, carrera) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.carrera = carrera;
        return _this;
    }
    Estudiante.prototype.estudiar = function () {
        console.log("".concat(this.nombre, " est\u00E1 estudiando ").concat(this.carrera, "."));
    };
    return Estudiante;
}(Persona));
var estudiante = new Estudiante('Juliana', 20, 'Odontología');
estudiante.presentarse();
estudiante.estudiar();
