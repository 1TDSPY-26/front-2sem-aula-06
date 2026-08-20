type vitor = {
    nome: string;
    sobrenome?: string;
};

export default function vitor({ nome, sobrenome }: vitor) {
    return <h2>Seu nome é: {nome} {sobrenome}</h2>;
}