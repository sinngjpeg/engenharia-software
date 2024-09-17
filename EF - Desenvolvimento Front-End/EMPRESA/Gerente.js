class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} gerencia o departamento de ${this.departamento}.`);
    }

}