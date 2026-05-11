import "@/index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import MainPage from "@/pages/MainPage";
import CreatePage from "@/pages/CreatePage";
import VideoPage from "@/pages/VideoPage";
import FormatsPage from "@/pages/FormatsPage";
import AuthPage from "@/pages/AuthPage";
import AuthCallback from "@/components/custom/AuthCallback";
import UpgradePage from "@/pages/UpgradePage";
import VoiceAssistantPage from "@/pages/VoiceAssistantPage";
import { initThemeFromStorage } from "@/components/custom/AppearancePopup";

// Initialize theme from localStorage before any render
initThemeFromStorage();

// Check for session_id in URL before rendering normal routes
function AppRouter() {
  const location = useLocation();

  // CRITICAL: Check URL fragment for session_id synchronously during render
  if (location.hash?.includes('session_id=')) {
    return <AuthCallback />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/video/:id" element={<VideoPage />} />
      <Route path="/formats" element={<FormatsPage />} />
      <Route path="/upgrade" element={<UpgradePage />} />
      <Route path="/voice" element={<VoiceAssistantPage />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {/*
        Sonner v2 has native swipe-to-dismiss and auto-dismiss.
        - duration={8000}: each toast auto-dismisses after 8 seconds.
        - swipeDirections={['top']}: user can swipe a toast up to dismiss it.
        - position="top-center": toasts appear at the top.
      */}
      <Toaster
        position="top-center"
        duration={8000}
        swipeDirections={['top']}
        closeButton={false}
        toastOptions={{
          duration: 8000,
          style: {
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '24px',
            color: '#000',
            touchAction: 'pan-y',
          },
        }}
      />
    </div>
  );
}

export default App;
