
const storeService = () => {

    const stores = [
        {name:'수정식당', lat:37.569709355606065, lng: 126.98884621708306, cat:'한식'},
        {name:'청진동해장국', lat:37.57140854255375, lng: 126.97943208669903,cat:'한식'},
        {name:'방태막국수', lat:37.57178138895904, lng: 126.98471419566559,cat:'한식'},
        {name:'동원집', lat:37.56765225152405, lng: 126.98976506851972,cat:'한식'},
        {name:'가쯔야', lat:37.567640848172296, lng: 126.98074014682604,cat:'일식'}
    ]

    const getStores = () => {
        return stores
    }

    const getByCat = (str) => {

        if(!str){
            return stores
        }

        return stores.filter( store => store.cat === str)

    }

    return {getStores:getStores, getByCat:getByCat}
}

export default storeService()