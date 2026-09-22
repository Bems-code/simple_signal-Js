import { Network } from "./Network.js";

// Function to be used in connection
function logData(...data){
    console.log(...data)
}

// Function to be used in connection
function logDataType(...data){
    let type = ''

    for (const arg of data) {
        type = type + ' ' + typeof(arg)
    }

    console.log(type)
}

// Function to activate all connections
function activate(...data){
    Network.onActivate:Fire(...data)
    console.log('__ACTIVATION_EVENT__')
}


activate('1', 2, 'three', 'uh', 6, 'seven')

// Setup Connections || Note that both connect to the same signal
Network.onActivate.Connected(handleActivation)
Network.onActivate.Connected(handleActivation_DUPE)