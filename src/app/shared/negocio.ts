export class Negocio {
    id: number;
    employee: string;
    name: string;
    document: string;
    birthdate: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    contacted: string;
    situation: string;
    origin: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
