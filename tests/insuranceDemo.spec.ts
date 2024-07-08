import {test} from "@playwright/test";
import Common from "../actions/Common";
import ContactUsPage from "../actions/ContactUsPage";
import AutoQuoteRequest from "../actions/AutoQuoteRequest";


test.describe("Interrogating the Insurance Demo site", async () => {

    test.beforeEach(async ({page}) => {
        const commonActions = new Common(page);

        await commonActions.visitHomePage();
        await commonActions.waitForPageLoad("Your IndependentInsurance Agency")
    });

    test("Interrogating the ContactUs Page", async ({page}) => {
        const contactUsActions = new ContactUsPage(page);
        const commonActions = new Common(page);

        await contactUsActions.visitContactUsPage();
        await commonActions.waitForPageLoad("Contact Information");
        await contactUsActions.verifyContactUsPage();

    });

    test("Getting to step 1 of 4 - Auto Insurance Quote", async ({page}) => {
        const commonActions = new Common(page);
        const autoQuoteRequestActions = new AutoQuoteRequest(page);

        await commonActions.clickGetStartedButton();
        await autoQuoteRequestActions.clickAutoInsuranceButton();
        await autoQuoteRequestActions.fillQuoteRequestForm();
        await autoQuoteRequestActions.clickContinueStep2Button();
        await autoQuoteRequestActions.verifyAutoQuoteRequestPage1of4();
    });

});