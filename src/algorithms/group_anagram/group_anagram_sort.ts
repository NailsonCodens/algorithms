//["act","pots","tops","cat","stop","hat"]
export function groupAnagramSort(strs){

    const res = {}

    for(let s of strs){
        const sortedS = s.split("").sort().join()
        //res{ act: []}
        //res {act: ["act"]}    
        if(!res[sortedS]){
            res[sortedS] = [];
        }
        //res {act: ["act"], post: []}

        res[sortedS].push(s)
        //res{act: ["act"]}
        //res{act: ["act"], ["post", "tops", "stop"]}

    }
    console.log(res)

    return Object.values(res)

}