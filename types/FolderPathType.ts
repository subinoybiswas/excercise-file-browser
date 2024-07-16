import { FileType } from './FileType';
import { FolderType } from './FolderType';
export type FolderStructure = (FileType | FolderType)[];