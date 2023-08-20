import { Container } from "../../../components/Container";
import { useEffect, useState } from "react";
// import axios, { AxiosError } from "axios";
// import { atom, useRecoilState } from "recoil";
import BottomNav from "../../../pages/customer/BottomNav.jsx";
const CustomerMain = () => {
  // const [storeList, setStoreList] = useRecoilState(storeListState);
  // const [markers, setMarkers] = useRecoilState(markersState);
  //네이버맵
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const map = new window.naver.maps.Map(mapDiv);
  }, []);
  //검색창
  const [searchWord, setSearchWord] = useState("");
  //검색
  // const searchStore = async () => {
  //   try {
  //     // 더미 데이터
  //     const response = [
  //       {
  //         restaurant_id: 1,
  //         restaurant_name: "서칭1",
  //         latitude: 37.497175,
  //         longitude: 127.027299,
  //       },
  //       {
  //         restaurant_id: 2,
  //         restaurant_name: "서칭2",
  //         latitude: 37.497175,
  //         longitude: 127.027926,
  //       },
  //     ];

  //     setStoreList(response);
  //     console.log("~~~~~~searchStoreList!!!", storeList);

  //     const searchData = storeList.map((store: any) => {
  //       return {
  //         id: store.restaurant_id,
  //         title: store.restaurant_name,
  //         coordinate: {
  //           latitude: store.latitude,
  //           longitude: store.longitude,
  //         },
  //       };
  //     });
  //     console.log("~~~~~~ searchData입니다", searchData);
  //     setMarkers(searchData);
  //   } catch (error) {
  //     console.error(error);
  //     if ((error as AxiosError).response?.data.code === "400") {
  //       alert(
  //         "가게 정보를 불러오지 못했습니다. 통신 상태 확인 후 다시 한번 시도해주세요.",
  //       );
  //     }
  //   }
  // };

  return (
    <div css={Container}>
      <BottomNav />
      <input
        placeholder="검색할 내용을 입력해 주세요."
        onChange={(e) => setSearchWord(e.target.value)}
      />

      <div id="map" style={{ height: "400px" }} />
    </div>
  );
};

export default CustomerMain;
