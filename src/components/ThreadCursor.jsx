import { useEffect, useRef } from "react";

export default function ThreadCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    window.addEventListener("resize", () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    });

    const N       = 28;
    const SEG_LEN = 5;
    const LERP    = 0.22;

    let tx = -300, ty = -300;
    let sx = -300, sy = -300;
    const nodes = Array.from({ length: N }, () => ({ x: -300, y: -300 }));

    let inside  = false;
    let restF   = 0;
    let moving  = false;
    let showLen = 0;

    document.addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; inside = true; });
    document.addEventListener("mouseleave", () => { inside = false; });
    document.addEventListener("mouseenter", () => { inside = true; });

    let raf;
    function loop() {
      raf = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W, H);
      if (!inside) return;

      sx += (tx - sx) * LERP;
      sy += (ty - sy) * LERP;

      const spd = Math.hypot(tx - sx, ty - sy);
      if (spd > 1.5) { moving = true; restF = 0; }
      else { restF++; if (restF > 8) moving = false; }

      if (moving) showLen = Math.min(showLen + 2.5, N);
      else        showLen = Math.max(showLen - 1.4, 0);

      nodes[N - 1].x = sx;
      nodes[N - 1].y = sy;
      for (let i = N - 2; i >= 0; i--) {
        if (moving) {
          const nx = nodes[i + 1].x, ny = nodes[i + 1].y;
          const dx = nodes[i].x - nx, dy = nodes[i].y - ny;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
          if (dist > SEG_LEN) {
            nodes[i].x = nx + (dx / dist) * SEG_LEN;
            nodes[i].y = ny + (dy / dist) * SEG_LEN;
          }
        } else {
          const pull = 0.08 + (N - 1 - i) / N * 0.1;
          nodes[i].x += (sx - nodes[i].x) * pull;
          nodes[i].y += (sy - nodes[i].y) * pull;
        }
      }

      const vL = Math.floor(showLen);
      if (vL >= 2) {
        const sl = nodes.slice(N - vL);
        const n  = sl.length;
        const fa = Math.min(showLen / 5, 1);

        const drawPath = pts => {
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length - 1; i++) {
            ctx.quadraticCurveTo(pts[i].x, pts[i].y,
              (pts[i].x + pts[i + 1].x) * 0.5,
              (pts[i].y + pts[i + 1].y) * 0.5);
          }
          ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        };

        ctx.save(); ctx.globalAlpha = fa * 0.06;
        ctx.beginPath(); drawPath(sl);
        ctx.strokeStyle = "#ff1a1a"; ctx.lineWidth = 14;
        ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke();
        ctx.restore();

        ctx.save(); ctx.globalAlpha = fa * 0.14;
        ctx.beginPath(); drawPath(sl);
        ctx.strokeStyle = "#ff3030"; ctx.lineWidth = 5;
        ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke();
        ctx.restore();

        const grad = ctx.createLinearGradient(sl[0].x, sl[0].y, sl[n - 1].x, sl[n - 1].y);
        grad.addColorStop(0,   "rgba(100,0,0,0)");
        grad.addColorStop(0.35,"rgba(180,12,12,0.45)");
        grad.addColorStop(1,   "rgba(255,45,45,1)");
        ctx.save(); ctx.globalAlpha = fa;
        ctx.beginPath(); drawPath(sl);
        ctx.strokeStyle = grad; ctx.lineWidth = 1.4;
        ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke();
        ctx.restore();
      }

      ctx.beginPath();
      ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ff3333"; ctx.fill();
      const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, 9);
      g.addColorStop(0, "rgba(255,60,60,0.5)");
      g.addColorStop(1, "rgba(255,60,60,0)");
      ctx.beginPath(); ctx.arc(sx, sy, 9, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
    }

    loop();
    return () => { cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed", top: 0, left: 0,
      width: "100vw", height: "100vh",
      pointerEvents: "none", zIndex: 99999 }} />
  );
}
