class Funcionario {
  constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
  }

  seApresentar() {
      return `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }

  trabalhar() {
      return `Estou trabalhando como ${this.cargo}.`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
      super(nome, idade, 'Gerente');
      this.departamento = departamento;
  }

  gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
      super(nome, idade, 'Desenvolvedor(a)');
      this.linguagem = linguagem;
  }

  programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
  }
}


let funcionarios = [];

document.getElementById('cargo').addEventListener('change', function () {
  const cargo = this.value;
  const departamentoField = document.getElementById('departamentoField');
  const linguagemField = document.getElementById('linguagemField');

  if (cargo === 'Gerente') {
      departamentoField.style.display = 'block';
      linguagemField.style.display = 'none';
  } else if (cargo === 'Desenvolvedor') {
      linguagemField.style.display = 'block';
      departamentoField.style.display = 'none';
  } else {
      departamentoField.style.display = 'none';
      linguagemField.style.display = 'none';
  }
});

document.getElementById('funcionarioForm').addEventListener('submit', function (event) {
  event.preventDefault();

  try {
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;
      const cargo = document.getElementById('cargo').value;
      const departamento = document.getElementById('departamento').value;
      const linguagem = document.getElementById('linguagem').value;

      if (!nome || !idade || !cargo) {
          throw new Error('Por favor, preencha todos os campos obrigatórios.');
      }

      let funcionario;

      if (cargo === 'Gerente') {
          if (!departamento) throw new Error('O campo departamento é obrigatório para gerentes.');
          funcionario = new Gerente(nome, idade, departamento);
      } else if (cargo === 'Desenvolvedor') {
          if (!linguagem) throw new Error('O campo linguagem de programação é obrigatório para desenvolvedores.');
          funcionario = new Desenvolvedor(nome, idade, linguagem);
      }

      funcionarios.push(funcionario);

      document.getElementById('funcionarioForm').reset();
      document.getElementById('departamentoField').style.display = 'none';
      document.getElementById('linguagemField').style.display = 'none';

      exibirFuncionarios();

      document.getElementById('error').innerHTML = '';

  } catch (error) {
      exibirErro(error.message);
  }
});

function exibirFuncionarios() {
  const output = document.getElementById('output');
  output.innerHTML = ''; 

  funcionarios.forEach(funcionario => {
      let resultado = funcionario.seApresentar();

      if (funcionario instanceof Gerente) {
          resultado += '<br>' + funcionario.gerenciar();
      } else if (funcionario instanceof Desenvolvedor) {
          resultado += '<br>' + funcionario.programar();
      }

      const div = document.createElement('div');
      div.innerHTML = resultado;
      div.classList.add('funcionario');
      output.appendChild(div);
  });
}

function exibirErro(mensagem) {
  document.getElementById('error').innerHTML = mensagem;
}
