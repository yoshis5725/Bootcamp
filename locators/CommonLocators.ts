const commonLocators = {

    // elements
    skrollrBody: "//div[@id='skrollr-body']",
    mainHeader: "//main[@id='main']/h1",

    // links and buttons
    getStartedButton: {role: 'link' as const, name: 'GET STARTED'},
    supportLink: "//a[@aria-label='Support']",
    addVehicleLink: "text=Add a Vehicle Form",
};


export default commonLocators;