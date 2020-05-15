import React from 'react';
import { render, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";

test('See if it is working correctly', () => {
    const { getByText } = render(<ContactForm/>)
})

test('testing form submit', () => {
    const {getByLabelText, getByText} = render(<ContactForm/>)
    //const firstNameInput = getByText(/first Name/i)
    //const lastNameInput = getByLabelText(/last name/i)
     // console.log(render(<ContactForm/>))

     const firstNameInput = getByLabelText(/First Name*/i)
     const lastNameInput = getByLabelText(/Last Name*/i)
     const emailInput = getByText(/email/i)
     const message = getByLabel(/message/i)


      expect(firstNameInput).toBeVisible();
      expect(lastNameInput).toBeVisible();
      expect(emailInput).toBeVisible();
      expect(message),toBeVisible();
})

test('Change input values', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm/>)

    const firstNameInput = getByLabelText(/First Name*/)

    fireEvent.change(firstNameInput, {target:{value: 'Nel'}});

    expect(firstNameInput.value).toBe('Nel');

    fireEvent.click(getByTestId(/test/i));
})