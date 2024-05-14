"use client";
import LandingPage from "@/views/LandingPage";
import WhatsappSlideOut from "@/components/WhatsappSlideOut";
import useGlobalStore from "@/store/global";
import { QueryClient, QueryClientProvider } from "react-query";
import mixpanel from "mixpanel-browser";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  const queryClient = new QueryClient();

  mixpanel.init("fa298e932b62a35082fc9c7513d81663", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });

  mixpanel.identify("praise");

  mixpanel.track("Sign Up", {
    "Signup Type": "Referral",
  });

  const { isSignupOpen, toggleIsSignupOpen } = useGlobalStore((state) => ({
    isSignupOpen: state.data.isSignupOpen,
    toggleIsSignupOpen: state.toggleIsSignupOpen,
  }));

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <LandingPage />
          <WhatsappSlideOut
            isActive={isSignupOpen}
            handleToggle={() => toggleIsSignupOpen()}
          />
        </NextUIProvider>
      </QueryClientProvider>
    </>
  );
}
