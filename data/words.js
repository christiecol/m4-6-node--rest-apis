//Credit for this code goes to Bradley Campbell! (Not copied & pasted and I understand why it works!)

const words = [
  {
    id: 1000,
    word: "bacon",
    letterCount: "5",
  },
];

let idStart = 999;
let listOfWords =
  "Quill Battery House Rain Beach Hydrogen Rainbow Beard Ice Raincoat Bed Insect Refrigerator Belgium Insurance Restaurant Boy Iron River Branch Island Rocket Breakfast Jackal Room Brother Jelly Rose Camera Jewellery Russia Candle Jordan Sandwich Car Juice School Caravan Kangaroo Scooter Carpet King Shampoo Cartoon Kitchen Shoe China Kite Soccer Church Knife Spoon Crayon Lamp Stone Crowd Lawyer Sugar Daughter Leather Sweden Death Library Teacher Denmark Lighter Telephone Diamond Lion Television Dinner Lizard Tent Disease Lock Thailand Doctor London Tomato Dog Lunch Toothbrush Dream Machine Traffic Dress Magazine Train Easter Magician Truck";

listOfWords = listOfWords.split(" ");

listOfWords = listOfWords.map((word, i) => {
  word = word.split("");
  word[0] = word[0].toLowerCase();
  word = word.join("");

  return {
    id: `${idStart - i}`,
    word: word,
    letterCount: word.length,
  };
});

listOfWords.forEach((word) => words.push(word));
module.exports = { words };
