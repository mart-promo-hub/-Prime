"use client";

import { usePi } from "@/components/PiProvider";
import { useState } from "react";

export default function Home() {
  const { ready } = usePi();

  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>("");

  async function loginWithPi() {
    setError("");

    try {
      if (!window.Pi) {
        throw new Error("Pi SDK غير محمل");
      }

      const scopes = ["username"];

      const auth = await window.Pi.authenticate(
        scopes,
        (payment: any) => {
          console.log("Payment callback:", payment);
        }
      );

      console.log("Pi Auth:", auth);

      setUser(auth.user);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "فشل تسجيل الدخول بواسطة Pi");
    }
  }


  if (!ready) {
    return (
      <main style={{ padding: 30 }}>
        <h2>
          جاري تحميل Pi SDK...
        </h2>
      </main>
    );
  }


  return (
    <main style={{ padding: 30 }}>

      <h1>
        πPrime AI
      </h1>


      {!user ? (

        <button
          onClick={loginWithPi}
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          تسجيل الدخول بواسطة Pi
        </button>

      ) : (

        <div>

          <h2>
            مرحباً {user.username}
          </h2>

          <p>
            تم تسجيل الدخول بنجاح بواسطة Pi Network
          </p>

        </div>

      )}


      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

    </main>
  );
}
