
class HashMap{
    constructor(bucketSize = 53){
        this.map = new Array(bucketSize);
        this.bucketSize = bucketSize;
        this.size = 0;
        this.loadFactor = 0.75;
    }

    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.bucketSize;
        }
        return hashCode;
    }

    set(key, value){
        if(this.size / this.bucketSize >= this.loadFactor){
            this.resize();
        }
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
        this.size++;
    }

    resize(){
        const oldMap = this.map;
        this.bucketSize *= 2;
        this.map = new Array(this.bucketSize);
        this.size = 0;

        for(const bucket of oldMap){
            if(bucket){
                for(const[key, value] of bucket){
                    this.set(key, value);
                }
            }
        }
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


