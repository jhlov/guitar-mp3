import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SpeedIcon from "@mui/icons-material/Speed";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Lesson } from "components/Lesson";
import { BookData, ChapterData, books } from "data";
import _ from "lodash";
import { useEffect, useMemo } from "react";
import { Link, useRouteMatch } from "react-router-dom";

interface Params {
  id?: string;
  cid?: string;
}

export const Chapter = () => {
  const match = useRouteMatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [match.params]);

  const bookData: BookData | undefined = useMemo(() => {
    const id = (match.params as Params).id;
    return books.find(book => book.id === id);
  }, [match.params]);

  const chapterData: ChapterData | undefined = useMemo(() => {
    const cid = (match.params as Params).cid;
    return bookData?.chapters.find(chapter => chapter.id === cid);
  }, [match.params, bookData]);

  const getTimeString = (time: number | undefined) => {
    if (_.isNil(time) || isNaN(time)) {
      return "--:--";
    }

    return `${Math.floor(time / 60)}:${Math.floor(time % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  const currentChapterIndex = useMemo(() => {
    if (!bookData || !chapterData) return 0;
    return bookData.chapters.findIndex(c => c.id === chapterData.id);
  }, [bookData, chapterData]);

  const prevChapter = useMemo(() => {
    if (!bookData || currentChapterIndex <= 0) return null;
    return bookData.chapters[currentChapterIndex - 1];
  }, [bookData, currentChapterIndex]);

  const nextChapter = useMemo(() => {
    if (!bookData || currentChapterIndex >= bookData.chapters.length - 1)
      return null;
    return bookData.chapters[currentChapterIndex + 1];
  }, [bookData, currentChapterIndex]);

  if (!bookData || !chapterData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl text-white mb-4">챕터를 찾을 수 없습니다.</h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold"
        >
          <ArrowBackIcon fontSize="small" />
          <span>목록으로 돌아가기</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Chapter Top Navigation & Header */}
      <div className="sticky top-16 z-40 -mx-4 px-4 sm:mx-0 sm:px-0 py-3 backdrop-blur-md bg-studio-bg/90 border-b border-studio-border">
        <div className="flex items-center justify-between gap-3">
          {/* Back to Book Button */}
          <Link
            to={`/${bookData.id}`}
            className="w-10 h-10 rounded-xl bg-studio-surface border border-studio-border hover:border-amber-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all no-underline shrink-0"
            title={`${bookData.title} 챕터 목록`}
          >
            <ArrowBackIcon fontSize="small" />
          </Link>

          {/* Title and Index in Center */}
          <div className="text-center overflow-hidden flex-1 px-2">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-studio-accent font-semibold mb-0.5">
              <span>{bookData.title}</span>
              <span>•</span>
              <span>
                CH.{chapterData.id} ({currentChapterIndex + 1} /{" "}
                {bookData.chapters.length})
              </span>
            </div>
            <h1 className="text-base sm:text-xl font-bold text-white truncate m-0">
              {chapterData.title}
            </h1>
          </div>

          {/* Prev / Next Chapter Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            {prevChapter ? (
              <Link
                to={`/${bookData.id}/${prevChapter.id}`}
                className="w-9 h-9 rounded-xl bg-studio-surface border border-studio-border hover:border-amber-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all no-underline"
                title={`이전: ${prevChapter.title}`}
              >
                <NavigateBeforeIcon fontSize="small" />
              </Link>
            ) : (
              <div className="w-9 h-9 rounded-xl bg-studio-surface/40 border border-studio-border/40 text-slate-600 flex items-center justify-center cursor-not-allowed">
                <NavigateBeforeIcon fontSize="small" />
              </div>
            )}

            {nextChapter ? (
              <Link
                to={`/${bookData.id}/${nextChapter.id}`}
                className="w-9 h-9 rounded-xl bg-studio-surface border border-studio-border hover:border-amber-500/60 text-slate-300 hover:text-white flex items-center justify-center transition-all no-underline"
                title={`다음: ${nextChapter.title}`}
              >
                <NavigateNextIcon fontSize="small" />
              </Link>
            ) : (
              <div className="w-9 h-9 rounded-xl bg-studio-surface/40 border border-studio-border/40 text-slate-600 flex items-center justify-center cursor-not-allowed">
                <NavigateNextIcon fontSize="small" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chapter Overview Banner */}
      <div className="rounded-2xl border border-studio-border bg-gradient-to-r from-slate-900 to-studio-surface p-5 sm:p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
            CHAPTER {chapterData.id}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-1">
            {chapterData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 m-0">
            총 {chapterData.lessons.length}개의 연습 프레이즈가 수록되어 있습니다.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {chapterData.hasBackingTrack && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
              <SportsEsportsIcon fontSize="small" />
              <span>드럼 반주 수록</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            <span>{chapterData.lessons.length} Lessons</span>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-6">
        {chapterData.lessons.map((lesson, i) => {
          const effectiveEnd = lesson.end ?? chapterData.lessons[i + 1]?.start;

          return (
            <div
              key={`${bookData.id}_${chapterData.id}_${lesson.title}_${i}`}
              className="rounded-2xl border border-studio-border bg-studio-surface p-5 sm:p-6 text-left space-y-4 hover:border-studio-borderLight transition-colors shadow-lg"
            >
              {/* Lesson Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                <div className="flex items-start sm:items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    {i + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide m-0 leading-snug">
                    {lesson.title}
                  </h3>
                </div>

                {/* Badges: BPM & Track Duration */}
                <div className="flex items-center gap-2 pl-9 sm:pl-0 shrink-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono font-semibold">
                    <SpeedIcon style={{ fontSize: "14px" }} />
                    <span>BPM {lesson.bpm}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 text-xs font-mono">
                    <AccessTimeIcon style={{ fontSize: "14px" }} />
                    <span>
                      {getTimeString(lesson.start)} ~ {getTimeString(effectiveEnd)}
                    </span>
                  </span>
                </div>
              </div>

              {/* Lesson Audio Player Section */}
              <Lesson
                bookId={bookData.id}
                chapterId={chapterData.id}
                lessonIndex={i}
                lessonData={{
                  ...lesson,
                  end: effectiveEnd
                }}
                hasBackingTrack={chapterData.hasBackingTrack ?? false}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation for Next Chapter */}
      <div className="pt-6 border-t border-studio-border flex items-center justify-between">
        {prevChapter ? (
          <Link
            to={`/${bookData.id}/${prevChapter.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-studio-surface border border-studio-border hover:border-amber-500/60 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all no-underline"
          >
            <NavigateBeforeIcon fontSize="small" />
            <span className="truncate max-w-[150px] sm:max-w-none">
              이전: CH.{prevChapter.id}
            </span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          to={`/${bookData.id}`}
          className="text-xs text-slate-400 hover:text-white no-underline font-medium"
        >
          챕터 목록으로
        </Link>

        {nextChapter ? (
          <Link
            to={`/${bookData.id}/${nextChapter.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-md transition-all no-underline"
          >
            <span className="truncate max-w-[150px] sm:max-w-none">
              다음: CH.{nextChapter.id}
            </span>
            <NavigateNextIcon fontSize="small" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
