// src/lib/types.ts
export interface IconData {
  src: string;
  className: string; // Used for precise layout of simple & composite icons
}

export interface FeatureData {
  title: string;
  icons: IconData[];
}
