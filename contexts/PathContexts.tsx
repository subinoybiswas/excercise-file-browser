// PathsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PathsContextType {
    paths: string[];
    setPaths: (paths: string[]) => void;
}

const PathsContext = createContext<PathsContextType | undefined>(undefined);

export const PathsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [paths, setPaths] = useState<string[]>([]);

    return (
        <PathsContext.Provider value={{ paths, setPaths }}>
            {children}
        </PathsContext.Provider>
    );
};

export const usePaths = (): PathsContextType => {
    const context = useContext(PathsContext);
    if (!context) {
        throw new Error("usePaths must be used within a PathsProvider");
    }
    return context;
};
