import React from "react";
import CssSlider from "../";
import {cleanup, render} from "@testing-library/react";
import "jest-dom/extend-expect";

const articlesListItems: any[] = [<div>First Item</div>, <div>Second Item</div>];

describe("CssSlider tests --", () => {
    describe("Rendering title and banner text", () => {
        let testDOM;

        beforeAll(() => {
            testDOM = render(
                <CssSlider
                    articlesListItems={articlesListItems}
                />
            );
        });

        afterAll(cleanup);

        it(`Displays First Item`, () => {
            expect(testDOM.getByText('First Item')).toBeVisible();
        });

        it(`Displays Second Item`, () => {
            expect(testDOM.getByText('Second Item')).toBeVisible();
        });

        it("Renders CssSlider Wrapper", () => {
            expect(testDOM.getByTestId("CssSlider")).toBeVisible();
        });

        it("Renders 2 slider wrappers for every item", () => {
            let sledeWrappers = testDOM.getAllByTestId("SlideWrapper");
            expect(sledeWrappers.length).toEqual(2);
        });

    });
});