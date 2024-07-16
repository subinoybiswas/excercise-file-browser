"use client";
import { useEffect, useState } from "react";
import { Folder } from "@/components/folder";
import { File } from "@/components/file";
import { filterStructure } from "@/helpers/filter-structure";
import { folderStructure } from "@/helpers/sample-structure";
import { PathsProvider, usePaths } from "@/contexts/PathContexts";
function HomeComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [structure, setStructure] = useState(folderStructure);
  const { setPaths } = usePaths();



  useEffect(() => {
    if (searchQuery.length > 1) {
      const { paths, structure } = filterStructure(folderStructure, searchQuery);
      console.log(paths);
      console.log(structure);
      setPaths(paths);
      setStructure(structure);
    }
    if (searchQuery.length < 1) {
      setStructure(folderStructure);
      setPaths([]);
    }
  }, [searchQuery]);

  return (
    <main>
      <input
        type="text"
        placeholder="Search file..."
        value={searchQuery}
        className="p-2 m-2 border-2 border-black rounded-lg"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {structure.length > 0 ? structure.map((item) => {
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
      }) : <div className="p-2 m-2">No results found</div>}
    </main>
  );
}

const Home: React.FC = () => {
  return (
    <PathsProvider>
      <HomeComponent />
    </PathsProvider>
  );
};
export default Home;