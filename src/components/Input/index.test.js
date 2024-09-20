import React from "react";
import {shallow} from "enzyme";
import Input from ".";
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const render = (props) => shallow (<Input {...props}/>);

describe("Input component", () => {
    let sut;
    let props;

    describe('without props', () => { 
        beforeEach(() => {
            props = {
                placeholder: 'Input your data',
                name: 'search'
            }
        })

        it('should render the component correctly', () => {
            sut = render(<Input {...props}/>);
        });

        it("should match snapshot", () => {
            expect(sut).toMatchSnapshot();
        })
     });

})