'use client'
import { createContext, useContext, useEffect } from "react";
import mixpanel from "mixpanel-browser";
// import { useAuth } from "./use-auth.js";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

const mixpanelContext = createContext({
  track: () => null
});

export const MixpanelProvider = ({ children }) => {
  mixpanel.init(token, { debug: true, ignore_dnt: true });

  const track = (event) => {
    try {
      mixpanel.track(event, {
        source: document.referrer
      });
    } catch (e) {
      console.log('Mixpanel error', e);
    }
  }

  return <mixpanelContext.Provider value={ { track } }>{ children }</mixpanelContext.Provider>
}

export const useMixpanel = () => {
  // const { user } = useAuth();
  useEffect(() => {
    if (!user?.userId) return;
    if (mixpanel.get_distinct_id() === user.userId) return;
    mixpanel.identify(user.userId);
    mixpanel.people.set({
      name: user.name,
      email: user.email,
      phone: user.phoneNumber
    });
  }, [user]);

  return useContext(mixpanelContext);
}
