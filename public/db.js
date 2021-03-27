let db;

// request budget db
const request = indexedDB.open('budget', 1);


request.onupgradeneeded = function (event) {
    //creates and returns new object store or index called 'pending'
    let db = event.target.result;
    db.createObjectStore('pending', { autoIncrement: true })
};

request.onsuccess = function (event){
    db = event.target.result;
    //checks if online and returns online status to browswer and then calls checkDatabase function as next step
    if (navigator.onLine) {
        checkDatabase()
    }

}

request.onerror = function (event) {
    console.log('Woops' + event.target.errorCode)
}

//shows to create new transaction as pending with readwrite access.. creates a place to store pending transaction.. adds that one record 
function saveRecord(record) {
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    store.add(record)
};

//shows to create new transaction as pending with readwrite access.. creates a place to store pending transaction.. gets ALL records
function checkDatabase() {
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    const getAll = store.getAll()

    //passed all stored information through function stating all results are to be posted. 
    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch ("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: { Accept: "application/json,text/plain, */*",
                "Content-Type": "application/json",

                },
            })
            .then((response) => response.json())
            .then(()=>{
                //if everything is successful, then to create transaction for the pending database with readwrite acess..reates a place to store pending transaction
                const transaction = db.transaction(["pending"], "readwrite");
                const store = transaction.objectStore("pending")
                store.clear()
            })
        }
    }
}


window.addEventListener("online",checkDatabase)

