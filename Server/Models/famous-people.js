"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const famousPeopleSchema = new mongoose_1.Schema({
    famousPersonID: { type: String },
    name: { type: String },
    occupation: { type: String },
    nationality: { type: String },
    birthDate: { type: Date },
    birthPlace: { type: String },
    bio: { type: String },
    achievements: { type: [String] },
    imageURL: { type: String }
});
const FamousPeople = (0, mongoose_1.model)('FamousPeople', famousPeopleSchema);
exports.default = FamousPeople;
//# sourceMappingURL=famous-people.js.map