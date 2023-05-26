'use client'
import LandingPage from "@/Views/LandingPage";
import WhatsappSlideOut from "@/components/WhatsappSlideOut";
import useGlobalStore from "@/store/global";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient()

  const { isSignupOpen, toggleIsSignupOpen } = useGlobalStore(state => ({
    isSignupOpen: state.data.isSignupOpen,
    toggleIsSignupOpen: state.toggleIsSignupOpen
  }));
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LandingPage />
        <WhatsappSlideOut isActive={isSignupOpen}
          handleToggle={() => toggleIsSignupOpen()} />
      </QueryClientProvider>
    </>
  )
}
