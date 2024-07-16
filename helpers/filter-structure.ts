import { FolderStructure } from "@/types/Structure";

export const filterStructure = (structure: FolderStructure, query: string): { paths: string[], structure: FolderStructure } => {
    const filteredStructure: FolderStructure = [];
    const paths: string[] = [];

    structure.forEach(item => {
        if (item.type === "file") {
            if (item.name.toLowerCase().includes(query.toLowerCase())) {
                filteredStructure.push(item); 
                paths.push(item.path); 
            }
        } else if (item.type === "folder") {
            const { paths: childPaths, structure: childStructure } = filterStructure(item.children || [], query);
            if (childStructure.length > 0) {
           
                filteredStructure.push({ ...item, children: childStructure });
                paths.push(...childPaths); 
            }
        }
    });

    if (paths.length > 0) {
        return { paths: paths.filter((path, index) => !paths.some(p => p.startsWith(path) && p !== path)), structure: filteredStructure };
    }

    return { paths, structure: filteredStructure };
};
