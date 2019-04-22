const faker = require('faker');
const originalStocksArr = [
  { id: '001', ticker: 'SNAP', company: 'Snap' },
  { id: '002', ticker: 'TSLA', company: 'Tesla' },
  { id: '003', ticker: 'AMZN', company: 'Amazon' },
  { id: '004', ticker: 'TWTR', company: 'Twitter' },
  { id: '005', ticker: 'BABA', company: 'Alibaba' },
  { id: '006', ticker: 'BAC', company: 'Bank of America' },
  { id: '007', ticker: 'NFLX', company: 'Netflix' },
  { id: '008', ticker: 'NVDA', company: 'NVIDIA' },
  { id: '009', ticker: 'DIS', company: 'Disney' },
  { id: '010', ticker: 'PLUG', company: 'Plug Power' },
  { id: '011', ticker: 'SQ', company: 'Square' },
  { id: '012', ticker: 'ZNGA', company: 'Zynga' },
  { id: '013', ticker: 'CHK', company: 'Chesapeake Energy' },
  { id: '014', ticker: 'NIO', company: 'NIO' },
  { id: '015', ticker: 'T', company: 'AT&T' },
  { id: '016', ticker: 'HEXO', company: 'Hexo' },
  { id: '017', ticker: 'MU', company: 'Micron Technology' },
  { id: '018', ticker: 'GRPN', company: 'Groupon' },
  { id: '019', ticker: 'SBUX', company: 'Starbucks' },
  { id: '020', ticker: 'APHA', company: 'Aphria' },
  { id: '021', ticker: 'RAD', company: 'Rite Aid' },
  { id: '022', ticker: 'SIRI', company: 'Sirius XM' },
  { id: '023', ticker: 'ATVI', company: 'Activision Blizzard' },
  { id: '024', ticker: 'NTDOY', company: 'Nintendo' },
  { id: '025', ticker: 'NKE', company: 'Nike' },
  { id: '026', ticker: 'INTC', company: 'Intel' },
  { id: '027', ticker: 'IQ', company: 'iQIYI' },
  { id: '028', ticker: 'VOO', company: 'Vanguard' },
  { id: '029', ticker: 'S', company: 'Sprint' },
  { id: '030', ticker: 'WFT', company: 'Weatherford' },
  { id: '031', ticker: 'KO', company: 'Coca-Cola' },
  { id: '032', ticker: 'BRK', company: 'Berkshire Hathaway' },
  { id: '033', ticker: 'TLRY', company: 'Tilray' },
  { id: '034', ticker: 'BA', company: 'Boeing' },
  { id: '035', ticker: 'MJ', company: 'ETFMG Alternative Harvest' },
  { id: '036', ticker: 'JD', company: 'JD.com' },
  { id: '037', ticker: 'V', company: 'Visa' },
  { id: '038', ticker: 'AUY', company: 'Yamana Gold' },
  { id: '039', ticker: 'SPY', company: 'SPDR' },
  { id: '040', ticker: 'GERN', company: 'Geron' },
  { id: '041', ticker: 'PYPL', company: 'PayPal' },
  { id: '042', ticker: 'TCEHY', company: 'Tencent' },
  { id: '043', ticker: 'GOOGL', company: 'Alphabet' },
  { id: '044', ticker: 'CSCO', company: 'Cisco' },
  { id: '045', ticker: 'CRM', company: 'Salesforce' },
  { id: '046', ticker: 'ROKU', company: 'Roku' },
  { id: '047', ticker: 'CRBP', company: 'Corbus Pharmaceuticals' },
  { id: '048', ticker: 'DBX', company: 'Dropbox' },
  { id: '049', ticker: 'WMT', company: 'Walmart' },
  { id: '050', ticker: 'JCP', company: 'J.C. Penney' },
  { id: '051', ticker: 'GM', company: 'GM' },
  { id: '052', ticker: 'VTI', company: 'Vanguard Total' },
  { id: '053', ticker: 'BILI', company: 'Bilibili' },
  { id: '054', ticker: 'NOK', company: 'Nokia' },
  { id: '055', ticker: 'GLUU', company: 'Glu Mobile' },
  { id: '056', ticker: 'VZ', company: 'Verizon' },
  { id: '057', ticker: 'VSLR', company: 'Vivint Solar' },
  { id: '058', ticker: 'SHOP', company: 'Shopify' },
  { id: '059', ticker: 'CARA', company: 'Cara Therapeutics' },
  { id: '060', ticker: 'SNE', company: 'Sony' },
  { id: '061', ticker: 'PFE', company: 'Pfizer' },
  { id: '062', ticker: 'ENPH', company: 'Enphase Energy' },
  { id: '063', ticker: 'CVS', company: 'CVS' },
  { id: '064', ticker: 'SPOT', company: 'Spotify' },
  { id: '065', ticker: 'COST', company: 'Costco' },
  { id: '066', ticker: 'TRXC', company: 'TransEnterix' },
  { id: '067', ticker: 'TWLO', company: 'Twilio' },
  { id: '068', ticker: 'PCG', company: 'PG&E' },
  { id: '069', ticker: 'KHC', company: 'Kraft Foods' },
  { id: '070', ticker: 'INSY', company: 'Insys Therapeutics' },
  { id: '071', ticker: 'AKS', company: 'AK Steel' },
  { id: '072', ticker: 'LUV', company: 'Southwest Airlines' },
  { id: '073', ticker: 'CRSP', company: 'CRISPR' },
  { id: '074', ticker: 'FDX', company: 'FeDex' },
  { id: '075', ticker: 'VKTX', company: 'Viking Therapeutics' },
  { id: '076', ticker: 'JPM', company: 'JPMorgan Chase' },
  { id: '077', ticker: 'DNR', company: 'Denbury' },
  { id: '078', ticker: 'SPWR', company: 'SunPower' },
  { id: '079', ticker: 'UAA', company: 'Under Armour' },
  // eslint-disable-next-line max-len
  { id: '080', ticker: 'BOTZ', company: 'Global X Robotics & Artificial Intelligence ETF' },
  { id: '081', ticker: 'SFIX', company: 'Stitch Fix' },
  { id: '082', ticker: 'AMAT', company: 'Applied Materials' },
  { id: '083', ticker: 'YETI', company: 'YETI' },
  { id: '084', ticker: 'EA', company: 'EA' },
  { id: '085', ticker: 'QCOM', company: 'Qualcomm' },
  { id: '086', ticker: 'TGT', company: 'Target' },
  { id: '087', ticker: 'TEVA', company: 'Teva Pharmaceutical' },
  { id: '088', ticker: 'JNJ', company: 'Johnson & Johnson' },
  { id: '089', ticker: 'IIPR', company: 'Innovative Industrial Properties' },
  { id: '090', ticker: 'ACB', company: 'Aurora Cannabis' },
  { id: '091', ticker: 'GE', company: 'GE' },
  { id: '092', ticker: 'AAPL', company: 'Apple' },
  { id: '093', ticker: 'F', company: 'Ford' },
  { id: '094', ticker: 'CRON', company: 'Cronos Group' },
  { id: '095', ticker: 'MSFT', company: 'Microsoft' },
  { id: '096', ticker: 'GPRO', company: 'GoPro' },
  { id: '097', ticker: 'FIT', company: 'Fitbit' },
  { id: '098', ticker: 'AMD', company: 'AMD' },
  { id: '099', ticker: 'FB', company: 'Facebook' },
  { id: '100', ticker: 'CGC', company: 'Canopy Growth' }
];
const EPSdate = ['Q4 2017', 'Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019'];
const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]; 

