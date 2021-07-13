import React, {useEffect} from 'react';
import cartService from "./cartService";
import mapService from "./mapService";
const kakao = window.kakao
const HomeMap = () => {

    useEffect(()=>{
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.570390442621125, 126.98529262043198), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        const panTo = (home)=>{
            // 이동할 위도 경도 위치를 생성합니다
            var moveLatLon = new kakao.maps.LatLng(home.lat, home.lon);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: moveLatLon
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 지도 중심을 부드럽게 이동시킵니다
            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
            map.panTo(moveLatLon);
            const removeMarker = (marker)=>{
                marker.setMap(null)
            }

            cartService.setMap(panTo);
            cartService.setRemove(removeMarker)
        }


    },[])


    return (
        <div>
            <div id="map" style={{height:"50vh",width:"100%"}}></div>
        </div>
    );
};

export default HomeMap;