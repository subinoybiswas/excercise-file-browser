import { FileType } from "./FileType";

export interface FolderType {
    type: "folder";
    name: string;
    children?: (FileType | FolderType)[];
}