export interface Command {
  name: string;
  description: string;
  content: string;
}

export interface Commands {
  [key: string]: Command;
}