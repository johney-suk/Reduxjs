import React, {useEffect} from 'react';
import tourService from "./tourService";

const style = {
    width: '100%',
    height: '30vh',
    backgroundColor: 'grey'
}

const kakao = window.kakao

const TourMap = () => {

    useEffect(() => {
        console.log("StoreMap useEffect...")
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.57040150611514, 126.98529248099322), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);
        showMarkers(map)
    }, [])

    const showMarkers = (map) => {
        const spots = tourService.getSpots()
        const positions = spots.map( spot => ({title:spot.name, latlng:new kakao.maps.LatLng(spot.lat,spot.lng) }) )

        // 마커 이미지의 이미지 주소입니다
        for (var i = 0; i < positions.length; i ++) {

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            });

            marker.orgin = spots[i]
            // 마커에 click 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
            });
        }
    }

    return (
        <div>
            <div id='map' style={style}></div>
        </div>
    );
};

export default TourMap;