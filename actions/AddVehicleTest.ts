import {expect, Page} from "@playwright/test";
import {faker} from "@faker-js/faker";
import addVehicleTestLocators from "../locators/AddVehicleTestLocators";
import commonLocators from "../locators/CommonLocators";


class AddVehicleTest {
    constructor(private page: Page) {}

    // ------------------- Helper Functions -------------------

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    getRandomNumberBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomYear() {
        return this.getRandomInt(24) + 2000;
    }


    // ------------------- Test Functions -------------------

    async verifyAddVehicleForm() {
        await expect(this.page.locator(addVehicleTestLocators.mainHeader)).toHaveText("Secure Add a Vehicle Request Form");
    }

    async verifySuccessfulSubmission() {
        await expect(this.page.locator(commonLocators.mainHeader)).toHaveText("Thank You");
    }

    async submitVehicleForm() {
        await this.page.click(addVehicleTestLocators.submitVehicleButton);
    }

    async fillOutForm() {
        await this.page.fill(addVehicleTestLocators.firstName, faker.person.firstName());
        await this.page.fill(addVehicleTestLocators.lastName, faker.person.lastName());
        await this.page.fill(addVehicleTestLocators.email, faker.internet.email());
        await this.page.fill(addVehicleTestLocators.phone, faker.phone.number());
        await this.page.fill(addVehicleTestLocators.zip, faker.location.zipCode());
        await this.page.fill(addVehicleTestLocators.policyNumber, `D12-${faker.string.alpha(10)}`);
        await this.page.selectOption(addVehicleTestLocators.effectiveMonth, "January");
        await this.page.selectOption(addVehicleTestLocators.effectiveDay, "12");
        await this.page.selectOption(addVehicleTestLocators.effectiveYear, "2025");
        await this.page.selectOption(addVehicleTestLocators.numOfVehicles, "1");
        await this.page.selectOption(addVehicleTestLocators.purchaseMonth, "August");
        await this.page.selectOption(addVehicleTestLocators.purchaseDay, "15");
        await this.page.selectOption(addVehicleTestLocators.purchaseYear, "2022");
        await this.page.fill(addVehicleTestLocators.vehicle1Year, this.getRandomYear().toString());
        await this.page.fill(addVehicleTestLocators.vehicle1Make, faker.vehicle.manufacturer());
        await this.page.fill(addVehicleTestLocators.vehicle1Model, faker.vehicle.model());
        await this.page.fill(addVehicleTestLocators.vehicle1Vin, faker.vehicle.vin());
        await this.page.fill(addVehicleTestLocators.primaryDriver, faker.person.fullName());
        await this.page.fill(addVehicleTestLocators.currentOdometer, this.getRandomInt(60000).toString());
        await this.page.fill(addVehicleTestLocators.commuteDistance, this.getRandomInt(100).toString());
        await this.page.fill(addVehicleTestLocators.estimatedMilage, this.getRandomNumberBetween(10000, 20000).toString());
        await this.page.selectOption(addVehicleTestLocators.ownership, "Owned");
        await this.page.selectOption(addVehicleTestLocators.primaryUse, "Pleasure");
        await this.page.selectOption(addVehicleTestLocators.antiTheftFeatures, {value: "Vehicle Recovery System"});
        await this.page.selectOption(addVehicleTestLocators.passiveRestraints, {value: "Passenger Airbag"});
        await this.page.selectOption(addVehicleTestLocators.anti_lockBrakes, "Yes");
        await this.page.selectOption(addVehicleTestLocators.dayTimeRunningLights, "Yes");
        await this.page.selectOption(addVehicleTestLocators.priorDamage, "No");
        await this.page.selectOption(addVehicleTestLocators.usedForDeliveries, "No");
        await this.page.selectOption(addVehicleTestLocators.comprehensiveDeductible, "500");
        await this.page.selectOption(addVehicleTestLocators.collisionDeductible, "500");
        await this.page.selectOption(addVehicleTestLocators.glassCoverage, "Yes");
        await this.page.fill(addVehicleTestLocators.agentName, faker.person.fullName());
    }

}

export default AddVehicleTest;