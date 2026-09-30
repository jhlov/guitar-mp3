export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-studio-border/60 bg-studio-surface/50 py-8 text-center text-xs text-studio-textMuted">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>기타 연습 전용 오디오 플레이어 • A-B 구간 반복 & 배속 조절 지원</span>
        </div>
        <div>
          <span>© 2024-{new Date().getFullYear()} Guitar MP3. Crafted for Guitarists.</span>
        </div>
      </div>
    </footer>
  );
};
