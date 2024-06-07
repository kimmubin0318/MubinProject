import { create } from "zustand";
//zustand 에서 create import
import axios from "axios";

//useStore 정의
const useStore = create((set) => ({
  weather: null,
  city: "",
  loading: false,
  error: false,

  setCity: (city) => set({ city }),

  // API에서 가져와서 쓰기 위한 fetchWeather
  fetchWeather: async (city) => {
    // async , await 비동기 처리 패턴
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3abd46deef9f593dbae13b38ad7b70f3&units=metric`
      );
      set({ weather: response.data, loading: false });
    } catch (error) {
      set({ error: true, loading: false });
    }
  },
}));

export default useStore;
