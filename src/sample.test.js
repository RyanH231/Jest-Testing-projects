import Greeting from "./greeting";
import App from "./App";
import { render, screen} from "@testing-library/react";
import renderer from "react-test-renderer";


jest.mock("./greeting");

describe("It renders and matches HTML snapshot", ()=>{
    it("Renders the greeting app", () => {
        render(<App/>)
        expect(Greeting).toHaveBeenCalled();      
    }),
    it("Matches the Greeting snapshot", () => {
        const shot = renderer.create(<App/>).toJSON();
        expect(shot).toMatchSnapshot(); 
    })
})