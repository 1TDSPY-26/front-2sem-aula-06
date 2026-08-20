type TipoProps = {
    sobreNome:string;
}

export default function Isabelle({sobreNome}:TipoProps){
    return(
        <h2>Isabelle {sobreNome}</h2>
        
    );
}