import { OwnerId } from "./ownerId";

export interface Recipe {
    "objectId": string;
    "ingredients": string;
    "title": string;
    "serves": string;
    "method": string;
    "imageUrl": string;
    "ownerId": OwnerId;
    "createdAt": string;
    "updatedAt": string;
}