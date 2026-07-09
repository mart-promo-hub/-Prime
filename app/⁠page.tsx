"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState("جاري فحص الاتصال ببيئة Pi...");

  useEffect(() => {
    // دالة للتحقق من وجود مكتبة Pi SDK
    const checkPiConnection = () => {
      // التحقق من وجود الكائن window.Pi
      if (typeof window !== 'undefined' && window.Pi) {
        setConnectionStatus("✅ تم الاتصال بـ Pi بنجاح! التطبيق جاهز.");
      } else {
        // إذا لم يظهر، ننتظر نصف ثانية ونحاول مرة أخرى
        setTimeout(checkPiConnection, 500);
      }
    };

    checkPiConnection();
  }, []);

  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#5C338A' }}>πPrime AI</h1>
      <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        {connectionStatus}
      </p>
      <div style={{ marginTop: '20px', color: '#777' }}>
        استضافتك تعمل بشكل مستقر الآن.
      </div>
    </div>
  );
}
