// BlogRedirect.tsx
import { useEffect } from "react";
export default function BlogRedirect() {
  useEffect(() => {
    window.location.replace("https://blog.aidccompany.com");
  }, []);
  return null;
}
