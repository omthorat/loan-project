import { render,screen } from "@testing-library/react";
import Ratelock from "./Ratelock";

it("heading tag is there",()=>{
    render(<Ratelock/>)
   const textElement = screen.getByText("Rate lock")
   expect(textElement).toBeInTheDocument()
})