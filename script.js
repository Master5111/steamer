class ElDev {
    /*Electricity device
    property specification:
        #psu - power supply (alternating current ('AC')/ direct current ('DC')
        #voltage - supply voltage ([V])
        #power - device power([W])
        #status - device is on ('ON') or off ('OFF')
        #usable - 'True' if usable
        #powerOnCounter
    out parameters:
        voltage_in - input voltage 
    method specification:
        on(voltage_in='') - device enable
        off() - device disable
        report() - show status info
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
                property specification:
                    #lCycles - life cycles,
                    #width, #height, #depth - device size
                    #weight - device weight
                    #typeDev - e.g. fridge, toaster, electric kettle, iron, washing machine,
                        hair dryer,  clothes dryer, razor, hair trimmer, dishwasher, cleaner, juicer, mixer, blender,
                        coffee grinder, meat grinder, air humidifier, coffee machine, electric cooker, microwave,
                        waffle maker, fryer, food processor, electric oven, planetary robot, steamer, mushroom dryer,
                        fruit dryer, boiler, electric heater, freezer, hair curler,
                    #n
                        #MTBF

        */
        #typeDev; #energyClass; #MTBF;  #width; #height; #depth; #weight 
       constructor(psutype, voltage, power, status, plugged, typeDev, energyClass, MTBF,  width, height, depth, weight) {
           super(psutype, voltage, power, status, plugged)
           this.#typeDev = typeDev
           this.#energyClass = energyClass
           this.#MTBF = MTBF
           this.#width = width
           this.#height = height
           this.#depth = depth
           this.#weight = weight
       }

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