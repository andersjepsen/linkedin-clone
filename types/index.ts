export type UserData = {
  name: string;
  subTitle: string;
  currentCompany: string;
  avatarUrl: string;
};

export type PostData = {
  id: number;
  createdBy: UserData;
  text: string;
};
