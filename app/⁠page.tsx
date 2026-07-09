"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState("جاري الاتصال بـ Pi...");

  useEffect(() => {
    // التأكد من أن المتصفح قد حمل الـ SDK
    if (window.Pi) {
      setStatus("تم الاتصال بـ Pi بنجاح! جاهز للبدء.");
    } else {
      setStatus("لا يمكن العثور على Pi SDK. تأكد من فتح التطبيق داخل Pi Browser.");
    }
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>πPrime AI</h1>
      <p>{status}</p>
      <div style={{ marginTop: '20px', color: '#666' }}>
        استضافتك تعمل، والآن نقوم بضبط الاتصال.
      </div>
    </div>
  );
}
