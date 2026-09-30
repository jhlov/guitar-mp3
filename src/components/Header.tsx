import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Link, useLocation } from "react-router-dom";
import { books } from "../data";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-studio-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-white hover:text-studio-accent transition-colors no-underline group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
            <MusicNoteIcon className="text-white text-xl" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
              GUITAR <span className="text-studio-accent">MP3</span>
            </span>
            <span className="text-[11px] text-studio-textMuted tracking-tight -mt-1 font-sans">
              스마트 기타 트레이닝 플레이어
            </span>
          </div>
        </Link>

        {/* Navigation Quick Links */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all no-underline flex items-center gap-1.5 ${
              location.pathname === "/"
                ? "bg-studio-accent text-slate-950 font-bold shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-studio-surface/80"
            }`}
          >
            <LibraryMusicIcon fontSize="small" />
            <span className="hidden sm:inline">교재 목록</span>
          </Link>

          {/* Quick Book Selector */}
          <div className="hidden md:flex items-center gap-1 border-l border-studio-border pl-3">
            {books.map(book => {
              const isActive = location.pathname.startsWith(`/${book.id}`);
              return (
                <Link
                  key={book.id}
                  to={`/${book.id}`}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all no-underline ${
                    isActive
                      ? "bg-studio-borderLight text-studio-accent font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-studio-card"
                  }`}
                >
                  {book.id === "guitar365" ? "365일 트레이닝" : "지옥의 베이직"}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
