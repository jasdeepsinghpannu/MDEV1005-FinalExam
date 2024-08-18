import { Request, Response, NextFunction } from 'express';
import FamousPeople from '../Models/famous-people';
import { SanitizeArray } from '../Util';

/**
 * This function displays the list of famous people in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function getAllFamousPeople(req: Request, res: Response, next: NextFunction): void {
    FamousPeople.find({})
    .then((data) => {
        res.status(200).json({ success: true, msg: "Famous People List Retrieved and Displayed", data: data, token: null });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
    });
}

/**
 * This function displays a single famous person by ID in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function getFamousPersonById(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    // Ensure that the id is valid
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a famous person", data: null, token: null });
    } else {
        FamousPeople.findById(id)
        .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "Famous Person Retrieved and Displayed", data: data, token: null });
            } else {
                res.status(404).json({ success: false, msg: "Famous Person not found", data: null, token: null });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
        });
    }
}

/**
 * This function adds a famous person to the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function createFamousPerson(req: Request, res: Response, next: NextFunction): void {
    let achievements = (req.body.achievements) ? SanitizeArray(req.body.achievements as string) : SanitizeArray("");
    
    let famousPerson = new FamousPeople({
        famousPersonID: req.body.famousPersonID,
        name: req.body.name,
        occupation: req.body.occupation,
        nationality: req.body.nationality,
        birthDate: req.body.birthDate,
        birthPlace: req.body.birthPlace,
        bio: req.body.bio,
        achievements: achievements,
        imageURL: req.body.imageURL
    });

    FamousPeople.create(famousPerson)
    .then(() => {
        res.status(200).json({ success: true, msg: "Famous Person added", data: famousPerson, token: null });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
    });
}

/**
 * This function updates a famous person in the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function updateFamousPerson(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    // Ensure that the id is valid
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a famous person", data: null, token: null });
    } else {
        let achievements = (req.body.achievements) ? SanitizeArray(req.body.achievements as string) : SanitizeArray("");

        let famousPersonToUpdate = {
            famousPersonID: req.body.famousPersonID,
            name: req.body.name,
            occupation: req.body.occupation,
            nationality: req.body.nationality,
            birthDate: req.body.birthDate,
            birthPlace: req.body.birthPlace,
            bio: req.body.bio,
            achievements: achievements,
            imageURL: req.body.imageURL
        };

        FamousPeople.updateOne({ _id: id }, famousPersonToUpdate)
        .then(() => {
            res.status(200).json({ success: true, msg: "Famous Person updated", data: famousPersonToUpdate, token: null });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
        });
    }
}

/**
 * This function deletes a famous person from the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function deleteFamousPerson(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;

    // Ensure that the id is valid
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete a famous person", data: null, token: null });
    } else {
        FamousPeople.deleteOne({ _id: id })
        .then(() => {
            res.status(200).json({ success: true, msg: "Famous Person deleted", data: id, token: null });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
        });
    }
}
