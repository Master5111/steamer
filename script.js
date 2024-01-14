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
        this.#powerOnCounter = 0
        this.#isbroken = false
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

    get powerOnCounter(){ return this.#powerOnCounter}

    // Broken status

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
        if(this.status == "OFF"){
            this.#powerOnCounter += 1
            this.status = "ON"
        }
        else{
            this.status = "OFF"
        }
    }

    // Plug

    Plug(){
        this.plugged = !this.plugged
    }

    // Breaking and reparing device

    Break(){
        this.#isbroken = true
        this.status = "OFF"
    }
    Repair() {
        this.#isbroken = false
    }
}

class AGDDev extends ElDev {
    /* AGD device
    Property specification:
        #typeDev - type of the device (for eg. steamer, cooker, washer etc.)
        #energyClass - energy class according to the standard in 2024 in Europe (one capital letter , egz. "A", "G")
        #mtbf - maintaince time before failure
        #width - width
        #height - height
        #depth - depth 
        #weight - weight
    */
    #typeDev; #energyClass; #mtbf;  #width; #height; #depth; #weight 
    constructor(psutype, voltage, power, status, plugged, typeDev, energyClass, mtbf,  width, height, depth, weight) {
        super(psutype, voltage, power, status, plugged)
        this.#typeDev = typeDev
        this.#energyClass = energyClass
        this.mtbf = mtbf
        this.width = width
        this.height = height
        this.depth = depth
        this.weight = weight
    }
    
    // Device type

    // Maybe add another error and/or limits
    set typeDev(typeDev){
        if(!(typeof(typeDev) == "string")){
            throw new TypeError("The parameter 'typeDev' must be a string!")
        }
        this.#typeDev = typeDev
    }
    get typeDev(){ return this.#typeDev}

    // Energy class

    set energyClass(energyClass){
        let re = new RegExp("^[A-G]$")
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

class steamer extends AGDDev{
    #manufacturer; #container
    constructor(psutype, voltage, power, status, plugged, typeDev, energyClass, mtbf,  width, height, depth, weight, manufacturer, container){
        super(psutype, voltage, power, status, plugged, typeDev, energyClass, mtbf,  width, height, depth, weight)
        this.manufacturer = manufacturer
        this.container = container
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
        if(!(typeof(container) == "string")){
            throw new TypeError("The parameter 'container' must be a string!")
        }
        this.#container = container
    }
    get container(){ return this.#container}
}