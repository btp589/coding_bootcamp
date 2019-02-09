switch (process.argv[2]) {
    case 'add':
    console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
    break;

    case 'subtract':
    console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]));
    break;

    case 'multiply':
    console.log(parseInt(process.argv[3]) * parseInt(process.argv[4]));
    break;

    case 'divide':
    console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]));
    break;

    case 'remainder':
    console.log(parseInt(process.argv[3]) % parseInt(process.argv[4]));
    break;

    case 'exp':
    console.log(Math.pow(parseInt(process.argv[3]), parseInt(process.argv[4])));
    break;

    case 'algebra':
    var a = parseInt(process.argv[3]); //4
    var b = process.argv[4]; //x
    var c = process.argv[5]; //+
    var d = parseInt(process.argv[6]); //2
    var e = parseInt(process.argv[7]); //10

    b = (e - d) / a;
    
    console.log();


    break;
}
