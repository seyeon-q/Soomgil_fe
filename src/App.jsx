// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import SetupPage from "./pages/SetupPage.jsx";
import LoadingPage from "./pages/LoadingPage";
import ResultPage from "./pages/ResultPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import CustomWalkPage from "./pages/CustomWalkPage";
import CustomLoadingPage from "./pages/CustomLoadingPage";
import CustomResultPage from "./pages/CustomResultPage";
import RecommendationPage1 from "./pages/RecommendationPage1.jsx";
import RecommendationPage2 from "./pages/RecommendationPage2.jsx";
import L from "leaflet";

// 마커 아이콘 수동 설정
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SetupPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/custom-walk" element={<CustomWalkPage />} />
      <Route path="/custom-loading" element={<CustomLoadingPage />} />
      <Route path="/custom-result" element={<CustomResultPage />} />
      <Route path="/recommendation1" element={<RecommendationPage1 />} />
      <Route path="/recommendation2" element={<RecommendationPage2 />} />
      </Routes>
  );
}