const thousand = 1e3;
const million = 1e6;
const tenMil = 1e7;
const ws = require('fs').createWriteStream('./database/Earning/writeMe.CSV');

// The original 100 stocks from stockList have three stocks with 5 letter tickers.
var noDuplicateOriginal100 = ['GOOGL', 'TCEHY', 'NTDOY'];

// Make a class to store a .next count (improve time complexity) and attach methods to
class Generator {
  constructor(num) {
    this.count = num;
    this.next = num + 1;
    this.turnCountIntoId = this.turnCountIntoId.bind(this);
    this.createCompanyName = this.createCompanyName.bind(this);
    this.generator = this.generator.bind(this);
    this.convertToCSV = this.convertToCSV;
  }

  // Make tickerIDs one by one (Improve time and space complexity, overall contributing O(n + 3) worst case)
  turnCountIntoId(num) {
    let tickerLength = 5;
    let arrayTicker = [];
    let digits = [];
    let base = 26;

    if (num < 100) {
      return originalStocksArr[num].ticker;
    } 
  
    // else, create the ticker id based on the argument 'count'
    while (num > 1) {
      let remainder = num % base;
      digits.push(remainder);
      num = Math.floor(num/base);
    }

    // Zero-space the ticker id, currently stored as base 26 digits
    for (let j = digits.length; j < tickerLength; j++) {
      digits.unshift(0);
    }

    // Translate to real letters, array to string
    for (let i = 0; i < digits.length; i++) {
      arrayTicker.push(alphabet[digits[i]]);
    }
    let tickerId = arrayTicker.join('');

    // Check for duplicates
    this.count += 1;
    this.next += 1;
    if (noDuplicateOriginal100.includes(tickerId)) {
      const avoidDuplicate = this.turnCountIntoId(this.next);
      return avoidDuplicate;
    } else {
      return tickerId;
    } 
  }

