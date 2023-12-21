class Pessoa {
    private nome;
    private idade;
    private sexo;

    public Pessoa(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    public getNome() {
        return this.nome;
    }

    public setNome(nome) {
        this.nome = nome;
    }

    public getIdade() {
        return this.idade;
    }

    public setIdade(idade) {
        this.idade = idade;
    }    

    public getSexo() {
        return this.sexo;
    }

    public setSexo(sexo) {
        this.sexo = sexo;
    }
}