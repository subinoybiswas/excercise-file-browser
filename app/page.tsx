"use client";
import { useState } from "react";
import { Folder } from "@/components/folder";
import { File } from "@/components/file";
import { filterStructure } from "@/helpers/filter-structure";
import { folderStructure } from "@/helpers/sample-structure";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const {paths,structure} = filterStructure(folderStructure, searchQuery);
  console.log(paths);
  return (
    <main>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        className="p-2 m-2 border-2 border-black rounded-lg"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {structure.map((item) => {
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
