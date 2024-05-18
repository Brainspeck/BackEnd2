const fs = require('node:fs');

const dbFile = 'koders.json';

function init () {
    const fileExists = fs.existsSync(dbFile);

    if (!fileExists) {
        fs.writeFileSync(dbFile, JSON.stringify({koders: []}));
    }
}

function getKoders () {
    const content = fs.readFileSync(dbFile, 'utf-8');
    return JSON.parse(content).koders;
}

function updateKoders (koders) {
    const newKoders = { koders: koders };
    const newKodersAsString = JSON.stringify(newKoders);
    fs.writeFileSync(dbFile, newKodersAsString);
}

function addKoder (koder) {
    const koders = getKoders();
    koders.push(koder);
    updateKoders(koders);
}

function ls () {
    const koders = getKoders();
    if (!koders.length) {
        console.log('[EMPTY]');
        process.exit();
    }
    koders.forEach((koder, idx) => {
        console.log(idx, "-", koder);
    });
}

function removeKoder (name) {
    const koders = getKoders();
    const updatedKoders = koders.filter(koder => koder !== name);
    updateKoders(updatedKoders);
    if (koders.length === updatedKoders.length) {
        console.log(`Koder "${name}" not found.`);
    } else {
        console.log(`Koder "${name}" removed.`);
    }
}

function removeAllKoders () {
    updateKoders([]);
    console.log('All koders removed.');
}

function main () {
    const command = process.argv[2];
    const arg = process.argv[3];

    init();

    if (command === 'ls') {
        ls();
    } else if (command === 'add') {
        if (!arg) {
            console.error('missing koder name');
            process.exit(1);
        }
        addKoder(arg);
        ls();
        console.log('Koder added');
    } else if (command === 'rm') {
        if (!arg) {
            console.error('missing koder name');
            process.exit(1);
        }
        removeKoder(arg);
        ls();
    } else if (command === 'reset') {
        removeAllKoders();
    } else {
        console.error('Invalid command:', command);
        process.exit(1);
    }
}

main();
