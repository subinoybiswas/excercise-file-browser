"use client";
import { FolderType } from "@/types/FolderType";
import { Folder as FolderIcon } from 'lucide-react';
import { File } from "@/components/file";
import { useState } from "react";

export function Folder({ folder }: { folder: FolderType }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-50 hover:bg-blue-400/40 flex flex-col gap-1 p-2 cursor-default" onClick={() => setIsOpen(prev => !prev)}>
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
