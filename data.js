// data.js
const companyOptions = {
    UK: ["Revolut", "Curve", "Zen","Banxa","Rampnetwork","BitGet","Paybis","Kraken","Inserex","Cryptopay","TapBank","AnyCoinDirect","The_Voucher","The_Kingdom_Bank", "Sepa_Swift_Sortcode"],
    Ireland: ["Revolut", "Zen","Crypto_com", "MEXC","Banxa","Rampnetwork","BitGet","Paybis","Binance","Bybit","Cryptopay","Bitvavo","BTC_Direct","OKX","TapBank","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Italy: ["Revolut", "Bintence_Wire", "Zen","MEXC","Banxa","Rampnetwork","BitGet","Cryptocom","Bybit","Cryptopay","Bitvavo","BTC_Direct","OKX","TapBank","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Denmark: ["Revolut", "Zen","MEXC","Adv2", "Advcash", "W1tty", "Bit2me","BestWallet", "Banxa","Rampnetwork","BitGet","Paybis","Binance","Kraken","Bitvavo","BTC_Direct","OKX","TapBank","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Malasiya: ["Bybit","Luno","Paybis","Help2Pay","Cryptopay","Cryptopay","Voucher_Coupon"],
    Canada: ["NDAX","Newton","Bintense","Easypayments","Cryptocom","Kraken","MEW","Beaqonix","Voucher_Coupon","CoinPAPA"],
    New_Zeland: ["Revolut","Paybis","BitGet","Cryptocom","Kraken","Bybit","Cryptopay","TapBank","Inserex","MEW","Voucher_Coupon"],
    Bermuda: ["Bestwallet", "Gemini","Voucher_Coupon"],
    Switzerland: ["Zen", "Bintence","MEXC", "Cryptocom", "AdvCash", "AdV2", "Bit2me", "Bestwallet","Banxa","Rampnetwork","Bybit","Cryptopay","BTC_Direct","TapBank","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Norway: ["Revolut","Binance","Banxa","Rampnetwork","TapBank","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Bahamas: ["Voucher_Coupon"],
    Singapore: ["Revolut","Rampnetwork","Voucher_Coupon"],
    Hong_Kong: ["Rampnetwork", "Bintense","Bybit","Cryptopay","Voucher_Coupon"],
    Japan: ["Banxa","BitGet","Revolut","Bybit","Cryptopay","Voucher_Coupon"],
    UAE: ["Banxa","Rampnetwork","Bintense","Binance","Voucher_Coupon"],
    Oman: ["Wise","Binance","Voucher_Coupon"],
    Saudi_Arabia:["Banxa","Wise","Binance","Voucher_Coupon"],
    Iceland:["Revolut","Zen","Banxa","Rampnetwork","BitGet","Binance","Cryptopay","BTC_Direct","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Greenland:["Banxa","Rampnetwork","Wise","BitGet","Bybit","Cryptopay","Bitvavo","BTC_Direct","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Sweeden:["Banxa","Rampnetwork","Wise","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    South_Africa:["Banxa","Rampnetwork", "Luno","Wise","BitGet","VALR","Bybit","Cryptopay","OKX","TapBank","Voucher_Coupon"],
    Australia: ["Cryptocom","Kraken","OKX","TapBank","Voucher_Coupon"],
    Croatia: ["Bybit","Bitvavo","BTC_Direct","OKX","TapBank","Zen","AnyCoinDirect","The_Kingdom_Bank"],
    Czech: ["Bybit","Cryptopay","Bitvavo","BTC_Direct","OKX","TapBank","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Slovakia: ["Bybit","Cryptopay","Bitvavo","BTC_Direct","OKX","TapBank","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    Denmark: ["Bybit","Cryptopay","Bitvavo","BTC_Direct","OKX","AnyCoinDirect","Voucher_Coupon","The_Kingdom_Bank"],
    // Добавьте другие страны и компании по аналогии
};

const companyInfo = {
    UK: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Curve: {
                greenBoxInfo: "Curve you can download and install, credit the account and use virtual card on moonpay, similar process to Revolut.",
                yellowBoxInfo: "You can use credit card to top up which is useful. Not sure of age limit.",
                redBoxInfo: "CURVE it is like Revolut you can use a virtual card. You can top up with high street banks, you can use credit cards, and work with MOONPAY.",
            },
            Zen : {
                greenBoxInfo: " , you transfer max $5.000 here, you need to convert to ETH and leave for one day before you transfer the funds.",
                yellowBoxInfo: "First transaction UK via wire must be 1.000$ only. Then you can do total 5.000$ next day",
                redBoxInfo: "Up to $2.000: BANK TRANSFER: INSTANT VERIFICATIONs",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
          Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            
            Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
             Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is our solution that will give UK clients a local account with a sort code. For the first transaction to a new payee from a high street bank the maximum that can be transfered is 2000GBP. After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            
             Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            The_Voucher : {
                greenBoxInfo: "Transaction amount: from $500+. Permitted age: age limit 75 yo",
                yellowBoxInfo: "Very, very important *** always to write beneficiary CICO DIGITAL SOLUTIONS*** otherwise, funds go back to the client in the next day.",
                redBoxInfo: "*KYC up to 50k is ID, POA and POP, above 50k also  BS of one month and once reached 100k SOF needed. Once wire is received, client gets Voucher redeem code on his email from provider. We send him redeem page, where he enters the code on the bottom and fills again the details like on this page. Provider will confirm that Voucher was successfully redeemed.",
            },
             Sepa_Swift_Sortcode : {
                greenBoxInfo: "Most of the process is automated. We provide you with wallets to give to your clients. *Client must understand it's his/her wallet address at your platform",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
        "Big deposit": {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
           Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
             Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
            Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is our solution that will give UK clients a local account with a sort code. For the first transaction to a new payee from a high street bank the maximum that can be transfered is 2000GBP. After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
             Inserex : {
                greenBoxInfo: "3000-100.000 For clients with limit for new payees, they will take 2000+1000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
                Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            The_Voucher : {
                greenBoxInfo: "Transaction amount: from $500+. Permitted age: age limit 75 yo",
                yellowBoxInfo: "Very, very important *** always to write beneficiary CICO DIGITAL SOLUTIONS*** otherwise, funds go back to the client in the next day.",
                redBoxInfo: "*KYC up to 50k is ID, POA and POP, above 50k also  BS of one month and once reached 100k SOF needed. Once wire is received, client gets Voucher redeem code on his email from provider. We send him redeem page, where he enters the code on the bottom and fills again the details like on this page. Provider will confirm that Voucher was successfully redeemed.",
            },
            The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
            Sepa_Swift_Sortcode : {
                greenBoxInfo: "Most of the process is automated. We provide you with wallets to give to your clients. *Client must understand it's his/her wallet address at your platform",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        },
    },

Ireland: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Zen: {
                greenBoxInfo: "Transaction amount: Up to $2000.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. There is a 24h WD limit of $1000 for all users",
                redBoxInfo: "For account verification: ID and Selfie. After completing the verification, keep the money in the account for 1 day before WD to avoid any issues",
            },
            Crypto_com: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
             Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
            Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
                Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
             BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
           Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            
        },
        "Big deposit": {
            Crypto_com: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app). / NOT TESTED YET"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
             Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },

    Italy: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Zen : {
                greenBoxInfo: "Transaction amount: Up to $2000.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. There is a 24h WD limit of $1000 for all users",
                redBoxInfo: "For account verification: ID and Selfie. After completing the verification, keep the money in the account for 1 day before WD to avoid any issues",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
             BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "Revolut, you can not move more than 2k a day and 10k a month through crypto",
                yellowBoxInfo: "You will need to convert the fiat to ETH and then transfer daily",
                redBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step."
            },
            Bintence_Wire: {
                greenBoxInfo: "2K up to 50k you can do wires to Bintense: The agent's commission and your commission will be lower here. So I would suggest using this solution for the STD up to 20k and then look at an exchange.",
                yellowBoxInfo: "No amount will be held for risk",
                redBoxInfo: "Agents commission 7% and for managers counts as wires",
            },
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app)"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
             BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },


    Denmark: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
             Zen : {
                greenBoxInfo: "Transaction amount: Up to $2000.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. There is a 24h WD limit of $1000 for all users",
                redBoxInfo: "For account verification: ID and Selfie. After completing the verification, keep the money in the account for 1 day before WD to avoid any issues",
            },
            Adv2: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Advcash: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            BestWallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
             Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app) / NOT TESTED YET"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
             Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },

     Malasiya: {
        STD: {
           Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
             Help2Pay: {
                greenBoxInfo: "Transaction amount: $250-$10.000. Permitted age: No limitation",
                yellowBoxInfo: "This solution can be found by loging in to X-F24.com and selcting Banking in the My Account drop down, then sellecting deposit.This solution accepts Credit & Debit cards.The client needs to have one of the listed bank cards",
                redBoxInfo: "After selecting Deposit amount, Currency, and Bank the client will be redirected to log in to his online banking and complete the transaction. This is treated as a bank transfer",
            },
             Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
           Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
            Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
            Help2Pay: {
                greenBoxInfo: "Transaction amount: $250-$10.000. Permitted age: No limitation",
                yellowBoxInfo: "This solution can be found by loging in to X-F24.com and selcting Banking in the My Account drop down, then sellecting deposit.This solution accepts Credit & Debit cards.The client needs to have one of the listed bank cards",
                redBoxInfo: "After selecting Deposit amount, Currency, and Bank the client will be redirected to log in to his online banking and complete the transaction. This is treated as a bank transfer",
            },
                Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

    Canada: {
        STD: {
            NDAX: {
                    greenBoxInfo: "Transaction amount: Not specified. Permitted age: 18 and up to not specified",
                    yellowBoxInfo: "Deposit options: Interac E-transfer, WireTransfer. WDs requier 2FA to be enabeled and confirmed on email as well. Wallets need to be whitelisted so its sugested that client has EXODUS or METAMASK",
                    redBoxInfo: "For account verification: ID and Selfie. They might ask for a Social Insurance Number but its optional most of the time",
                },
            Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. / 72 HOURS TO VERIFY ",
                yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 maximum CAD10,000 per transaction; Weekly limit CAD50,000. Wire transfer Minimum CAD10,000 maximum CAD1,000,000. Crypto withdrawal limits: 5 transactions per day. ",
                redBoxInfo: "For accout verification you need ID, POA (sometimes) and Selfie. They might ask for the client to complete an investor questionare at a certain point in oreder to grant full services. / UNTESTED ",
            },
              Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
                Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            MEW : {
                greenBoxInfo: "Not specified. 18+/ not specified",
                yellowBoxInfo: "Limits for ETH buy per day is 20000$ / Supports ERC20. There are no Fees for buying crypto. No Deposti & WD Limits",
                redBoxInfo: "Similar to Invity.io",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            CoinPAPA : {
                greenBoxInfo: "Interaq: Limit depending on client bank Bill Payment: max 700.000 WireTransfer: 20.000 minimum to unlimited EFT: max 50.000. Permitted age: 18-85",
                yellowBoxInfo: "The client has many options for deposit all of them excep WireTransfer have no minimum amount requierment. Clients 70-85 need to do a video call of 1 minute explaining that they are not being guided  Compliance officers have the discretion to contact old clients and high volume clients at any time Fee is 16%",
                redBoxInfo: "For account verification: Registration form Selfie Upload ID and POA Sign the Service Agreement Call with their support for Data verification",
            },
            
        },
        "Big deposit": {
            NDAX: {
                    greenBoxInfo: "Transaction amount: Not specified. Permitted age: 18 and up to not specified",
                    yellowBoxInfo: "Deposit options: Interac E-transfer, WireTransfer. WDs requier 2FA to be enabeled and confirmed on email as well. Wallets need to be whitelisted so its sugested that client has EXODUS or METAMASK",
                    redBoxInfo: "For account verification: ID and Selfie. They might ask for a Social Insurance Number but its optional most of the time",
                },
             Newton: {
                greenBoxInfo: "Transaction amount: CAD10-CAD50.000. Permitted age: 19 and up to no age limit. NOT DO more than 3.000CAD for the first transaction. Open exodus and send the money there. / 72 HOURS TO VERIFY ",
                yellowBoxInfo: "Deposit options: Interac e-transfer minimum CAD10 maximum CAD10,000 per transaction; Weekly limit CAD50,000. Wire transfer Minimum CAD10,000 maximum CAD1,000,000. Crypto withdrawal limits: 5 transactions per day. ",
                redBoxInfo: "For accout verification you need ID, POA (sometimes) and Selfie. They might ask for the client to complete an investor questionare at a certain point in oreder to grant full services. / UNTESTED ",
            },
              Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
             Easypayments : {
                greenBoxInfo: "Wire: 20,000 CAD -  750,000CAD. Bill payment: 10,000CAD - 99,000CAD. Permitted age: 18 - 78",
                yellowBoxInfo: "This is a BankTransfer that for now is being counted as crypto. The fee for the transfer is 17%. The client starts the process by sending an email to office@easypayments.ca The client then needs to follow the instruction that they recieve on email",
                redBoxInfo: "For account verification: ID, POA, Selfie, Billing info, Phone verification, Email vertification: Need to sign a DOC CLIENT CAN NOT FORWARD ANY EMAIL HE GETS TO US AND CAN NOT FORWARD ANY EMAIL FROM US TO THEM THIS WILL CAUSE THEM TO BLOCK THE CLIENT IMEDIATELY",
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Beaqonix : {
                greenBoxInfo: "Bill Payment 10000 CAD+ / Wire Transfer 20000 CAD+ Permitted age: 18 - 75",
                yellowBoxInfo: "The fee for the transfer is 13%. It will be credited as Net + Fees (cashback). The client starts the process by sending an email to support@beaqonx.com I would like to start the onboarding process and purchase cryptocurrency. For the amount of [amount], I am using [bank name]. The client then needs to follow the instruction that they recieve on email",
                redBoxInfo: "Works the same way as Easypayments.ca",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
             CoinPAPA : {
                greenBoxInfo: "Interaq: Limit depending on client bank Bill Payment: max 700.000 WireTransfer: 20.000 minimum to unlimited EFT: max 50.000. Permitted age: 18-85",
                yellowBoxInfo: "The client has many options for deposit all of them excep WireTransfer have no minimum amount requierment. Clients 70-85 need to do a video call of 1 minute explaining that they are not being guided  Compliance officers have the discretion to contact old clients and high volume clients at any time Fee is 16%",
                redBoxInfo: "For account verification: Registration form Selfie Upload ID and POA Sign the Service Agreement Call with their support for Data verification",
            },
        },
    },


    New_Zeland: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
             Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
           Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. WD is not possible",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "3000-100.000 For clients with limit for new payees, they will take 2000+1000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            MEW : {
                greenBoxInfo: "Not specified. 18+/ not specified",
                yellowBoxInfo: "Limits for ETH buy per day is 20000$ / Supports ERC20. There are no Fees for buying crypto. No Deposti & WD Limits",
                redBoxInfo: "Similar to Invity.io",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. WD is not possible",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
           Paybis : {
                greenBoxInfo: "Transaction amount: $0 - $5000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Revolut virtual cards, Visa & MasterCard, FPX (for Malaysia)There is a 24h cooling off period after completing the verification",
                redBoxInfo: "For account verification: ID, Selfie, Phone and Email verification. After the firs couple of transaction they might give the client a call, and ask questions, the last qustion will be what platform are you using they need to answer PAYBIS. Additionaly they might ask you to prove the ownership of the cards that the client used if they are from REVOLUT it can be optained by going to Profile -> Account -> Documents -> Card Confirmation",
            },
            Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

     Bermuda: {
        STD: {
            Bestwallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
        },
        "Big deposit": {
            Gemini: {
                greenBoxInfo: "Need Information",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

    Switzerland: {
        STD: {
             Zen : {
                greenBoxInfo: "Transaction amount: Up to $2000.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. There is a 24h WD limit of $1000 for all users",
                redBoxInfo: "For account verification: ID and Selfie. After completing the verification, keep the money in the account for 1 day before WD to avoid any issues",
            },
            Bintence: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Bit2me: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
        
            Bestwallet: {
                greenBoxInfo: "We have not tested this solution. Please try and update Victor ",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
              Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            MEXC: {
                greenBoxInfo: "DAILY transaction limit to be changed to 8,000EUR for BIG TRANSACTIONS",
                yellowBoxInfo: "Done 10.000$ trx with MEXC. We did in usdt ut later we find how to do also eth. you receive money, then change in crypto clicking on transfer then withdrawl and you have 2 options like revolut and the first one exchange crypto.",
                redBoxInfo: "The first time you have to add 2FA and you can choose google auth or email much better.then you you can send and put OTP received on email and by sms. for USDT TRC20 you have 0.93 cent in transfers on 10k on ERC20 you have 3,74 eur. fee. 10/15 minutes before receive (its written on the app). / NOT TESTED YET"
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
             Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
              Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },

    Norway: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },

    Bahamas: {
        STD: {
             Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            
        },
        "Big deposit": {
             Safewirepay : {
                greenBoxInfo: "There is no age limit as it is a bank account, client needs to be 18+",
                yellowBoxInfo: "This will creat a EUR SEPA account for the clinet in the chosen currency When registering the clinet will need to select a NUMBERED ACCOUNT  The client will be charged 10EUR at this stage",
                redBoxInfo: "Client will need to provide paperwork on the intended use of the account. This is a wire transfer. Client will need to go to bank in order to complete the transfer."
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

    Singapore: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
           Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

    Hong_Kong: {
        STD: {
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
             Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            
        },
        "Big deposit": {
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
             Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
            Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
                    Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

     Japan: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
                Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

    UAE: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Bintense: {
                greenBoxInfo: "SEE BINTENSE SECTION",
                yellowBoxInfo: "",
                redBoxInfo: "",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },
    
    Oman: {
        STD: {
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },
    Saudi_Arabia: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie.",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },
    Iceland: {
        STD: {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
            Zen : {
                greenBoxInfo: "Transaction amount: Up to $2000.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. There is a 24h WD limit of $1000 for all users",
                redBoxInfo: "For account verification: ID and Selfie. After completing the verification, keep the money in the account for 1 day before WD to avoid any issues",
            },
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie. For iceland, they might ask for Source of Funds",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
            Revolut: {
                greenBoxInfo: "AGE: 18 - 75. - Revolut, you can not move more than 2k a day and 10k a month through crypto. You will need to convert the fiat to ETH/BTC and then transfer daily / 24 hours",
                yellowBoxInfo: "You need to accept terms and conditions on conversion of crypto, this is a new step.",
                redBoxInfo: "Revolut up to the age of 75 and then bintense: Open with them before you pitch. For new clients the Crypto withdrawal limit is 500 per day.",
            },
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
             Binance: {
                greenBoxInfo: "Transaction amount: up to 5.000$ per transaction. Permitted age: from 18",
                yellowBoxInfo: "Deposit options: Visa/MasterCard & Crypto. Wallet adresses might need to be whitelisted depending on country.Preferable for client to have EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA & Selfie. For iceland, they might ask for Source of Funds",
            },
                    Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
                    The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },
    Greenland: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
                    Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
             Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
                    The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },
    Sweeden: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
                     Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
                    The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },
    South_Africa: {
        STD: {
            Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
             VALR: {
                greenBoxInfo: "Transaction amount: $0-depends on deposit method. Permitted age: 18 and up not specified",
                yellowBoxInfo: "Deposit options: Visa/MaterCard, EFT and WireTransfer. Client can deposit in USD through WireTransfer. Crypto WD 0.2BTC/day. Crypto WD with 2FA 100BTC/day",
                redBoxInfo: "For account verification: ID and Selfie. 24h withdrawal freez when depositing with card from the moment that you click on the WD button in app"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Banxa: {
                greenBoxInfo: "Transaction amount: $1 - $70.000. Permitted age: 18 - 70 ",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, SEPA, iDeal, Interac, GPay, ApplePay, FasterPayments, Bank Transfer. Limits are dependan on the country and payment methood but in general stand at 70,000 a week",
                redBoxInfo: "For account verification you need ID and potentialy a short video of you with the ID. Any additional steps will depend on the country and the amount. They might ask for you to confirm that a wallet adress in yours. NOT PROPERLY TESTED. NOT PROPERLY TESTED. NOT PROPERLY TESTED",
            },
            Rampnetwork: {
                greenBoxInfo: "Transaction amount: $1-$10.000+. Permitted age: 18 and up no age limit",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, GPay, ApplePay, SEPA, Revolut.",
                redBoxInfo: "For account verification you need ID and potentialy a POA depending on where the clinet is from. Card purchase of more than EUR100 will requier ID Card purchase of more than EUR5,000 requiers a POA. Large transfers above EUR10,000 requiers a SOF / NOT PROPERLY TESTED"
            },
            Luno: {
                greenBoxInfo: "Transaction amount: LEVEL 1 - EUR1.000 / LEVEL 2 - EUR5.000 per month / LEVEL 3 - No Limit. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: ZA only instant bank transfer. Malaysia works the same way as Help2Pay. WD LIMIT IS BASED ON ACC LEVEL. LEVEL 1 - EUR1.000 Lifetime. LEVEL 2 - EUR5.000 per month. LEVEL 3 - No limit",
                redBoxInfo: "For account verification there are three levels: LEVEL 1 - Cofirm your mobile number + basic perosnal details / LEVEL 2 - Submit a photo of ID and a selfie / LEVEL 3 - Enter residential addres + emplyment status + SOF",
            },
            Wise: {
                greenBoxInfo: "Transaction amount: $1 - $1.000.000. Permitted age: 18 and up no age limit ",
                yellowBoxInfo: "Deposit options: Bank transfer and Debit card. For account verification you need ID Account verification for exotic countries might differ. For large transactions Wise will ask for source of funds. Different sources will requier different documentation",
                redBoxInfo: "***NEVER to use AnyDesk when client is on WISE will block immediately the account",
            },
            BitGet: {
                greenBoxInfo: "Transaction amount: $15-$10.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, ApplePay, GPay  14-9.100EUR/12-8.000GBP/15-10.000USD They offer deposit with third-party procesors  They offer BankTransfer   Crypto WD limit without KYC $20,000 a day/$100,000 a month WITH KYC daily limit goes to $3,000,000   SUSPECTED THAT TRANSATION LIMIT IS ACTUALY AT GBP5.000",
                redBoxInfo: "For account verification you need ID and a Selfie They have photo and video instructions from KYC we can send to clients  They have their own ColdWallets THEY ARE PARTNERED WITH METAMASK  For a single transaction that is over 5.000 they will ask for a source of funds for UK  In Ireland the the maximum deposit is EUR5.000"
            },
            VALR: {
                greenBoxInfo: "Transaction amount: $0-depends on deposit method. Permitted age: 18 and up not specified",
                yellowBoxInfo: "Deposit options: Visa/MaterCard, EFT and WireTransfer. Client can deposit in USD through WireTransfer. Crypto WD 0.2BTC/day. Crypto WD with 2FA 100BTC/day",
                redBoxInfo: "For account verification: ID nad Selfie. Not confirmed:  24h withdrawal freez when depositing with card from the moment that you click on the WD button in app"
            },
            Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },
      Australia: {
        STD: {
            Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Roobic : {
                greenBoxInfo: "Transaction amount: $2000 and up. Permitted age: 18 - 80.",
                yellowBoxInfo: "This is a soultion that will give clients a account in their name in the chosen currency of USD. The minimum transaction amount is 2000$ (high street bank or Revolut select payment method Swift). If the transfer is done from the clients main bank don't transfer more than 2000$.After the trasaction is completed support will give you a link (wallet.roobic.io/wallets) and a wallet (34jXo1uwLwHh8ygSSbwffxpfTU86LMTn9v) to move the money to us. After that is done the account will be credited",
                redBoxInfo: "For account verification: 0-5.000GBP ID and POA. / 5.000-30.000GBP DOD. / 30.000GBP+ SOF",
            },
            Cryptocom: {
                greenBoxInfo: "Transaction amount: Any ammount. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, BankTransfer. Client can deposit fiat in mulltiple currencies. There are no specific limits on WD ammounts. The client needs to have his own external wallet in order to avoid issues. EXODUS or METAMASK",
                redBoxInfo: "For account verification: ID, POA and Selfie. The client will first be asked for ID and Selfie, after that when trying to deposi he will be asked to provide a proof of address. IRISH client lack HOUSE NUMBER on their POA documents (Potential issue)"
            },
            Kraken : {
                greenBoxInfo: "Transaction amount: Credit Card (7day limit) / AUD 14-7000 / CAD 12-6.500 / EUR 10-5.000 / GBP 8-4.000 / Bank Transfer 0-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard, WireTransfer, Inteeaq and Instant bank transfer. In case of Card depost there is a 72h limit on making WDs of Crypto that is purchased. Interaq limit is 3000 CAD per transaction. Wire transfer, by linking accounts with Kraken for the UK is up to 100.000 a day",
                redBoxInfo: "For account verification: ID, Selfie, and Cofirming billing adress. FCA regulated / CAD regulated / ASIC regulated",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
    },

     Croatia: {
        STD: {
             Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            Zen : {
                greenBoxInfo: "Transaction amount: Up to $2000.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit options: Visa/MasterCard. There is a 24h WD limit of $1000 for all users",
                redBoxInfo: "For account verification: ID and Selfie. After completing the verification, keep the money in the account for 1 day before WD to avoid any issues",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
        },
        "Big deposit": {
           Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
                     Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
                    The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },

    Czech: {
        STD: {
             Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
                    Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
                    Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
                     Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
                    The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },

    Slovakia: {
        STD: {
             Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
              Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
                     Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
                    The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },

Denmark: {
        STD: {
             Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
        },
        "Big deposit": {
           Bybit: {
                greenBoxInfo: "Transaction amount: Card 2-46.500EUR / Wire 10-20.000EUR.  Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, iDEAL VBAN option by default. Withdrawal limits not specified",
                redBoxInfo: "For account verification: ID, Selfie and POA. Need to link a phone number LIKE BITGET",
            },
            Cryptopay : {
                greenBoxInfo: "Transaction amount: 10-not specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA bank transfer, FasterPayments, WireTransfer (Interaq not mentioned). All WireTransfer weriants are on a Company name NO VBAN. Withdrawals up to 15.000EUR a month no mater the currency",
                redBoxInfo: "For account verification: ID, Selfie and POA",
            },
             Bitvavo : {
                greenBoxInfo: "Transaction amount: 0-25.000 a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. In order to complete Crypto withdrawals 2FA need to be enabeled",
                redBoxInfo: "For account verification: ID, Selfie, Phone Number. There are multiple levels that will increse BUY and SELL limits SOF will be asked to increase the KYC level",
            },
            BTC_Direct : {
                greenBoxInfo: "Transaction amount: Level 1 0-2.500EUR a day / Level 2 0-10.000EUR a day. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA. There is an option to link the bank account and in this way any transfer will arive instantly",
                redBoxInfo: "For account verification: ID, Selfie, Email, Phone Number, KYC Questionmaire",
            },
             OKX : {
                greenBoxInfo: "Transaction amount: Not Specified. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "Local deposit Method with EUR-SEPA is working after 2 working days",
                redBoxInfo: "For account verification:Email & Phone Number verification, POA, ID",
            },
             TapBank : {
                greenBoxInfo: "Transaction amount: Unlimited Deposit & WD. Permitted age: 18+/Not specified",
                yellowBoxInfo: "Fees are only visible after you create and fully verify the account. As mentioned in the App there is Faster Payments solutions for Uk clinets. Supports Sepa Bank Transfer, Debit Deposit, Card Top Up",
                redBoxInfo: "For account verification: ID,DL,PASSPORT & SELFIE or Utility Bill or Bank Statement",
            },
            Coingira : {
                greenBoxInfo: "Transaction amount: Card Limit: 250-2500 / Wire Limit: 250-25000. Permitted age: 18 - 70",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, BankTransfer, Google/Apple Pay. BankTransfer details are in a company name: SWIPELUX OU Reference is extremely important and must be included. Fee: 8%",
                redBoxInfo: "For account verification:ID, POA, Live Check. Additional documentation might differ depending on the country",
            },
                     Inserex : {
                greenBoxInfo: "Transaction amount: 3000-100.000. Permitted age: 18-75.",
                yellowBoxInfo: "This is a wire solution that will give UK clients a local account with a sort code and account number. Referal link: ttps://app.insirex.com/referral_form?trader[label]=IOFX. / Wallet: bc1qcv8en23j5payjz5ndrg4fmlr44cpxn3z3040ma",
                redBoxInfo: "For account verification: / 3.000-10.000 ID, POA, POP / 10.000-20.000 Selfie, Bank Statement, DOD / 20.000+ SOF, Updated BS, Secondary ID",
            },
            AnyCoinDirect : {
                greenBoxInfo: "SEPA/CreditCard Level 1:15.000/1.500 Level 2:25.000/1.500(7.500) Level 3:100.000/50.000. 18+/ not specified",
                yellowBoxInfo: "Deposit methods: Visa/MasterCard, SEPA, iDeal, Sofort Limits depend on payment method and verification level",
                redBoxInfo: "For account verification: Level 1: Phone & ID Level 2: POA Level 3: Video",
            },
            Voucher_Coupon : {
                greenBoxInfo: "Transaction amount: 1000-50.000. Permitted age: not specified",
                yellowBoxInfo: "This is a wire transfer that looks like the clinet is purchasing and redeming a voucher",
                redBoxInfo: "If you want to use it ask S for approval",
            },
            The_Kingdom_Bank : {
                greenBoxInfo: "Transaction amount: 100-100.000. Permitted age: 18 and up to not specified",
                yellowBoxInfo: "The client opens an Individual account: SWIFT and SEPA bank transfers are available. The clinet can pay 50EUR to have a VBAN",
                redBoxInfo: "For account verification: ID, POA, LC, Questions about expected volume and source of wealth (no DOCs for SOF needed)",
            },
        },
    },
    
};

export { companyOptions, companyInfo };
