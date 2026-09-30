import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FastForwardIcon from "@mui/icons-material/FastForward";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RepeatIcon from "@mui/icons-material/Repeat";
import SpeedIcon from "@mui/icons-material/Speed";
import { books } from "data";
import { Link } from "react-router-dom";

export const Books = () => {
  const getBookMeta = (id: string) => {
    if (id === "guitar365") {
      return {
        badge: "데일리 마스터",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        gradient: "from-amber-600/30 via-orange-950/20 to-slate-900",
        borderHover: "hover:border-amber-500/60",
        accentColor: "text-amber-400",
        subtitle: "손가락 독립성부터 스케일, 속주까지 52주간의 완성 코스",
        tags: ["피킹 메커니즘", "운지 독립", "메이저 스케일", "아르페지오"]
      };
    }
    return {
      badge: "초절 테크닉",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      gradient: "from-rose-600/30 via-purple-950/20 to-slate-900",
      borderHover: "hover:border-rose-500/60",
      accentColor: "text-rose-400",
      subtitle: "지옥 시리즈의 정통 베이직! 기본기부터 탄탄한 초절 기교 테크닉",
      tags: ["지옥 테크닉", "루트 운지", "리듬 훈련", "파워 코드"]
    };
  };

  const totalChapters = books.reduce((acc, b) => acc + b.chapters.length, 0);
  const totalLessons = books.reduce(
    (acc, b) => acc + b.chapters.reduce((cAcc, c) => cAcc + c.lessons.length, 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden border border-studio-border bg-gradient-to-b from-slate-900/90 to-studio-surface p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <AutoAwesomeIcon style={{ fontSize: "14px" }} />
            <span>기타 연습을 위한 궁극의 음원 플레이어</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Guitar Training <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Studio Player
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            원하는 마디를 무한 반복하고 속도를 자유자재로 조절하세요. 모범 연주와 드럼
            반주 트랙을 비교하며 기타 실력을 가장 빠르게 성장시킬 수 있습니다.
          </p>

          {/* Feature Badges */}
          <div className="pt-2 flex flex-wrap gap-3 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <RepeatIcon fontSize="small" className="text-amber-400" />
              <span>A-B 구간 무한 반복</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <SpeedIcon fontSize="small" className="text-amber-400" />
              <span>0.5x ~ 1.0x 배속 조절</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <FastForwardIcon fontSize="small" className="text-cyan-400" />
              <span>모범 연주 & 드럼 트랙</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="relative z-10 mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {books.length}권
            </div>
            <div className="text-xs text-slate-400">수록 교재</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
              {totalChapters}개
            </div>
            <div className="text-xs text-slate-400">총 챕터 (주차)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
              {totalLessons}+
            </div>
            <div className="text-xs text-slate-400">연습 프레이즈</div>
          </div>
        </div>
      </section>

      {/* Books List Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-left">
            <MenuBookIcon className="text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide m-0">
              연습 교재 선택
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            교재를 선택하여 챕터와 음원을 확인하세요
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map(book => {
            const meta = getBookMeta(book.id);
            const lessonCount = book.chapters.reduce(
              (acc, c) => acc + c.lessons.length,
              0
            );

            return (
              <Link
                key={book.id}
                to={`/${book.id}`}
                className={`group relative rounded-2xl border border-studio-border bg-gradient-to-br ${meta.gradient} p-6 sm:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${meta.borderHover} no-underline block`}
              >
                {/* Header Tag & Chapter Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold border ${meta.badgeColor} flex items-center gap-1`}
                  >
                    {book.id === "hell-basic" && (
                      <LocalFireDepartmentIcon style={{ fontSize: "14px" }} />
                    )}
                    {meta.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800">
                    {book.chapters.length} Chapters / {lessonCount} Lessons
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {book.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {meta.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {meta.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-semibold">
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                    트레이닝 시작하기
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-400 flex items-center justify-center transition-all">
                    <ArrowForwardIcon fontSize="small" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Practice Pro Tips */}
      <section className="rounded-2xl border border-studio-border bg-studio-surface/50 p-6 text-left">
        <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
          <span className="text-amber-400">💡</span> 기타 트레이닝 팁
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed m-0">
          처음 연습할 때는 배속을 <strong className="text-amber-300">0.7x ~ 0.8x</strong>로
          낮추고 <strong className="text-amber-300">반복(Loop)</strong> 기능을 활성화하여
          운지와 피킹 폼이 정확해질 때까지 천천히 반복하세요. 손에 익숙해진 후 정속(1.0x) 및
          드럼 반주 트랙에 맞추어 연주하면 실력이 빠르게 향상됩니다.
        </p>
      </section>
    </div>
  );
};
