const mapService = () => {

    let markers = []

    let fn;

    const setFn = (func)=>{
        fn =func
    }

    const addMaker =(marker) =>{
        markers.push(marker)
    }

    // 삭제말고
    // false로 바꿔서 나머지는 안보이게 하기
    const removeMarker = (plan) =>{

        // fn(markers[markers.indexOf(plan)]);
    }

    return{setFn,addMaker,removeMarker}
}
export default mapService()