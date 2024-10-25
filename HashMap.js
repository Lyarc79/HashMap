
class HashMap{
    constructor(bucketSize = 53){
        this.map = new Array(bucketSize);
        this.bucketSize = bucketSize;
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.bucketSize;
        }
        return hashCode;
    }

    set(key, value){
        const index = this.hash(key);
        if(!this.map[index]){
            this.map[index] = [];
        }
        for(let i = 0; i < this.map[index].length; i++){
            if(this.map[index][i][0] === key){
                this.map[index][i][1] = value;
                return;
            }
        }
        this.map[index].push([key, value]);
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.map[index];
        if(bucket){
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i][0] === key){
                    return bucket[i][1];
                }
            }
        }
        return null;
    }
}

// Testing:
const testHashMap = new HashMap()
// Test 1: Hash method
console.log("Hash for Luffy:", testHashMap.hash("Luffy"));
console.log("Hash for Zoro:", testHashMap.hash("Zoro"));
//Test 2: Set and get method
testHashMap.set("Luffy", "Captain");
testHashMap.set("Zoro", "Swordmaster");
testHashMap.set("Nami", "Navigator");
console.log("Entries after set method:");
console.log("Luffy:", testHashMap.get("Luffy"));
console.log("Zoro:", testHashMap.get("Zoro"));
console.log("Nami:", testHashMap.get("Nami"));
// Test 3: Updating an entry
testHashMap.set("Luffy", "King of Pirates");
console.log("Updated Luffy:", testHashMap.get("Luffy"));


