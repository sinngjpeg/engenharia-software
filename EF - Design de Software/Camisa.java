public class Camisa extends Vestuario {
    private boolean mangaLonga;
    public Camisa(String cor, String tamanho, String material, boolean mangaLonga) {
        super(cor, tamanho, material);
        this.mangaLonga = mangaLonga;
    }
    public boolean isMangaLonga() {
        return mangaLonga;
    }
    @Override
    public String toString() {
        return “Camisa [mangaLonga=” + mangaLonga + ", " + super.toString() + “]”;
    }
}