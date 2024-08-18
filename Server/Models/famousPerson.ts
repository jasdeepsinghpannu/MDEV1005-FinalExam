import { Schema, model } from 'mongoose';

// Famous Person Interface - defines the structure of a famous person document
export interface IFamousPerson {
    famousPersonID: string,
    name: string,
    occupation: string,
    nationality: string,
    birthDate: Date,
    birthPlace: string,
    bio: string,
    achievements: string[],
    imageURL: string
}

// Famous Person Schema - defines the structure of a famous person document
let famousPersonSchema = new Schema<IFamousPerson>({
    famousPersonID: String,
    name: String,
    occupation: String,
    nationality: String,
    birthDate: Date,
    birthPlace: String,
    bio: String,
    achievements: [String],
    imageURL: String
});

let FamousPerson = model<IFamousPerson>('FamousPerson', famousPersonSchema);

export default FamousPerson;
