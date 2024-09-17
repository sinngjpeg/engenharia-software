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