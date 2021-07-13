const tourService = () => {

    const spots = [
        {name: '설악산', lat: 38.129508, lng: 128.456975, cat: '산'},
        {name: '한라산', lat: 33.355464, lng: 126.524617, cat: '산'},
        {name: '남산', lat: 37.553704, lng: 126.981011, cat: '산'},
        {name: '불국사', lat: 35.790128, lng: 129.332135, cat: '유적지'},
        {name: '경복궁', lat: 37.577963, lng: 126.976944, cat: '유적지'}
    ]

    const getSpots = () => {
        return spots
    }

    const getByCat = (str) => {

        if (!str) {
            return spots
        }

        return spots.filter(
            spot => spot.cat === str)
    }

    return {getSpots: getSpots, getByCat: getByCat}
}

export default tourService()