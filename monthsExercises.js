function solution(date) {
    date = "MM-DD"
    // function number(long, short) {
    //     long = "31";
    //     short = 30;
    // }
    
    const January = 31;
    const February = 28;
    const March = 31;
    const April = 30;
    const May = 31;
    const June = 30;
    const July = 31;
    const August = 31;
    const September = 30;
    const October = 31;
    const November = 30;
    const December = 31;
    
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let validMonth = January;

    // if validMonth == 31 (
    //     console.log("!!-!!"),
    // ); else(
    //     console.log("xx-xx")
    // )
    
    rl.question('Enter month: ', (month) => {
        console.log(`The month was chosen is: *${month}*`)
        rl.close();
    });
}

solution();