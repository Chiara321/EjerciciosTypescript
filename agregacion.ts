class Motor {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    encender() {
        console.log(`El motor ${this.tipo} está encendido.`);
    }
}

class Auto {
    marca: string;
    modelo: string;
    motor: Motor;

    constructor(marca: string, modelo: string, motor: Motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
    }

    arrancar() {
        console.log(`El auto ${this.marca} ${this.modelo} está arrancando.`);
        this.motor.encender();
    }
}

const motor = new Motor('V6');
const auto = new Auto('Chevrolet', 'Cavalier Z24', motor);
auto.arrancar(); 
