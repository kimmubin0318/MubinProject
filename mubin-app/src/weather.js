import React, { useEffect } from "react";
import useStore from "./store";

// Weather 선언
const Weather = () => {
  // useStore 필요한 것들을 가져옴
  const { weather, city, loading, error, setCity, fetchWeather } = useStore();

  // city가 변경될 때마다
  // fetchWeather 함수를 호출하여 날씨 정보를 가져옴
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city, fetchWeather]);

  // 검색 버튼을 클릭했을 때 호출되는
  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
    }
  };
  return (
    <div>
      <h1>날씨를 알려드립니다.</h1>
      <input
        type="text"
        placeholder="도시 이름을 영어로 검색해!" // 아무것도 입력하지 않았을 때 뜨는 문자
        value={city} // city 상태 연결
        onChange={(e) => setCity(e.target.value)}
        // 사용자가 입력하면 상태 업데이트
      />
      <button onClick={handleSearch}>검색</button>
      {/* 검색 버튼을 클릭하면 호출되는 handleSearch 함수가 호출됩니당 */}

      {loading && <p>검색 중</p>}
      {/* 로딩 중 일 때  */}

      {/* 존재할 때 날씨 정보를 표시함니답 */}
      {weather && (
        <div>
          <h2>도시 이름 : {weather.name}</h2>
          <h3>온도: {weather.main.temp}</h3>
          <h3>날씨: {weather.weather[0].description}</h3>
        </div>
      )}
    </div>
  );
};
export default Weather;
