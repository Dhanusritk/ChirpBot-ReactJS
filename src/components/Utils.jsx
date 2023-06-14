import moment from "moment"
export const analyze= (text) =>{
    // if(Array.isArray(text)){

    
    if(text.toString().includes('hi')|| text.toString().includes('hai')|| text.toString().includes('hello')
    || text.toString().includes('hey'))
    return 'Hi, How can I help you'
    else if(text.toString().includes('date'))
    return moment().format('MMMM do YYYY')
    else if(text.toString().includes('time'))
    return moment().format('h:mm:ss a')
    else if(text.toString().includes('Thanks') || text.toString().includes('thank'))
    return 'Happy to help you! Have a nice day'
    else
    return ' Sorry, I can get you. Can you please rephrase your sentence'
    // }
    // else{
    //     return 'Caught up error'
    // }
}