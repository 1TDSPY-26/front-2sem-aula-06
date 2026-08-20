type tipoProps = {
    sobreNome1: string;
    sobreNome2: string;
}

export default function Heloisa({ sobreNome1, sobreNome2 }: tipoProps) {
    return (
        <h2>Heloisa {sobreNome1} {sobreNome2}</h2>
    );
}