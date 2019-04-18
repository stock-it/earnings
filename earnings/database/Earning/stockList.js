const faker = require('faker');

const companyData = [
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
  { id: '100', ticker: 'CGC', company: 'Canopy Growth' },
];


//  Add 10 million more stocks
const MAX = 26*26*26*26*22;

//  Generate ticker symbols

const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 
'h', 'i', 'j', 'k', 'l', 'm', 'n',  
'o', 'p', 'q', 'r', 's', 't', 'u', 
'v', 'w', 'x', 'y', 'z' ]; 

const allTickers = [];
let tempTicker = '';
for (let a = 0; a < 26; a++) {
  for (let b = 0; b < 26; b++) {
    for (let c = 0; c < 26; c++) {
      for (let d = 0; d < 26; d++) {
        for (let e = 0; e < 26; e++) {
          tempTicker = alphabet[a] + alphabet[b] + alphabet[c] + alphabet[d] + alphabet[e];
          allTickers.push(tempTicker);
        }
      }
    }
  }
}

for (let i = 0; i < MAX; i++) {
  let fillerStock = {
    id: `${i}`,
    ticker: allTickers[i],
    company: faker.company.companyName(),
  }
  companyData.push(fillerStock);
}

module.exports = companyData;
