import commonLocators from "../locators/commonLocators";
import {expect} from "@playwright/test";


class Common {
    constructor(private page: any) {
    }

    async visitHomePage() {
        await this.page.goto("https://insurancewebsitedemo.com/")
    }

    async waitForPageLoad(headerText: string) {
        await this.page.waitForSelector(commonLocators.skrollrBody);
        const scrollBody = this.page.locator(commonLocators.skrollrBody);
        await expect(scrollBody).toContainText(headerText)
    }

    async clickGetStartedButton() {
        await this.page
            .getByRole(commonLocators.getStartedButton.role, {name: commonLocators.getStartedButton.name})
            .click();
    }

    async hoverAndClickSupportLink() {
        await this.page.hover(commonLocators.supportLink);
        await this.page.click(commonLocators.addVehicleLink);
    }
}


export default Common;