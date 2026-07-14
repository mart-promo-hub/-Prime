useEffect(() => {
  const checkPiSDK = () => {
    if (typeof window !== "undefined" && (window as any).Pi) {
      try {
        (window as any).Pi.init({
          appId: "M69FT1ID8qPG_U8VxMmbxZ9ZvsgSx-0sCvvADTFj9CI",
          version: "1.0",
          sandbox: true,
        });
        setIsSDKReady(true);
        console.log("✅ Pi SDK ready");
        return true;
      } catch (err) {
        console.error("Pi.init error:", err);
        setError("فشل تهيئة Pi SDK");
        return false;
      }
    }
    return false;
  };

  // تحقق فوري
  if (checkPiSDK()) return;

  // تحقق كل 200ms
  const interval = setInterval(() => {
    if (checkPiSDK()) {
      clearInterval(interval);
    }
  }, 200);

  // مهلة 10 ثوانٍ
  const timeout = setTimeout(() => {
    clearInterval(interval);
    setError("تعذر تحميل Pi SDK، تأكد من فتح التطبيق في Pi Browser");
  }, 10000);

  return () => {
    clearInterval(interval);
    clearTimeout(timeout);
  };
}, []);
