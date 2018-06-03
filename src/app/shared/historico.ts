export class Historico {
    id: string;
    contactDate: string;
    returnDate: string;
    totalValue: string;
    offeredValue: string;
    employee: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
