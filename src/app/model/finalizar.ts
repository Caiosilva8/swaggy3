export class finalizar{
    id : string;
    cep : string;
    cpf : string;
    identidade : string;
    celular : string;
    bairro : string;
    endereco : string;
    numero : number;
    complemento : string;
    pontoR : string;


    setDados(obj: any){
        this.cep = obj.cep;
        this.cpf = obj.cpf;
        this.identidade = obj.identidade;
        this.celular = obj.celular;
        this.bairro = obj.bairro;
        this.endereco = obj.endereco;
        this.numero = obj.numero;
        this.complemento = this.complemento;
        this.pontoR = this.pontoR;
    }
}
