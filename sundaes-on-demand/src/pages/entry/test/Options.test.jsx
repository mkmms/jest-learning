import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("Display image for each scoop from the server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altTxts = scoopImages.map((element) => element.alt);
  expect(altTxts).toEqual(["Mint chip scoop", "Vanilla scoop"]);
});

test("Display image for each toppings from the server", async () => {
  render(<Options optionType="toppings" />);

  const scoopImages = await screen.findAllByRole("img", { name: /topping$/i });
  expect(scoopImages).toHaveLength(3);

  const altTxts = scoopImages.map((element) => element.alt);
  expect(altTxts).toEqual([
    "M&Ms topping",
    "Hot fudge topping",
    "pepper fudge topping",
  ]);
});
