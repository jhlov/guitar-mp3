import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { BookData, books } from "data";
import { useMemo, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

interface Params {
  id?: string;
}

export const Book = () => {
  const match = useRouteMatch();
  const [searchQuery, setSearchQuery] = useState("");

  const bookId = (match.params as Params).id;

  const bookData: BookData | undefined = useMemo(() => {
    return books.find(book => book.id === bookId);
  }, [bookId]);

  const filteredChapters = useMemo(() => {
    if (!bookData) return [];
    if (!searchQuery.trim()) return bookData.chapters;

    const q = searchQuery.toLowerCase().trim();
    return bookData.chapters.filter(chapter => {
      const matchTitle = chapter.title.toLowerCase().includes(q);
      const matchId = chapter.id.toLowerCase().includes(q);
      const matchLesson = chapter.lessons.some(l =>
        l.title.toLowerCase().includes(q)
      );
      return matchTitle || matchId || matchLesson;
    });
  }, [bookData, searchQuery]);

  if (!bookData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl text-white mb-4">교재를 찾을 수 없습니다.</h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold"
        >
          <ArrowBackIcon fontSize="small" />
          <span>교재 목록으로 돌아가기</span>
        </Link>
      </div>
    );
  }

  const isHell = bookData.id === "hell-basic";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Top Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-studio-border">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="w-10 h-10 rounded-xl bg-studio-surface border border-studio-border hover:border-amber-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all no-underline shrink-0"
            title="교재 목록으로"
          >
            <ArrowBackIcon fontSize="small" />
          </Link>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] px-2 py-0.5 rounded font-semibold border ${
                  isHell
                    ? "bg-rose-500/20 text-rose-300 border-rose-500/30"
                    : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                }`}
              >
                {isHell ? "초절 테크닉" : "데일리 마스터"}
              </span>
              <span className="text-xs text-slate-400">
                총 {bookData.chapters.length}개 챕터
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 m-0 flex items-center gap-2">
              {bookData.title}
              {isHell && (
                <LocalFireDepartmentIcon className="text-rose-500 text-2xl" />
              )}
            </h1>
          </div>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full sm:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <SearchIcon fontSize="small" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="챕터 번호, 키워드 검색..."
            className="w-full pl-9 pr-8 py-2 text-sm bg-studio-surface border border-studio-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-500 hover:text-white"
            >
              <ClearIcon style={{ fontSize: "16px" }} />
            </button>
          )}
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            {searchQuery ? (
              <>
                검색 결과:{" "}
                <strong className="text-amber-400">
                  {filteredChapters.length}
                </strong>
                개 챕터
              </>
            ) : (
              `전체 ${bookData.chapters.length}개 챕터 목록`
            )}
          </span>
          <span className="hidden sm:inline">
            원하는 챕터를 클릭하여 레슨 음원을 재생하세요
          </span>
        </div>

        {filteredChapters.length === 0 ? (
          <div className="rounded-2xl border border-studio-border bg-studio-surface/50 p-12 text-center space-y-3">
            <p className="text-slate-400 text-sm m-0">
              "{searchQuery}"에 해당하는 챕터를 찾을 수 없습니다.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 rounded-xl bg-studio-border text-xs text-white hover:bg-studio-borderLight transition-colors"
            >
              검색 초기화
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredChapters.map(chapter => {
              return (
                <Link
                  key={chapter.id}
                  to={`/${bookData.id}/${chapter.id}`}
                  className="group rounded-2xl border border-studio-border bg-studio-surface hover:bg-slate-900/90 hover:border-amber-500/60 p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl no-underline flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Chapter Index & Backing Tag */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        CH.{chapter.id.padStart(2, "0")}
                      </span>
                      {chapter.hasBackingTrack && (
                        <span className="flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-full font-medium">
                          <SportsEsportsIcon style={{ fontSize: "13px" }} />
                          <span>반주 포함</span>
                        </span>
                      )}
                    </div>

                    {/* Chapter Title */}
                    <h3 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                      {chapter.title}
                    </h3>
                  </div>

                  {/* Bottom Row: Lessons Count & Arrow */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MusicNoteIcon style={{ fontSize: "14px" }} />
                      <span>{chapter.lessons.length}개 예제 프레이즈</span>
                    </span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center">
                      <PlayCircleOutlineIcon fontSize="small" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
