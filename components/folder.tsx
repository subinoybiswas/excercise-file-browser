import { FolderType } from "@/types/FolderType";
import { Folder as FolderIcon } from 'lucide-react';
import { File } from "@/components/file";
import { useState, useEffect } from "react";
import { usePaths } from "@/contexts/PathContexts";

export function Folder({ folder }: { folder: FolderType }) {
    const { paths } = usePaths();
    const [isOpen, setIsOpen] = useState(false);

    // Check if the folder path is a prefix of any paths in the context
    useEffect(() => {
        const folderPath = folder.path; // Assuming `folder.path` contains the folder's path
        if (paths.some(path => path.startsWith(folderPath))) {
            setIsOpen(true);
        }
    }, [paths, folder.path]);

    return (
        <div className={`bg-slate-50 flex flex-col gap-1 p-2 cursor-default`}
            onClick={() => setIsOpen(prev => !prev)} >
            <div className="flex flex-row items-center gap-1">
                <FolderIcon />
                {folder.name}
            </div>
            {isOpen && (
                <div className="ml-4" onClick={(e) => e.stopPropagation()} >
                    {folder.children && folder.children.map((child) => {
                        if (child.type === "file") {
                            return <File key={child.name} file={child} />;
                        }
                        if (child.type === "folder") {
                            return (
                                <Folder
                                    key={child.name}
                                    folder={child}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    );
}
