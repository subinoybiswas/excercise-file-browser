import { FileType } from "@/types/FileType";
import { FolderStructure } from "@/types/Structure";
import { FolderType } from '../types/FolderType';

export const filterStructure = (structure: FolderStructure, query: string) => {
    if (!query) return { filtered: structure, paths: [] };

    const filtered: (FileType | FolderType)[] = [];
    const paths: string[] = [];

    structure.forEach((item) => {
        if (item.type === "file" && item.name.toLowerCase().includes(query.toLowerCase())) {
            paths.push(item.name);
            filtered.push(item);
        } else if (item.type === "folder") {
            if (item.children) { 
                const { filtered: childFiltered, paths: childPaths } = filterStructure(item.children, query);
                const folderMatches = item.name.toLowerCase().includes(query.toLowerCase());

                if (folderMatches || childFiltered.length > 0) {
                    paths.push(item.name);
                    filtered.push({ ...item, children: childFiltered });
                }
            }
        }
    });

    return { filtered, paths };
};
