const numService = () => {

    let count = 0;

    const changeValue = (amount) => {
        count += amount
        return count
    }
    const getCount =() =>{

        return count
    }

    const resetCount = () => {
        count = 0
        return count
    }

    return {changeValue,resetCount, getCount}
}

export default numService()