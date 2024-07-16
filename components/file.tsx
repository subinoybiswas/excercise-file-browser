import { FileType } from "@/types/FileType";
import { File as FileIcon } from "lucide-react"
export function File({ file }: { file: FileType }) {
    return (
        <div className="flex flex-row items-center gap-1 p-2 bg-slate-50 hover:bg-blue-200 cursor-default">
            <FileIcon />
            {file.name}
        </div>
    );
}