/** Animated black infinity (∞) favicon — transparent background */

const SIZE = 64;
const FPS = 14;

function drawInfinity(ctx, t) {
  ctx.clearRect(0, 0, SIZE, SIZE);

  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const scale = 11.5;

  // Parametric infinity / lemniscate of Bernoulli
  // x = scale * cos(a) / (1 + sin²(a))
  // y = scale * sin(a) * cos(a) / (1 + sin²(a))
  const points = [];
  const steps = 160;
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const s = Math.sin(a);
    const c = Math.cos(a);
    const d = 1 + s * s;
    points.push({
      x: cx + (scale * 1.55 * c) / d,
      y: cy + (scale * 1.35 * s * c) / d,
    });
  }

  // Soft trailing stroke (motion)
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Base infinity outline
  ctx.beginPath();
  points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.closePath();
  ctx.strokeStyle = "rgba(0, 0, 0, 0.28)";
  ctx.lineWidth = 5.5;
  ctx.stroke();

  ctx.beginPath();
  points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.closePath();
  ctx.strokeStyle = "rgba(0, 0, 0, 0.92)";
  ctx.lineWidth = 3.2;
  ctx.stroke();

  // Traveling “moment” spark along the loop
  const head = (t * 0.55) % 1;
  for (let k = 0; k < 18; k++) {
    const u = (head - k * 0.012 + 1) % 1;
    const idx = Math.floor(u * steps);
    const p = points[idx];
    const alpha = 1 - k / 18;
    const r = 2.4 - k * 0.08;
    ctx.beginPath();
    ctx.fillStyle = `rgba(0, 0, 0, ${0.15 + alpha * 0.85})`;
    ctx.arc(p.x, p.y, Math.max(0.6, r), 0, Math.PI * 2);
    ctx.fill();
  }

  // Bright tip
  const tip = points[Math.floor(head * steps)];
  ctx.beginPath();
  ctx.fillStyle = "#000";
  ctx.arc(tip.x, tip.y, 2.8, 0, Math.PI * 2);
  ctx.fill();
}

export function startGalaxyFavicon() {
  if (typeof document === "undefined") return;

  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/png";

  let start = performance.now();
  let frame = 0;

  const tick = (now) => {
    frame += 1;
    if (frame % Math.max(1, Math.round(60 / FPS)) === 0) {
      const t = (now - start) / 1000;
      drawInfinity(ctx, t);
      link.href = canvas.toDataURL("image/png");
    }
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
