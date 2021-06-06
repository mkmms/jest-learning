import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Initial condition", () => {
  render(<SummaryForm />);
  const summaryButton = screen.getByRole("button", { name: "Confirm Order" });
  const termsCheckbox = screen.getByRole("checkbox", { label: "terms" });

  expect(termsCheckbox).not.toBeChecked();
  expect(summaryButton).toBeDisabled();
});

test("Button need to enabled when checkbox ticked", () => {
  render(<SummaryForm />);
  const summaryButton = screen.getByRole("button", { name: "Confirm Order" });
  const termsCheckbox = screen.getByRole("checkbox", { label: "terms" });

  userEvent.click(termsCheckbox);

  expect(termsCheckbox).toBeChecked();
  expect(summaryButton).toBeEnabled();

  userEvent.click(termsCheckbox);
  expect(termsCheckbox).not.toBeChecked();
  expect(summaryButton).toBeDisabled();
});

test("Popover need to show when we hover on the  terms and conditions", async () => {
  render(<SummaryForm />);
  const nullPopover = screen.queryByText(/here is the content/i);
  expect(nullPopover).not.toBeInTheDocument();

  const triggerButton = screen.getByText(/terms and conditions/i);
  expect(triggerButton).toBeInTheDocument();

  userEvent.hover(triggerButton);

  const popover = screen.queryByText(/here is the content/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(triggerButton);

  await waitForElementToBeRemoved(() => {
    return screen.queryByText(/here is the content/i);
  });
  expect(popover).not.toBeInTheDocument();
});
