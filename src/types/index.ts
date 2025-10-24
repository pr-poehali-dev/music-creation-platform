export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  plays: number;
  genre: string;
  preview_url?: string;
}

export interface Beat {
  id: number;
  name: string;
  bpm: number;
  genre: string;
}

export interface Artist {
  name: string;
  tracks: number;
  followers: string;
}

export interface Effect {
  name: string;
  icon: string;
}