export class Validator{
    constructor(cpf){
        this.cpf = cpf.replace(/\D+/g, '');
    }

    isSequence(){
        return this.cpf.charAt(0).repeat(this.cpf.length) === this.cpf;
    }

    static generateDigit(noDigit){
        let result = 0;
        let multiplier = noDigit.length + 1;

        for(let value of noDigit){
            result += multiplier * Number(value);
            multiplier--;
        }
        
        result = 11 - (result % 11);

        return result > 9 ? 0 : result;
    }

    isValid(){
        let noDigit = this.cpf.slice(0, -2);
        let digitOne = Validator.generateDigit(noDigit);
        let digitTwo = Validator.generateDigit(noDigit + digitOne);
        let generatedCpf = noDigit + digitOne + digitTwo;
        
        return this.cpf === generatedCpf;
    }

    cpfValidate(){
        if(this.cpf.length !== 11) return false;
        if(this.isSequence()) return false;
        if(!this.isValid()) return false;
        return true;
    }

}
