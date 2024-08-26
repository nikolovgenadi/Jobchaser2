export interface Job {
  id: string | number;
  position: string;
  role: string;
  company: string;
  location: string;
  postedAt: string;
  languages: string;
}

export interface Jobs extends Array<Job> {}
