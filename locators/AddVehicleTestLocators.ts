
const addVehicleTestLocators = {

    // links and buttons
    submitVehicleButton: "//input[@name='finish']",

    // elements
    mainHeader: "//div[@id='title_div']/h1",

    // form fields
    firstName: "//input[@id='fname']",
    lastName: "//input[@id='lname']",
    email: "//input[@id='email']",
    phone: "//input[@id='phone']",
    zip: "//input[@id='zip']",
    policyNumber: "//input[@name='form_data[policy_info][policy_number]']",
    effectiveMonth: "//select[@name='form_data[policy_info][_date_effective_date][month]']",
    effectiveDay: "//select[@name='form_data[policy_info][_date_effective_date][day]']",
    effectiveYear: "//select[@name='form_data[policy_info][_date_effective_date][year]']",
    numOfVehicles: "//select[@id='Number_of_Vehicles']",
    purchaseMonth: "//select[@name='form_data[vehicle_info][_date_purchase_date_1][month]']",
    purchaseDay: "//select[@name='form_data[vehicle_info][_date_purchase_date_1][day]']",
    purchaseYear: "//select[@name='form_data[vehicle_info][_date_purchase_date_1][year]']",
    vehicle1Year: "//input[@name='form_data[vehicle_info][year_1]']",
    vehicle1Make: "//input[@name='form_data[vehicle_info][make_1]']",
    vehicle1Model: "//input[@name='form_data[vehicle_info][model_1]']",
    vehicle1Vin: "//input[@name='form_data[vehicle_info][VIN_1]']",
    primaryDriver: "//input[@name='form_data[vehicle_info][primary_driver_1]']",
    currentOdometer: "//input[@name='form_data[vehicle_info][current_odometer_1]']",
    commuteDistance: "//input[@name='form_data[vehicle_info][one_way_commute_distance_1]']",
    estimatedMilage: "//input[@name='form_data[vehicle_info][yearly_mileage_1]']",
    ownership: "//select[@name='form_data[vehicle_info][ownership_1]']",
    primaryUse: "//select[@name='form_data[vehicle_info][use_1]']",
    antiTheftFeatures: "select[name='form_data[vehicle_info][anti_theft_features_1][]']",
    passiveRestraints: "select[name='form_data[vehicle_info][passive_restraints_1][]']",
    anti_lockBrakes: "//select[@name='form_data[vehicle_info][Anti-Lock_brakes_1]']",
    dayTimeRunningLights: "//select[@name='form_data[vehicle_info][daytime_running_lights_1]']",
    priorDamage: "//select[@name='form_data[vehicle_info][prior_damage_1]']",
    usedForDeliveries: "//select[@name='form_data[vehicle_info][used_for_delivery_1]']",
    comprehensiveDeductible: "//select[@name='form_data[vehicle_info][comprehensive_deductible_1]']",
    collisionDeductible: "(//select[@name='form_data[vehicle_info][collision_deductible_1]'])[1]",
    glassCoverage: "(//select[@name='form_data[vehicle_info][collision_deductible_1]'])[2]",
    agentName: "//input[@name='form_data[additional_information][agent]']",
}

export default addVehicleTestLocators;