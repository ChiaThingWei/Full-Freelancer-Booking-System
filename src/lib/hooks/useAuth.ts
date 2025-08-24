// src/hooks/useAuth.ts
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // 改成你实际 supabaseClient 的路径
import type { Session } from "@supabase/supabase-js";

export function useAuth() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return session; // 注意这里可能是 undefined, null, 或 session
}
