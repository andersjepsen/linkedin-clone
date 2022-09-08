export type UserData = {
  name: string;
  subTitle: string;
  currentCompany: string;
  avatarUrl: string;
};

export type PostData = {
  createdBy: UserData;
  text: string;
};
