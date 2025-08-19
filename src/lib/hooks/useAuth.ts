// src/hooks/useAuth.ts
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // 改成你实际 supabaseClient 的路径
import type { Session } from "@supabase/supabase-js";

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // 先获取一次
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    // 监听变化
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return session;
}