  // Make or retrieve company names, via the original 100 stocks array
  createCompanyName (num) {
    if (num < 100) {
      return originalStocksArr[num].company;
    } else {
      return faker.company.companyName().split(',').join(' ');
    }
  }

  // Make seven quarterly earnings stock data at a time, per stock ticker; increment count
  generator (count) {
    let stockEarnings = [];

    let actualEarning = Math.random() * 7;
    let estimatedEarning = actualEarning;

    let quarterNumber = 0;
    let ticker = this.turnCountIntoId(count);
    let companyName = this.createCompanyName(count);

    for (const quarter of EPSdate) {
      // Make a random actual earnings, repeated 7 quarters per company
      let range = Math.floor(Math.random() * 100);
      range *= Math.floor(Math.random() * 2) === 1 ? 0.45 : -0.40;
      actualEarning *= (1 + range / 100);
      actualEarning = actualEarning.toFixed(2);

      // Make a random estimated earnings, repeated 7 quarters per company
      let estimateRange = Math.floor(Math.random() * 100);
      estimateRange *= Math.floor(Math.random() * 2) === 1 ? 0.10 : -0.10;
      estimatedEarning = actualEarning * (1 + estimateRange / 100);
      estimatedEarning = estimatedEarning.toFixed(2);

      // Add to results array 'stockEarnings'
      stockEarnings.push({
          ticker,
          company: companyName,
          actualEarning: Number(actualEarning),
          estimatedEarning: Number(estimatedEarning),
          quarter,
          quarterNumber
      });
      quarterNumber += 1;
    }
    return stockEarnings;
}

  // Convert array of objects to a CSV file without headers, HEADERS NULL
  convertToCSV (objArray) {
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
}

// Write the data to the supplied writable stream (buffer) one million times.
const writeTenMillionTimes = (writer, encoding, callback) => {
  let i = tenMil;
  let countWritten = 0;
  let countTicker = 0;
  write();
  function write() {
    let ok = true;
    do {
      const generateSeven = dataGen.generator(countTicker);
      const stockData = dataGen.convertToCSV(generateSeven);
      process.stdout.write(stockData);
      countTicker++;
      i--;
      if (i === 0) {
        writer.write(stockData, encoding, callback);
      } else {
        ok = writer.write(stockData, encoding);
        if (countWritten % million === 0) {
          console.error('Million stocks written: ', countWritten, '| Uptime (Seconds)', process.uptime());
        }
        countWritten++;
      }
    } while (i > 0 && ok);

    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

const dataGen = new Generator(1);
  
dataGen.generator(1);

writeTenMillionTimes(ws, 'utf8', (err) => {
  if (err) return console.log(err); 
  console.error(process.uptime(), 'seconds for data generation');
});
