class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    carrera: string;

    constructor(nombre: string, edad: number, carrera: string) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

const estudiante = new Estudiante('Juliana', 20, 'Odontología');
estudiante.presentarse();  
estudiante.estudiar();     
