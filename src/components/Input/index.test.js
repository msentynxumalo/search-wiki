import React from "react";
import {render} from "@testing-library/react";
import Input from ".";

describe("Input component", () => {
    let sut;
    let props;

    it("should match snapshot", () => {
        sut = render(<Input {...props} />)
        expect(sut).toMatchSnapshot();
    })
})