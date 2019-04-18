// Time tracking metrics
// const startTime = Math.round(new Date());
// console.log('Starting time: ', startTime);
console.log('Started data generation at: ', new Date());
console.time('Data Generation');
////////////////////////////////////////////

const faker = require('faker');
const companyData = require('./stockList');

const sampleEarnings = [];
const EPSdate = ['Q4 2017', 'Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019'];

const createTickerID = () => {
    const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 
        'H', 'I', 'J', 'K', 'L', 'M', 'N',  
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
        'V', 'W', 'X', 'Y', 'Z' ]; 
    
    const allTickers = [];
    
    let tickerID;
    let tickerIDArr = [];

    for (let i = 0; i < 6; i++) {
        tickerIDArr.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    
    // Randomly insert a real stock tickerID from stockList companyData
    if (Math.random() * 500 % 7 === 3) {
        tickerID = companyData.ticker;
    } else {
        tickerID = tickerIDArr.join('');
    }

    if (allTickers.hasOwnProperty(tickerID)) {
        createTickerID();
    } else {
        return tickerID;
    }
}

const createCompanyName = () => {
    faker.company.companyName();
}

const generator = () => {
    // Populate all companies object with just one company
    // const numberOfCompanies = 26*26*26*26*22;
    const allCompanies = [];
    const numberOfCompanies = 1;
    for (let i = 0; i <= numberOfCompanies; i++) {
        allCompanies.push({
            ticker: createTickerID(),
            company: createCompanyName(),
        });
    }

    // Make sample data from quarterly earnings per company
    for (const company of allCompanies) {
        let actualEarning = Math.random() * 7;
        let estimatedEarning = actualEarning;
        
        let quarterNumber = 0;
        for (const quarter of EPSdate) {
            let range = Math.floor(Math.random() * 100);
            range *= Math.floor(Math.random() * 2) === 1 ? 0.45 : -0.40;
            actualEarning *= (1 + range / 100);
            actualEarning = actualEarning.toFixed(2);

            let estimateRange = Math.floor(Math.random() * 100);
            estimateRange *= Math.floor(Math.random() * 2) === 1 ? 0.10 : -0.10;
            estimatedEarning = actualEarning * (1 + estimateRange / 100);
            estimatedEarning = estimatedEarning.toFixed(2);

            sampleEarnings.push({
                ticker: company.ticker,
                company: company.company,
                actualEarning: Number(actualEarning),
                estimatedEarning: Number(estimatedEarning),
                quarter,
                quarterNumber,
            });
            quarterNumber += 1;
        }
    }
}
generator();

const convertToCSV = (objArray) => {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var strJSON = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
        strJSON += line + '\r\n';
    }
    return strJSON;
}

// Write the data to the supplied writable stream (buffer) one million times.
function writeTenMillionTimes(writer, encoding, callback) {
    let i = 10000000;
    write();
    function write() {
      const stockData = JSON.stringify(sampleEarnings);
      let ok = true;
      do {
        i--;
        if (i === 0) {
          // last time!
          writer.write(stockData, encoding, callback);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writer.write(stockData, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once('drain', write);
      }
    }
}
const ws = require('fs').createWriteStream('./writeMe.json');

writeTenMillionTimes(ws, 'utf8', (err, data) => {
    if (err) return console.log(err); 
    console.log('Completed Writestream');
    // if (err) return process.stdout.write(err); 
    // process.stdout.write('Completed Writestream');
    console.timeEnd('Data Generation');
});


// Time Tracking Metrics
//
// const millisToMinutesAndSeconds = (millis) => {
//     var minutes = Math.floor(millis / 60000);
//     var seconds = ((millis % 60000) / 1000).toFixed(0);
//     return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
// }

// const endTime = new Date().getTime();
// const endTime = Math.round(new Date() * 1); //divide by 1000 for secs
// const timeElapsed = endTime - startTime; 
// const converted = millisToMinutesAndSeconds(timeElapsed);
// console.log('Time elapsed: ', timeElapsed, ' milliseconds');
// console.log('Time elapsed: ', converted, ' minutes and seconds');


