let news = [
  {
    image: "https://www.bbc.com/news/world-europe-67756413",
    title: "Gas pollution fear after Iceland volcano eruption",
    description: `The eruption, in south-west Iceland, led to half the sky being "lit up in red", an eyewitness says.
    EUROPEGas pollution fear after Iceland volcano eruption`,
  },
  {
    image: "https://www.bbc.com/news/uk-england-gloucestershire-67759265",
    title: `Serial killer's ex-wife convicted for part in murders`,
    description: `Monique Olivier, 75, was complicit in Michael Fourniret's murders, including of a British student.
    GLOUCESTERSHIRESerial killer's ex-wife convicted for part in murders`,
  },
  {
    image: "https://www.bbc.com/news/business-67758126",
    title:
      "Gas pollution fear aFears of higher oil prices after Red Sea attacks",
    description: `Analysts warn delays on the key trading route risk pushing up energy prices following missile strikes.
    BUSINESSFears of higher oil prices after Red Sea attacks`,
  },
];

const root = document.getElementById("root");

function newsCard() {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
}
