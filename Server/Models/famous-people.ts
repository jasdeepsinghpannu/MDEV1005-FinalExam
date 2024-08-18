// famous_people.ts

import { Schema, model } from 'mongoose';

// Famous People Interface - defines the structure of a famous people document
export interface IFamousPeople {
    famousPersonID: string;
    name: string;
    occupation: string;
    nationality: string;
    birthDate: Date;
    birthPlace: string;
    bio: string;
    achievements: string[];
    imageURL: string;
}

// Famous People Schema - defines the structure of a famous people document
const famousPeopleSchema = new Schema<IFamousPeople>({
    famousPersonID: { type: String },
    name: { type: String},
    occupation: { type: String},
    nationality: { type: String},
    birthDate: { type: Date},
    birthPlace: { type: String},
    bio: { type: String},
    achievements: { type: [String]},
    imageURL: { type: String}
});

const FamousPeople = model<IFamousPeople>('FamousPeople', famousPeopleSchema);

export default FamousPeople;
