"use client";
import { FolderType } from "@/types/FolderType";
import { Folder as FolderIcon } from 'lucide-react';
import { File } from "@/components/file";

interface FolderProps {
    folder: FolderType;
    openFolders: Set<string>;
    toggleFolder: (folderName: string) => void;
}

export function Folder({ folder, openFolders, toggleFolder }: FolderProps) {
    const isOpen = openFolders.has(folder.name); // Check if this folder is open

    return (
        <div className="bg-slate-50 hover:bg-blue-400/40 flex flex-col gap-1 p-2 cursor-default" onClick={() => toggleFolder(folder.name)}>
            <div className="flex flex-row items-center gap-1">
                <FolderIcon />
                {folder.name}
            </div>
            {isOpen && (
                <div className="ml-4">
                    {folder.children && folder.children.map((child) => {
                        if (child.type === "file") {
                            return <File key={child.name} file={child} />;
                        }
                        if (child.type === "folder") {
                            return (
                                <div onClick={(e) => e.stopPropagation()} key={child.name}>
                                    <Folder
                                        folder={child}
                                        openFolders={openFolders}
                                        toggleFolder={toggleFolder}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    );
}
