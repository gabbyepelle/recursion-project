import { phi, sqrt } from 'mathjs'



function fibs(n){
    //this function takes in a number and returns an array containing that many numbers from the fibonacci sequence. 
    let seq = [0,1];
    if(n === 0)return [0]
    else if(n === 1) return [0,1]
    else{
        
        for(let i=0; i<n-2; i++){
            seq[i+2] = seq[i+1] + seq[i];
        }
        return seq
    }
}
   
function fibsRec(n){
    //using golden ratio
    if(n === 0) return [0]
    else{
        let seq = [];
        let next = Math.floor(((phi ** n) - (1 - phi)** n)/sqrt(5))
        seq.push(next);
        seq = seq.concat(fibsRec(n-1));
        return seq
    }
        
    }
