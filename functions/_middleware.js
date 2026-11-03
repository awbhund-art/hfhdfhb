export default {
  async fetch(request, env) {
    const userAgent = request.headers.get("user-agent") || "";
    
    // 1. Mobile user detect karne ka logic
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isMobileDevice = isMobile || request.cf?.deviceType === "mobile";

    // 2. Agar mobile user hai toh is URL par bhejein
    if (isMobileDevice) {
      return Response.redirect("https://craftaggregate.com", 302);
    }

    // 3. Agar desktop user hai toh google.com par bhejein
    return Response.redirect("https://google.com", 302);
  },
};
