export interface BookData {
  id: string;
  title: string;
  chapters: ChapterData[];
}

export interface ChapterData {
  id: string;
  title: string;
  hasBackingTrack?: boolean;
  lessons: LessonData[];
}

export interface LessonData {
  title: string;
  bpm: number;
  start: number;
  end?: number;
}

export const books: BookData[] = [
  {
    id: "guitar365",
    title: "기초 기타 트레이닝 365일",
    chapters: [
      {
        id: "1",
        title: "1주차 각 손가락이 독립해서 움직일 수 있도록 해주는 트레이닝",
        hasBackingTrack: true,
        lessons: [
          {
            title:
              "매일 손가락을 확실히 벌리고, 2번-3번-4번 손가락을 세우고 줄을 누르는 연습",
            bpm: 100,
            start: 0,
            end: 13
          },
          {
            title: "월 1->3->2-> 4, 4->2->3->1 의 연습",
            bpm: 100,
            start: 13,
            end: 26
          },
          {
            title:
              "화 전반은 1번 손가락, 후반은 4번 손가락을 기준으로 움직인다",
            bpm: 100,
            start: 26,
            end: 39
          },
          {
            title: "수 운지의 지정을 엄수하면서 연주하는 셋잇단음 프레이즈",
            bpm: 100,
            start: 39,
            end: 52.5
          },
          {
            title: "목 3개 단위로 반복하는 프레이즈",
            bpm: 110,
            start: 52.5,
            end: 64
          },
          {
            title: "금 1프렛 포지션 이동",
            bpm: 100,
            start: 64,
            end: 76
          },
          {
            title: "토 2프렛 포지션 이동",
            bpm: 110,
            start: 76
          }
        ]
      },
      {
        id: "2",
        title: "2주차 얼터네이트 피킹의 기본동작",
        hasBackingTrack: true,
        lessons: [
          {
            title: "매일 다운과 업을 확실히 의식하면서 연습하자",
            bpm: 120,
            start: 0,
            end: 11.5
          },
          {
            title: "월 코드 아르페지오로 얼터네이트 트레이닝",
            bpm: 120,
            start: 11.5,
            end: 22
          },
          {
            title: "화 셋잇단음을 얼터네이트로 연주",
            bpm: 90,
            start: 22,
            end: 36
          },
          {
            title: "수 코드 톤으로 구성된 얼터네이트 프레이즈",
            bpm: 110,
            start: 36,
            end: 47.5
          },
          {
            title: "목 헛피킹을 섞은 얼터네이트를 유지하자",
            bpm: 120,
            start: 47.5,
            end: 58.5
          },
          {
            title:
              "금 싱코페이션을 많이 사용한 프레이즈에서 얼터네이트를 유지하자",
            bpm: 100,
            start: 58.5,
            end: 71
          },
          {
            title: "토 해머링을 할 때에 헛피킹을 넣어서 얼터네이트를 유지하자",
            bpm: 100,
            start: 71
          }
        ]
      },
      {
        id: "3",
        title: "3주차 모든 줄을 종이동하는 트레이닝",
        hasBackingTrack: true,
        lessons: [
          {
            title:
              "매일 손가락을 풀로 사용해서 모든 줄을 망라하는 기초 트레이닝",
            bpm: 80,
            start: 0,
            end: 16
          },
          {
            title: "월 상승 시 : 1->3->2->4, 하강 시 : 4->2->3->1",
            bpm: 100,
            start: 16,
            end: 32
          },
          {
            title: "화 상승 시 : 1->4->2->3, 하강 시 : 4->1->3->2",
            bpm: 80,
            start: 32,
            end: 47.5
          },
          {
            title: "수 셋잇단음 리듬에 얹은 모든 줄에 걸친 메카니컬 트레이닝",
            bpm: 100,
            start: 47.5,
            end: 60.2
          },
          {
            title: "목 모두 반음단위로 하강하는 크로매틱 트레이닝",
            bpm: 110,
            start: 60.2,
            end: 72
          },
          {
            title: "금 1.5음 단위로 상승->하강하는 트레이닝",
            bpm: 100,
            start: 72,
            end: 84.5
          },
          {
            title:
              "토 소리가 겹치지 않도록 연주하는 모든 줄에 걸친 메커니컬 트레이닝",
            bpm: 80,
            start: 84.5
          }
        ]
      },
      {
        id: "4",
        title: "4주차 메커니컬하게 횡이동하는 트레이닝",
        hasBackingTrack: true,
        lessons: [
          {
            title: "매일 6번 줄을 반음단위로 상승, 하강하는 횡이동",
            bpm: 90,
            start: 0,
            end: 14.5
          },
          {
            title: "월 4번 손가락을 쓰지 않고, 3개의 음을 연주하고 나면 횡이동",
            bpm: 80,
            start: 14.5,
            end: 30.5
          },
          {
            title: "화 4번과 1번 손가락의 횡이동",
            bpm: 80,
            start: 30.5,
            end: 46
          },
          {
            title: "수 2&3번 줄에서 2프렛분의 횡이동을 반복한다.",
            bpm: 110,
            start: 46,
            end: 58
          },
          {
            title: "목 1&2번 줄을 상승, 하강하면서 격렬하게 횡이동",
            bpm: 80,
            start: 58,
            end: 73.5
          },
          {
            title: "금 음계는 심플하지만 상당히 난이도가 높은 횡이동",
            bpm: 100,
            start: 73.5,
            end: 86
          },
          {
            title:
              "토 각 줄에 2개의 손가락으로 도레미를 연주한다! 경악의 포지션 이동",
            bpm: 80,
            start: 86
          }
        ]
      },
      {
        id: "5",
        title: "5주차 메이저 스케일에서 자주 사용되는 포지션",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 개방현을 섞어서 도레미...를 연주하자",
            bpm: 90,
            start: 0,
            end: 14.5
          },
          {
            title: "월 프렛과 운지가 일정한 C메이저 스케일 포지션",
            bpm: 90,
            start: 14.5,
            end: 29
          },
          {
            title: "화 A마이너 펜타토닉 근처에서 연주하는 C메이저 스케일",
            bpm: 90,
            start: 29,
            end: 42.5
          },
          {
            title: "수 메이저 스케일의 평행이동",
            bpm: 80,
            start: 42.5,
            end: 58.5
          },
          {
            title: "목 규칙적으로 배열되어 속주에 적합한 C메이저 스케일 포지션",
            bpm: 90,
            start: 58.5,
            end: 72.5
          },
          {
            title: "금 도미레파미솔파라...로 연주하는 패턴",
            bpm: 90,
            start: 72.5,
            end: 86.5
          },
          {
            title: "토 도레미파솔라시를 다양한 위치에서 연주하자.",
            bpm: 70,
            start: 86.5
          }
        ]
      },
      {
        id: "17",
        title: "17주차 필살! 비브라토 도장",
        hasBackingTrack: true,
        lessons: [
          {
            title: "매일 느긋한 스피드로 비브라토를 몸에 익히자",
            bpm: 120,
            start: 0,
            end: 11
          },
          {
            title: "월 1번 손가락에 의한 1번 줄 비브라토 연습",
            bpm: 120,
            start: 11,
            end: 22
          },
          {
            title: "화 진폭이 큰 3번 손가락 비브라토를 반복",
            bpm: 120,
            start: 22,
            end: 33
          },
          {
            title: "수 1박자 늘인 후에 비브라토 걸기",
            bpm: 120,
            start: 33,
            end: 43
          },
          {
            title: "목 블루지한 프레이즈에서의 비브라토",
            bpm: 120,
            start: 43.5,
            end: 54
          },
          {
            title: "금 격렬한 비브라토+글리스 다운으로 기타가 외치도록!",
            bpm: 100,
            start: 54,
            end: 67
          },
          {
            title: "토 스무스한 슬라이드->비브라토",
            bpm: 100,
            start: 67
          }
        ]
      },
      {
        id: "18",
        title: "18주차 초킹+펜타토닉의 정석 프레이즈",
        hasBackingTrack: true,
        lessons: [
          {
            title: "매일 초킹과 초킹 다운을 섞은 펜타토닉",
            bpm: 120,
            start: 0,
            end: 11
          },
          {
            title: "월 초킹으로 인해서 다른 현 같은 줄이 되는 정석 프레이즈",
            bpm: 120,
            start: 11,
            end: 22
          },
          {
            title:
              "화 분위기가 고조되면 프레이즈는 그대로 유지하고 리듬을 바꾼다",
            bpm: 110,
            start: 22,
            end: 33.5
          },
          {
            title: "수 쿼터 초킹의 연습",
            bpm: 110,
            start: 33.5,
            end: 45
          },
          {
            title: "목 특색있는 초킹 프레이즈",
            bpm: 100,
            start: 45,
            end: 58
          },
          {
            title: "금 임팩트가 강한 1음반 초킹",
            bpm: 120,
            start: 58,
            end: 69
          },
          {
            title: "토 여러가지 초킹이 들어간 실전 프레이즈",
            bpm: 140,
            start: 69
          }
        ]
      },
      {
        id: "19",
        title: "19주차 여러 가지 키의 마이너 펜타토닉",
        hasBackingTrack: true,
        lessons: [
          {
            title: "매일 A마이너 펜타토닉->G마이너 펜타토닉",
            bpm: 100,
            start: 0,
            end: 13.5
          },
          {
            title: "월 E마이너 펜타토닉->G마이너 펜타토닉",
            bpm: 100,
            start: 13.5,
            end: 26
          },
          {
            title: "화 Bb마이너 펜타토닉->D마이너 펜타토닉",
            bpm: 100,
            start: 26,
            end: 39
          },
          {
            title: "수 E마이너 펜타토닉->D마이너 펜타토닉",
            bpm: 140,
            start: 39,
            end: 48
          },
          {
            title: "목 G마이너 펜타토닉과 C마이너 펜타토닉",
            bpm: 100,
            start: 48,
            end: 61
          },
          {
            title: "금 C#마이너 펜타토닉과 F#마이너 펜타토닉",
            bpm: 100,
            start: 61,
            end: 73.5
          },
          {
            title: "토 B->A, G->F마이너 펜타토닉",
            bpm: 100,
            start: 73.5
          }
        ]
      },
      {
        id: "20",
        title: "20주차 다양한 초킹을 구사하자",
        hasBackingTrack: true,
        lessons: [
          {
            title: "매일 4번 손가락으로 1번 줄을 누른 채로 2번 줄을 초킹",
            bpm: 100,
            start: 0,
            end: 13.5
          },
          {
            title: "월 쿼터 초킹을 마스터하자",
            bpm: 120,
            start: 13.5,
            end: 24
          },
          {
            title: "화 1번 손가락에 의한 1음 초킹",
            bpm: 100,
            start: 24,
            end: 36.5
          },
          {
            title: "수 다른 줄 같은 프렛의 복음 초킹",
            bpm: 140,
            start: 36.5,
            end: 46
          },
          {
            title: "목 슬라이드+1음반 초킹의 조합 테크닉",
            bpm: 120,
            start: 46,
            end: 56.5
          },
          {
            title: "금 초크 업이 컨트리 스타일을 느끼게 하는 프레이즈",
            bpm: 80,
            start: 56.5,
            end: 72
          },
          {
            title: "토 호텔 캘리포니아 스타일의 초킹->비브라토",
            bpm: 120,
            start: 72
          }
        ]
      }
    ]
  }
];
