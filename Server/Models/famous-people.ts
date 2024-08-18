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
    famousPersonID: { type: String, required: true },
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    nationality: { type: String, required: true },
    birthDate: { type: Date, required: true },
    birthPlace: { type: String, required: true },
    bio: { type: String, required: true },
    achievements: { type: [String], required: true },
    imageURL: { type: String, required: true }
});

const FamousPeople = model<IFamousPeople>('FamousPeople', famousPeopleSchema);

export default FamousPeople;
