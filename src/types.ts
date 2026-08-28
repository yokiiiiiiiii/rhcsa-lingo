export type Mode = "rh124" | "rh134" | "mix";

export interface Question {
  id: number;
  book: "rh124" | "rh134";
  question: string;
  correctCommand: string[];
  options: string[];
  explanation: string;
  manHint: string;
}

export interface CategoryStat {
  total: number;
  correct: number;
}

export interface UserStats {
  lessonsCompleted: number;
  streak: number;
  lastPlayedDate: string | null;
  failedQuestions: number[];
  categoryStats: Record<string, CategoryStat>;
}
