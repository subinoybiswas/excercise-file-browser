"use client";
import { useState } from "react";
import { Folder } from "@/components/folder";
import { File } from "@/components/file";
import { FolderStructure } from "@/types/Structure";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

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

  const filterStructure = (structure: FolderStructure, query: string): FolderStructure => {
    return structure.filter((item) => {
      if (item.type === "file") {
        return item.name.toLowerCase().includes(query.toLowerCase());
      }
      if (item.type === "folder") {
        const children = filterStructure(item.children || [], query);
        if (children.length > 0 || item.name.toLowerCase().includes(query.toLowerCase())) {
          return { ...item, children };
        }
        return false;
      }
      return false;
    });
  };

  const filteredStructure = filterStructure(folderStructure, searchQuery);

  return (
    <main>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        className="p-2 m-2 border-2 border-black rounded-lg"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredStructure.map((item) => {
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
