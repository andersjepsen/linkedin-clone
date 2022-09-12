import type { NextApiRequest, NextApiResponse } from "next";
import type { PostData } from "../../types/index";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>
) {
  res.status(200).json([
    {
      id: 0,
      createdBy: {
        name: "John Traktor",
        subTitle: "Elsker at snakke om traktorer og store landbrugsmaskiner",
        currentCompany: "Midtjysk Traktor Engros",
        avatarUrl: "https://i.pravatar.cc/150?img=0",
      },
      text: "Prøv lige at se den her nye John Deere! Den er bare SÅ SEJ!",
    },
    {
      id: 1,
      createdBy: {
        name: "Peter Gummiged",
        subTitle:
          "Superbruger af gummigeder siden 1998 og elsker store burgere og øl!",
        currentCompany: "Midtjysk Traktor Engros",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
      },
      text: "Hvis du skal bruge en gummiged, så kører vi specialtilbud lige nu!",
    },
  ]);
}
