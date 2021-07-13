

const planService = () =>{

    let arr = []
    let fn;

    const setFn = (func)=>{
        console.log("visited setFn.........",func)
        fn = func
    }

    const append = (spot)=>{
        console.log("visited append.........",spot)
        arr.push(spot)
        fn()

    }
    const remove = (spot) =>{
        console.log("visited remove.........",spot)
        arr.filter(s=>s.name !== spot.name)
        fn()
    }

    const getAll = () =>{
        console.log("visited getAll.........")

        return arr
    }

    return{append, remove, getAll, setFn}
}
export default planService()