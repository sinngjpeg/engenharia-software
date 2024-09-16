class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar(){
        console.log(`Estou trabalhando como ${this.cargo}`);
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, departamento){
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }

}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, 'Desenvolvedor');
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}


class Main {
    static iniciar() {
        // Criando instâncias
        const gerente = new Gerente('Alice', 40, 'Recursos Humanos');
        const desenvolvedor = new Desenvolvedor('Carlos', 30, 'JavaScript');

        // Chamando os métodos
        gerente.seApresentar();
        gerente.gerenciar();

        desenvolvedor.seApresentar();
        desenvolvedor.programar();
    }
}

// Executando o método iniciar da classe Main
Main.iniciar();