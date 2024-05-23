var Motor = /** @class */ (function () {
    function Motor(tipo) {
        this.tipo = tipo;
    }
    Motor.prototype.encender = function () {
        console.log("El motor ".concat(this.tipo, " est\u00E1 encendido."));
    };
    return Motor;
}());
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
    }
    Auto.prototype.arrancar = function () {
        console.log("El auto ".concat(this.marca, " ").concat(this.modelo, " est\u00E1 arrancando."));
        this.motor.encender();
    };
    return Auto;
}());
var motor = new Motor('V6');
var auto = new Auto('Chevrolet', 'Cavalier Z24', motor);
auto.arrancar();
