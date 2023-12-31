const {
    decode
} = require('viem');

const API_HOST = 'https://linea-goerli.infura.io/v3/0635459c0438461ea1bde424407fbd43';

const INITIAL_BLOCK = 2748830;

function toHex(number) {
    return '0x' + number.toString(16);
}

function decodeInput(hexString) {
    
    // '0x' 접두사를 제거
    if (hexString.startsWith('0x')) {
        hexString = hexString.slice(2);
    }

    // 16진수 문자열을 바이트 배열로 변환
    const bytes = new Uint8Array(hexString.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)));

    // TextDecoder를 사용하여 UTF-8로 디코딩
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
    
}

async function sleep(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

async function checkTransaction(transactionHash) {

    const response = await fetch(API_HOST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'eth_getTransactionByHash',
            params: [transactionHash],
        }),
    });

    const data = await response.json();

    if(!data.result) {
        return;
    }

    const from = data.result.from;
    const input = data.result.input;

    try {
// decode hex input
const decodedInput = decodeInput(input);
// if decoded input is not a valid JSON, skip
if(!decodedInput.startsWith('{')) {
    return;
}

const parsed = JSON.parse(decodedInput);

    const p = parsed?.p;
    
    if(!p || p !== 'bomm-20'
        ) {
        throw new Error('Invalid p');
    }

    const op = parsed?.op;

    const shortenFrom = from.slice(0, 6) + '...' + from.slice(-4);
    switch(op) {
        case 'deploy':
            console.log('## Deploy', shortenFrom, parsed.max);
            break;
        case 'mint':
            console.log('## Mint', shortenFrom, parsed.amt);
            break;
        case 'transfer':
            console.log('## Transfer', shortenFrom, parsed.amt);
            break;
        default:
            console.log('## Unknown operation', parsed);
            break;
    }
    } catch(e) {
        // DO NOTHING
    }
    

    

    

}

async function traverseBlock(
    blockNumber
) {

    const response = await fetch(API_HOST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'eth_getBlockByNumber',
            params: [toHex(blockNumber), false],
        }),
    });

    const data = await response.json();

    if(data.result.transactions.length === 0) {
        return;
    }

    const block = {
        number: parseInt(data.result.number, 16),
        transactions: data.result.transactions,
    };

    return block;
    
}

async function main() {

    for(let i = INITIAL_BLOCK; i < INITIAL_BLOCK + 100000000; i++) {

        const block = await traverseBlock(i);

        if(!block) {
            continue;
        }

        for(let j = 0; j < block.transactions.length; j++) {
            const transaction = block.transactions[j];

            await checkTransaction(transaction);

            
        }

        await sleep(0.01);
    }
}

main();