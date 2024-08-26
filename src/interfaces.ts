export interface Language {
  name: string;
}

export interface Job {
  id: string | number;
  position: string;
  role: string;
  company: string;
  location: string;
  postedAt: string;
  languages: Language[];
}

export interface Jobs extends Array<Job> {}
