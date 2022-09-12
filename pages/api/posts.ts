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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue libero, sodales ac enim ut, tempus imperdiet mi. Curabitur aliquam felis eu maximus pharetra. Cras molestie vitae metus at finibus. Aliquam posuere vel odio quis viverra. Nam elit arcu, fermentum gravida leo ut, finibus hendrerit augue. Phasellus placerat vulputate tortor sit amet pretium. Morbi lobortis fringilla elit, eu fermentum leo commodo a. Donec bibendum vulputate augue eget tempus. Sed a dui pharetra, porttitor metus id, mattis dui. Nulla non ipsum pellentesque, sagittis lorem id, elementum urna. Quisque pharetra ut neque pharetra efficitur. Ut accumsan at odio in aliquam. Aenean efficitur libero in neque porta, sed porta quam accumsan. Nullam urna justo, imperdiet at lacus ac, porttitor luctus libero. Cras et blandit velit, eu iaculis nibh. Mauris bibendum leo quis dapibus rhoncus.",
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
