class ElDev {
    /*Electricity device
    Property specification:
        #psu - power supply (alternating current ('AC')/ direct current ('DC')
        #voltage - supply voltage ([V])
        #power - device power([W])
        #status - device is on ('ON') or off ('OFF')
        #powerOnCounter - counts how many time the device has been turned on
        #isbroken - is the device broken
        #plugged - plugged into the wall
    Method specification:
        Toggle() - changes the status if it's plugged in
        Plug() - plug or unplugs device
        Brake() - breaks device
        Repair() - repairs device
    */
    #psutype; #voltage; #power; #status; #powerOnCounter; #isbroken; #plugged
    constructor(psutype, voltage, power, status, plugged) {
        this.psutype = psutype
        this.voltage = voltage
        this.power = power
        this.status = status
        this.powerOnCounter = 0
        this.isbroken = false
        this.plugged = plugged
    }

    // Power supply type

    set psutype(psutype){
        if(!(psutype == "AC" || psutype == "DC")){
            throw new Error("Variable psutype can only be set to 'AC' or 'DC'!")
        }
        this.#psutype = psutype
    }
    get psutype(){ return this.#psutype}

    // Voltage

    set voltage(voltage){
        if(!(typeof(voltage) == "number")){
            throw new TypeError("The parameter 'voltage' must be a number!")
        }
        if(voltage < 0){
            throw new RangeError("The value of the parameter 'voltage' must not less than 0!")
        }
        this.#voltage = voltage
    }
    get voltage(){ return this.#voltage}

    // Power (wattage)

    set power(power){
        if(!(typeof(power) == "number")){
            throw new TypeError("The parameter 'power' must be a number!")
        }
        if(power < 0){
            throw new RangeError("The value of the parameter 'power' must not less than 0!")
        }
        this.#power = power
    }
    get power(){ return this.#power}

    // Current status

    set status(status){
        if(!(status == "ON" || status == "OFF")){
            throw new Error("Variable 'status' can only be set to 'ON' or 'OFF'!")
        }
        this.#status = status
    }
    get status(){ return this.#status}

    // Power on counter
    set powerOnCounter(powerOnCounter){
        if(!(typeof(powerOnCounter) == "number")){
            throw new TypeError("The parameter 'powerOnCounter' must be a number!")
        }
        this.#powerOnCounter = powerOnCounter
    }
    get powerOnCounter(){ return this.#powerOnCounter}

    // Broken status
    set isbroken(isbroken){
        if(!(typeof(isbroken) == "boolean")){
            throw new TypeError("The parameter 'isbroken' must be a boolean!")
        }
        this.#isbroken = isbroken
    }
    get isbroken(){ return this.#isbroken}

    // Plugged

    set plugged(plugged){
        if(!(typeof(plugged) == "boolean")){
            throw new TypeError("The parameter 'plugged' must be a boolean!")
        }
        this.#plugged =  plugged
    }
    get plugged(){ return this.#plugged}

    // Turning on or off device

    Toggle(){
        if(this.plugged == false){
            return "Device is not plugged in"
        }
        if(this.isbroken){
            document.getElementById("togg").innerHTML = "Urządzenie jest uszkodzone"
            return "Device is broken"
        }
        if(this.status == "OFF"){
            this.powerOnCounter += 1
            this.status = "ON"
            this.CanUse()
            if(this.powerOnCounter > 5){
                document.getElementById("togg").innerHTML = "Urządzenie jest uszkodzone"
                this.Break()
                return "Device is broken"
            }
            document.getElementById("togg").innerHTML = this.status
        }
        else{
            this.status = "OFF"
            document.getElementById("togg").innerHTML = this.status
            this.CanUse()
        }
    }

    // Plug

    Plug(){
        this.plugged = !this.plugged
        if(this.plugged == true)
            document.getElementById("tog").removeAttribute("disabled")
        else{
            document.getElementById("tog").setAttribute("disabled", "disabled")
            this.status = "OFF"
        }
        document.getElementById("togg").innerHTML = this.status
        this.CanUse()
    }

    // Breaking and reparing device

    Break(){
        this.isbroken = true
        this.status = "OFF"
        this.plugged = false
        document.getElementById("plug").setAttribute("disabled", "disabled")
        document.getElementById("tog").setAttribute("disabled", "disabled")
        this.CanUse()
    }
    Repair() {
        this.isbroken = false
        this.powerOnCounter = 0
        document.getElementById("togg").innerHTML = this.status
        document.getElementById("plug").removeAttribute("disabled")
    }
}

class AGDDev extends ElDev {
    /* AGD device
    Property specification:
        #typeDev - type of the device (for eg. steamer, cooker, washer etc.)
        #energyClass - energy class according to the standard in 2024 in Europe (one capital letter , egz. "A", "G")
        #mtbf - maintaince time before failure
        #width - width in mm
        #height - height in mm
        #depth - depth in mm
        #weight - weight in kg
    */
    #typeDev; #energyClass; #mtbf;  #width; #height; #depth; #weight 
    constructor(psutype, voltage, power, status, plugged, typeDev, energyClass, mtbf,  width, height, depth, weight) {
        super(psutype, voltage, power, status, plugged)
        this.typeDev = typeDev
        this.energyClass = energyClass
        this.mtbf = mtbf
        this.width = width
        this.height = height
        this.depth = depth
        this.weight = weight
    }
    
    // Device type

    set typeDev(typeDev){
        if(!(typeof(typeDev) == "string")){
            throw new TypeError("The parameter 'typeDev' must be a string!")
        }
        this.#typeDev = typeDev
    }
    get typeDev(){ return this.#typeDev}

    // Energy class

    set energyClass(energyClass){
        let re = new RegExp("^[A-G]$|^None$")
        if (!re.test(energyClass)) {
            throw new Error(`Energy class can contain only one symbol from A to G!`)
        }
        this.#energyClass=energyClass
    }
    get energyClass() {return this.#energyClass}
    
    // MTBF

    set mtbf(mtbf){
        if(!(typeof(mtbf) == "number")){
            throw new TypeError("The parameter 'mtbf' must be a number!")
        }
        if(mtbf < 0){
            throw new RangeError("The value of the parameter 'mtbf' must not less than 0!")
        }
        this.#mtbf = mtbf
    }
    get mtbf(){ return this.#mtbf}

    // Width

    set width(width){
        if(!(typeof(width) == "number")){
            throw new TypeError("The parameter 'width' must be a number!")
        }
        if(width < 0){
            throw new RangeError("The value of the parameter 'width' must not less than 0!")
        }
        this.#width = width
    }
    get width(){ return this.#width}

    // Height

    set height(height){
        if(!(typeof(height) == "number")){
            throw new TypeError("The parameter 'height' must be a number!")
        }
        if(height < 0){
            throw new RangeError("The value of the parameter 'height' must not less than 0!")
        }
        this.#height = height
    }
    get height(){ return this.#height}

    // Depth

    set depth(depth){
        if(!(typeof(depth) == "number")){
            throw new TypeError("The parameter 'depth' must be a number!")
        }
        if(depth < 0){
            throw new RangeError("The value of the parameter 'depth' must not less than 0!")
        }
        this.#depth = depth
    }
    get depth(){ return this.#depth}

    // Weight

    set weight(weight){
        if(!(typeof(weight) == "number")){
            throw new TypeError("The parameter 'weight' must be a number!")
        }
        if(weight < 0){
            throw new RangeError("The value of the parameter 'weight' must not less than 0!")
        }
        this.#weight = weight
    }
    get weight(){ return this.#weight}

}

class Steamer extends AGDDev{
    /* Steamer
    Property specification:
        #manufacturer - steamer manufacturer
        #container - capacity of steamer water container (in ml)
        #calbe - caple length
        #color - steamer color
        #material - base coating
    */
    #manufacturer; #container; #cable; #color; #material; #containerUsage;
    constructor(psutype, voltage, power, status, plugged, typeDev, energyClass, mtbf,  width, height, depth, weight, manufacturer, container, cable, color, material){
        super(psutype, voltage, power, status, plugged, typeDev, energyClass, mtbf,  width, height, depth, weight)
        this.manufacturer = manufacturer
        this.container = container
        this.cable = cable
        this.color = color
        this.material = material
        this.container = container
        this.containerUsage = 0
    }

    // Manufacturer

    set manufacturer(manufacturer){
        if(!(typeof(manufacturer) == "string")){
            throw new TypeError("The parameter 'manufacturer' must be a string!")
        }
        this.#manufacturer = manufacturer
    }
    get manufacturer(){ return this.#manufacturer}

    // Container

    set container(container){
        if(!(typeof(container) == "number")){
            throw new TypeError("The parameter 'container' must be a number!")
        }
        this.#container = container
    }
    get container(){ return this.#container}

    // Cable

    set cable(cable){
        if(!(typeof(cable) == "number")){
            throw new TypeError("The parameter 'cable' must be a number!")
        }
        this.#cable = cable
    }
    get cable(){ return this.#cable}

    // Color

    set color(color){
        if(!(typeof(color) == "string")){
            throw new TypeError("The parameter 'color' must be a string!")
        }
        this.#color = color
    }
    get color(){ return this.#color}

    // Material

    set material(material){
        if(!(typeof(material) == "string")){
            throw new TypeError("The parameter 'material' must be a string!")
        }
        this.#material = material
    }
    get material() {return this.#material}

    // Container

    set container(container){
        if(!(typeof(container) == "number")){
            throw new TypeError("The parameter 'container' must be a number!")
        }
        this.#container = container
    }
    get container(){ return this.#container}

    // Container Usage

    set containerUsage(containerUsage){
        if(!(typeof(containerUsage) == "number")){
            throw new TypeError("The parameter 'containerUsage' must be a number!")
        }
        this.#containerUsage = containerUsage
    }
    get containerUsage(){ return this.#containerUsage}

    async Fill(){
        this.containerUsage = this.container
        document.getElementById("fill").innerHTML = this.containerUsage
        document.getElementById("image").src = "pojemnik.png"
        document.getElementById("dev").style.display = "none"
        await new Promise(resolve => setTimeout(resolve, 3000)) // Skopiowane
        document.getElementById("dev").style.display = "block"
        document.getElementById("image").src = "parownica.jpg"
        this.CanUse()
    }
    async Use(){
        if (this.containerUsage > 0){
            document.getElementById("image").src = "paruje.png"
            document.getElementById("dev").style.display = "none"
            await new Promise(resolve => setTimeout(resolve, 3000)) // Skopiowane
            document.getElementById("image").src = "parownica.jpg"
            document.getElementById("dev").style.display = "block"
            this.containerUsage = this.containerUsage - 10
            document.getElementById("fill").innerHTML = this.containerUsage
            this.CanUse()
        }  
    }


    CanUse(){
        if((this.isbroken == false) && (this.status == "ON") && (this.containerUsage > 0) ){
            document.getElementById("us").removeAttribute("disabled");
        }
        else{
            document.getElementById("us").setAttribute("disabled","disabled");
        }
    }
}

// Steamer based on Electrolux Refine 700
// This device does not have a energy class

var mySteamer = new Steamer("AC", 230, 1400, "OFF", false, "Parownica", "None", 5, 124, 153.5, 344, 0.825, "Electrolux", 100, 3, "Granatowy", "Ceramiczna")


function paramLister(){
    let list = document.getElementById("paramList")
    list.innerHTML = `<li>Rodzaj zasilania: ${mySteamer.psutype}</li>
    <li>Napięcie: ${mySteamer.voltage}</li>
    <li>Moc: ${mySteamer.power}</li>
    <li>Aktualny status: ${mySteamer.status}</li>
    <li>Czy podłączone: ${mySteamer.plugged}</li>
    <li>Nazwa urządzenia: ${mySteamer.typeDev}</li>
    <li>Klasa energetyczna: ${mySteamer.energyClass}</li>
    <li>MTBF: ${mySteamer.mtbf}</li>
    <li>Szerokość: ${mySteamer.width}</li>
    <li>Wysokość: ${mySteamer.height}</li>
    <li>Głębokość: ${mySteamer.depth}</li>
    <li>Waga: ${mySteamer.weight}</li>
    <li>Producent: ${mySteamer.manufacturer}</li>
    <li>Pojemność zbiornika: ${mySteamer.container}</li>
    <li>Długość przewodu: ${mySteamer.cable}</li>
    <li>Kolor: ${mySteamer.color}</li>
    <li>Powłoka podstawy: ${mySteamer.material}</li>`
}
paramLister()

function changeDiv(){
    document.getElementById("param").style.display = "none"
    document.getElementById("dev").style.visibility = "visible"
    document.getElementById("image").style.visibility = "visible"
}
