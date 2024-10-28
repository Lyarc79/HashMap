
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

    has(key){
        const index = this.hash(key);
        const bucket = this.map[index];
        if(bucket){
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i][0] === key){
                    return true;
                }
            }
        }
        return false;
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.map[index];
        if(bucket){
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i][0] === key){
                    bucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    length(){
        let count = 0;
        for(const bucket of this.map){
            if(bucket){
                count += bucket.length;
            }
        }
        return count;
    }

    clear(){
        this.map = new Array(this.bucketSize);
    }

    keys(){
        const keysArray = [];
        for(const bucket of this.map){
            if(bucket){
                for(const entries of bucket){
                    keysArray.push(entries[0]);
                }
            }
        }
        return keysArray;
    }

    values(){
        const valuesArray = [];
        for(const bucket of this.map){
            if(bucket){
                for(const entries of bucket){
                    valuesArray.push(entries[1]);
                }
            }
        }
        return valuesArray;
    }

    entries(){
        const entriesArray = [];
        for(const bucket of this.map){
            if(bucket){
                for(const entries of bucket){
                    entriesArray.push([entries[0], entries[1]]);
                }
            }
        }
        return entriesArray;
    }
}

// Testing:
const testHashMap = new HashMap()
// Test 1: Hash method
console.log("Hash for Luffy:", testHashMap.hash("Luffy"));
console.log("Hash for Zoro:", testHashMap.hash("Zoro"));
//Test 2: Set and get methods
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
//Test 4: Has and remove methods
console.log("Luffy exists?", testHashMap.has("Luffy"));
console.log("Sanji exists?", testHashMap.has("Sanji"));
testHashMap.set("Sanji", "Cook");
console.log("Removing Sanji:", testHashMap.remove("Sanji"));
console.log("Sanji exists anymore?:", testHashMap.has("Sanji"));
// Test 5: Length and clear methods
console.log("Total keys in map:", testHashMap.length());
testHashMap.clear();
console.log("Total keys in map after clear:", testHashMap.length());
console.log("Setting keys again...");
testHashMap.set("Luffy", "Captain");
testHashMap.set("Zoro", "Swordmaster");
testHashMap.set("Nami", "Navigator");
// Test 6: Keys, values and entries methods
console.log("Keys array:", testHashMap.keys());
console.log("Values array:", testHashMap.values());
console.log("Entries array:", JSON.stringify(testHashMap.entries()));




