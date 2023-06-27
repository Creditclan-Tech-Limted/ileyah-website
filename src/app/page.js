'use client'
import LandingPage from "@/views/LandingPage";
import WhatsappSlideOut from "@/components/WhatsappSlideOut";
import useGlobalStore from "@/store/global";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import TagManager from "react-gtm-module";


export default function Home() {
  useEffect(() => {
    console.log('enter');
    TagManager.initialize({ gtmId: 'GTM-5DKKR2P' });
  }, [])

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
