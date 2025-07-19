'use client';

import { createContext, ReactNode, useContext } from 'react';

type ImageContextType = {
  path: string;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

type ImageProviderProps = {
  path: string;
  children: ReactNode;
};

export const ImagePathProvider = ({ children, path }: ImageProviderProps) => (
  <ImageContext.Provider value={{ path }}>{children}</ImageContext.Provider>
);

export const useImagePath = () => useContext(ImageContext)?.path;
