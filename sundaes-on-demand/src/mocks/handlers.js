import { rest } from "msw";

const scoops = [
  {
    name: "Mint chip",
    imagePath: "/images/mint-chip.png",
  },
  {
    name: "Vanilla",
    imagePath: "/images/vanilla.png",
  },
];

const toppings = [
  {
    name: "M&Ms",
    imagePath: "/images/m-and-ms.png",
  },
  {
    name: "Hot fudge",
    imagePath: "/images/hot-fudge.png",
  },
  {
    name: "pepper fudge",
    imagePath: "/images/hot-fudge.png",
  },
];

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(ctx.json(scoops));
  }),

  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(ctx.json(toppings));
  }),
];
