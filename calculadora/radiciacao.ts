import Calculo from './calculo';

export default class Radiciacao extends Calculo {
    public calcular(radicando: number, indice: number): number {
        return Math.pow(radicando, 1 / indice);
    }
}