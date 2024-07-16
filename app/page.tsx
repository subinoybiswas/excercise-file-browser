"use client";
import { Folder } from "@/components/folder";
import { File } from "@/components/file";
import { FolderStructure } from "@/types/Structure";
import { useState } from "react";

export default function Home() {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());
  
  const folderStructure: FolderStructure = [
    {
      type: "folder",
      name: "Folder1",
      children: [
        { type: "file", name: "File1" },
        {
          type: "folder",
          name: "Subfolder1",
          children: [
            { type: "file", name: "Subfile1" },
            { type: "file", name: "Subfile2" }
          ]
        }
      ]
    },
    { type: "file", name: "File2" }
  ];

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(folderName)) {
        newSet.delete(folderName);
      } else {
        newSet.add(folderName);
      }
      return newSet;
    });
  };

  return (
    <main>
      {folderStructure.map((item) => {
        if (item.type === "file") {
          return <File key={item.name} file={item} />;
        }
        if (item.type === "folder") {
          return (
            <Folder 
              key={item.name} 
              folder={item} 
              openFolders={openFolders} 
              toggleFolder={toggleFolder} 
            />
          );
        }
        return null;
      })}
    </main>
  );
}
