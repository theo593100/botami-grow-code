import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Tracks a page view for the current route.
 * Call once per landing page component.
 */
export function usePageView(route: string) {
  useEffect(() => {
    supabase
      .from("landing_page_events")
      .insert({ route, event_type: "page_view" })
      .then(); // fire-and-forget
  }, [route]);
}

/**
 * Returns a function that tracks a CTA click for the given route.
 */
export function useTrackCTAClick(route: string) {
  return () => {
    supabase
      .from("landing_page_events")
      .insert({ route, event_type: "cta_click" })
      .then(); // fire-and-forget
  };
}
