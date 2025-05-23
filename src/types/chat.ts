
export type MessageType = "user" | "ai";

export interface Message {
  type: MessageType;
  content: string;
}

export interface PersonalInfo {
  basics: {
    name: string;
    age: string;
    birthDate: string;
    email: string;
    phone: string;
    location: string;
  };
  education: {
    current: string;
    institution: string;
    graduationYear: string;
    collegeTime: string;
    skills: string[];
  };
  projects: string[];
  achievements: string[];
  interests: string[];
  goals: string;
}
