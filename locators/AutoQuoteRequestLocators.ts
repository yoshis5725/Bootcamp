

const autoQuoteRequestLocators = {

    // buttons
    autoInsuranceButton: {role: 'link' as const, name: ' Auto Insurance'},
    continueStep2Button: "#sfs-one-start",

    // headers
    subHeader: "//div[@id='progress_id']/h3",

    // form fields
    firstName: "#fname",
    lastName: "#lname",
    email: "#email",
    phone: "#phone",
    zip: "#zip",
    referringAgent: "//select[@name='referring_agent']",
}

export default autoQuoteRequestLocators;