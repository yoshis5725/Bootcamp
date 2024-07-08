import {test} from "@playwright/test";
import Common from "../actions/Common";
import AddVehicleTest from "../actions/AddVehicleTest";

test.describe("Adding a Vehicle", async () => {

    test.beforeEach(async ({page}) => {
        const commonActions = new Common(page);
        await commonActions.visitHomePage();
        await commonActions.waitForPageLoad("Your IndependentInsurance Agency");
    });

    test("Adding a Vehicle to the Quote Request", async ({page}) => {
        const addVehicleTestActions = new AddVehicleTest(page);
        const commonActions = new Common(page);

        await commonActions.hoverAndClickSupportLink();
        await addVehicleTestActions.verifyAddVehicleForm();
        await addVehicleTestActions.fillOutForm();
        await addVehicleTestActions.submitVehicleForm();
        await addVehicleTestActions.verifySuccessfulSubmission();
    });

});