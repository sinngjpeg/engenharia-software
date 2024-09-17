class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`Estou trabalhando como ${this.cargo}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} gerencia o departamento de ${this.departamento}.`);
    }

}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, 'Desenvolvedor(a)');
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}


class Main {
    static iniciar() {

        const gerente = new Gerente('Ingrid', 29, 'Capitulo de Android');
        const desenvolvedor = new Desenvolvedor('Milene', 33, "Desenvolvedora Mobile", 'Kotlin');

        gerente.seApresentar();
        gerente.gerenciar();

        desenvolvedor.seApresentar();
        desenvolvedor.programar();
    }
}

Main.iniciar();