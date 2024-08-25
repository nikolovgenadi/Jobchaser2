interface Job {
  id: number;
  position: string;
  company: string;
  postedAt: string;
  location: string;
  role: string;
  languages: string[];
}

export interface Jobs extends Array<Job> {}
