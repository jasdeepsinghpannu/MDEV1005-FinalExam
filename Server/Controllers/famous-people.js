"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFamousPerson = exports.updateFamousPerson = exports.createFamousPerson = exports.getFamousPersonById = exports.getAllFamousPeople = void 0;
const famous_people_1 = __importDefault(require("../Models/famous-people"));
const Util_1 = require("../Util");
function getAllFamousPeople(req, res, next) {
    famous_people_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Famous People List Retrieved and Displayed", data: data, token: null });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
    });
}
exports.getAllFamousPeople = getAllFamousPeople;
function getFamousPersonById(req, res, next) {
    let id = req.params.id;
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a famous person", data: null, token: null });
    }
    else {
        famous_people_1.default.findById(id)
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "Famous Person Retrieved and Displayed", data: data, token: null });
            }
            else {
                res.status(404).json({ success: false, msg: "Famous Person not found", data: null, token: null });
            }
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
        });
    }
}
exports.getFamousPersonById = getFamousPersonById;
function createFamousPerson(req, res, next) {
    let achievements = (req.body.achievements) ? (0, Util_1.SanitizeArray)(req.body.achievements) : (0, Util_1.SanitizeArray)("");
    let famousPerson = new famous_people_1.default({
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
    famous_people_1.default.create(famousPerson)
        .then(() => {
        res.status(200).json({ success: true, msg: "Famous Person added", data: famousPerson, token: null });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
    });
}
exports.createFamousPerson = createFamousPerson;
function updateFamousPerson(req, res, next) {
    let id = req.params.id;
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a famous person", data: null, token: null });
    }
    else {
        let achievements = (req.body.achievements) ? (0, Util_1.SanitizeArray)(req.body.achievements) : (0, Util_1.SanitizeArray)("");
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
        famous_people_1.default.updateOne({ _id: id }, famousPersonToUpdate)
            .then(() => {
            res.status(200).json({ success: true, msg: "Famous Person updated", data: famousPersonToUpdate, token: null });
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
        });
    }
}
exports.updateFamousPerson = updateFamousPerson;
function deleteFamousPerson(req, res, next) {
    let id = req.params.id;
    if (id.length !== 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete a famous person", data: null, token: null });
    }
    else {
        famous_people_1.default.deleteOne({ _id: id })
            .then(() => {
            res.status(200).json({ success: true, msg: "Famous Person deleted", data: id, token: null });
        })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, msg: "An error occurred", data: null, token: null });
        });
    }
}
exports.deleteFamousPerson = deleteFamousPerson;
//# sourceMappingURL=famous-people.js.map