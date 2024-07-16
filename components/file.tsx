import { usePaths } from "@/contexts/PathContexts";
import { FileType } from "@/types/FileType";
import { File as FileIcon } from "lucide-react"
export function File({ file }: { file: FileType }) {
    const { paths } = usePaths();
    console.log("Paths", paths, file.path, paths.includes(file.path));
    return (
        <div className={`  bg-slate-50 flex flex-row gap-1 p-2 cursor-default ${paths.includes(file.path) ? "text-red-600" : "text-slate-600"}`} >
            <FileIcon />
            {file.name}
        </div>
    );
}