import { Wand } from './wand';


export class Character {
    name: string;
    image: string;
    house: string;
    patronus: string;
    ancestry: string;
    dateOfBirth: string;
    actor: string;
    alive: boolean;
    wand: Wand;

    constructor(
        name: string,
        image: string,
        house: string,
        patronus: string,
        ancestry: string,
        dateOfBirth: string,
        actor: string,
        alive,
        wand) {
            this.name = name;
            this.image = image;
            this.house = house;
            this.patronus = patronus;
            this.ancestry = ancestry;
            this.dateOfBirth = dateOfBirth;
            this.actor = actor;
            this.alive = alive;
            this.wand = wand;
    }
}