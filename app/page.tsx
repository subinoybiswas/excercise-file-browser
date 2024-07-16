"use client";
import { Folder } from "@/components/folder";
import { File } from "@/components/file";
import { FolderStructure } from "@/types/Structure";

export default function Home() {
  
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
          
            />
          );
        }
        return null;
      })}
    </main>
  );
}
