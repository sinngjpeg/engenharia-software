public class Vestuario {
    private String cor;
    private String tamanho;
    private String material;
    public Vestuario(String cor, String tamanho, String material) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.material = material;
    }
    public String getCor() {
        return cor;
    }
    public String getTamanho() {
        return tamanho;
    }
    public String getMaterial() {
        return material;
    }
    @Override
    public String toString() {
        return “Vestuario [cor=” + cor + “, tamanho=” + tamanho + “, material=” + material + “]”;
    }
}