"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const famousPeopleSchema = new mongoose_1.Schema({
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
const FamousPeople = (0, mongoose_1.model)('FamousPeople', famousPeopleSchema);
exports.default = FamousPeople;
//# sourceMappingURL=famous-people.js.map