const indexedDB =
window.indexedDB ||
window.mozIndexDB||
window.webkitIndexedDB ||
window.msIndexedDB ||
window.shimIndexedDB;


let db
const request = indexedDB.open('budget',1);

request.onupgradeneeded = ({target}) => {
    let db = target.result;
    db.createObjectStore('pending',{autoIncrement: true})
};

request.onsuccess = ({target}) => {
    db= target.result;

    if (navigator.onLine) {
        checkDatabase()
    }
}

request.onerror = function(e) {
    console.log('Woops' + e.target.errorCode)
}

function saveRecord (record)  {
const transaction = db.transaction(["pending"],"readWrite");
const store = transaction.objectStore("pending");
store.add(record)
};

function checkDatabase(){
    const transaction = db.transaction(["pending"],"readWrite");
    const store = transaction.objectStore("pending");
    const getAll=store.getAll()
}