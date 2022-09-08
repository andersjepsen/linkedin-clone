import type { NextApiRequest, NextApiResponse } from "next";
import type { PostData } from "../../types/index";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>
) {
  res.status(200).json([
    {
      createdBy: {
        name: "John Traktor",
        subTitle: "Elsker at snakke om traktorer og store landbrugsmaskiner",
        currentCompany: "Midtjysk Traktor Engros",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
      },
      text: "Prøv lige at se den her nye John Deere! Den er bare SÅ SEJ!",
    },
  ]);
}
