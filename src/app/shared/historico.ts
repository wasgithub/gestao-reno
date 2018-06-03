export class Historico {
    id: number;
    contactDate: string;
    returnDate: string;
    totalValue: string;
    offeredValue: string;
    employee: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
