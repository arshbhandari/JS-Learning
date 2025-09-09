const month = 2

switch(month){
    case 1:
        console.log("jan")
        break
    case 2:
        console.log("feb")
        break             // if break will be removed than all the next cases will be executed except default
    case 3:
        console.log("mar")
        break
    default:
        console.log("dec")
        break
}