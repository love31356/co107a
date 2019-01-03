//var hashtable = {}

function hash(str) {
    let hash = 3923
    let i = str.length

    while(i) {
        hash = (hash * 73) ^ str.charCodeAt(--i)
    }

    return hash >>> 0;
}

console.log('hash(hello)=', hash('hello').toString(16))

console.log('hash(mike)=', hash('mike').toString(16))
