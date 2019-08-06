export class Perfil{
    id : string;
    cidade: string;
    estado:string;
    nome: string;
    pontos: number;

    setDados(obj : any){
        this.cidade = obj.cidade;
        this.estado = obj.estado;
        this.nome = obj.nome;
        this.pontos = obj.pontos;
    }
}