function mergeSort(array){
    if(array.length < 2){
        return array
    }else{
        //split array as evenly as possible
        let left = []
        let right = []
        let breakpoint = Math.ceil(array.length/2)
        for(let i=0; i<breakpoint; i++){
            left.push(array[i]);
        }
        for(let i=breakpoint; i<array.length; i++){
            right.push(array[i])
        }
        //split left and right arrays
        
        left = mergeSort(left)
        right = mergeSort(right)
        return merge(left,right);

        //merge lists
       
        function merge(lArray, rArray){
            let temp = [];
            while(lArray.length!==0 && rArray.length!==0){
                if(lArray[0] < rArray[0]){
                    temp.push(lArray.shift());
                    
                }else{
                    temp.push(rArray.shift());
                    
                }
            }
            
            return [...temp, ...lArray, ...rArray] 

    }
}

}

let ans = mergeSort([4,8,6,2,1,7,5,3])
console.log(ans);




   


