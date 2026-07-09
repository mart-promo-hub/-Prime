"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState("جاري التحقق من الاتصال بـ Pi SDK...");

  useEffect(() => {
    // وظيفة للتحقق المتكرر من وجود SDK
    const checkSDK = () => {
      if (typeof window !== 'undefined' && window.Pi) {
        setStatus("تم الاتصال بـ Pi بنجاح! جاهز للبدء.");
      } else {
        // إذا لم يتم العثور عليه، ننتظر 500 ملي ثانية ونعيد المحاولة
        setTimeout(checkSDK, 500);
      }
    };

    checkSDK();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>πPrime AI</h1>
      <p style={{ marginTop: '20px', color: '#333' }}>{status}</p>
    </div>
  );
}
