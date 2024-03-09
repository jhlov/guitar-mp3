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
        id: "6",
        title: "6주차 해머링&풀링의 특훈!",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 각 손가락을 균등하게 해머링&풀링",
            bpm: 100,
            start: 0
          },
          {
            title: "월 6~3번 줄을 이동하면서, 각 손가락을 해머링&풀링",
            bpm: 120,
            start: 13.5
          },
          {
            title: "화 해머링&풀링으로 무작정 소리를 이어가자",
            bpm: 110,
            start: 24
          },
          {
            title: "수 해머링&풀링 강화 프레이즈",
            bpm: 130,
            start: 35.5
          },
          {
            title: "목 1번 줄을 스트레치하는 기분으로 해머링&풀링",
            bpm: 120,
            start: 45.5
          },
          {
            title: "금 1줄에서 3개의 음을 연주하는 속주의 상투적 패턴",
            bpm: 120,
            start: 56.5
          },
          {
            title: "토 완전히 넌피킹으로 연주하는 왼손강화 프레이즈",
            bpm: 120,
            start: 67
          }
        ]
      },
      {
        id: "7",
        title: "7주차 메이저 스케일의 7포지션",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 파에서 시작하는 포지션",
            bpm: 100,
            start: 0
          },
          {
            title: "월 솔에서 시작하는 포지션",
            bpm: 100,
            start: 13
          },
          {
            title: "화 라에서 시작하는 포지션",
            bpm: 100,
            start: 26
          },
          {
            title: "수 시에서 시작하는 포지션",
            bpm: 100,
            start: 38.5
          },
          {
            title: "목 도에서 시작하는 포지션",
            bpm: 100,
            start: 51
          },
          {
            title: "금 레에서 시작하는 포지션",
            bpm: 100,
            start: 64
          },
          {
            title: "토 미에서 시작하는 포지션",
            bpm: 100,
            start: 76.5
          }
        ]
      },
      {
        id: "8",
        title: "8주차 손가락의 독립성을 단련하는 트레이닝",
        hasBackingTrack: false,
        lessons: [
          {
            title:
              "매일 1번, 2번 손가락을 고정하고, 3번과 4번 손가락의 독립을 연습하자",
            bpm: 80,
            start: 0
          },
          {
            title: "월 독립적으로 움직이기 힘든 3번 손가락 집중 단련",
            bpm: 80,
            start: 16.5
          },
          {
            title: "화 2번과 4번 손가락에 의한 특이한 컴비 플레이를 트레이닝",
            bpm: 80,
            start: 32
          },
          {
            title: "수 스트레치하는 기분으로 1번과 2번 손가락으로 해머링&풀링",
            bpm: 100,
            start: 47.5
          },
          {
            title:
              "목 왼손 전체의 허둥거림을 강제적으로 억제하는 3번 손가락 고정 프레이즈",
            bpm: 100,
            start: 60.5
          },
          {
            title: "금 손가락을 유연하게 하는 2번 손가락 고정 트레이닝",
            bpm: 100,
            start: 73
          },
          {
            title:
              "토 4번 손가락이 바깥으로 뻗어버리는 것을 미연에 방지하는 트레이닝",
            bpm: 90,
            start: 86
          }
        ]
      },
      {
        id: "9",
        title: "9주차 줄 건너뛰기 피킹",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 6번 줄->5, 4, 3번 줄로 이동하는 기초 프레이즈",
            bpm: 120,
            start: 0
          },
          {
            title: "월 코드음을 연주하는 2번 줄 건너뛰기 프레이즈",
            bpm: 100,
            start: 11.5
          },
          {
            title: "화 코드음을 연주하는 3번 줄 건너뛰기 프레이즈",
            bpm: 100,
            start: 24
          },
          {
            title: "수 슬라이드, 풀링이 들어간 4번 줄 건너뛰기 프레이즈",
            bpm: 100,
            start: 37
          },
          {
            title: "목 5, 4번 줄 건너뛰기 프레이즈",
            bpm: 100,
            start: 50
          },
          {
            title: "금 하이퍼 감각의 줄 건너뛰기",
            bpm: 100,
            start: 62.5
          },
          {
            title: "토 줄 건너뛰기로 연주하는 5화음 코드 아르페지오",
            bpm: 100,
            start: 75
          }
        ]
      },
      {
        id: "10",
        title: "10주차 스트레치를 향상시키는 트레이닝",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 손가락의 균등한 스트레치로 줄이동하는 기초 트레이닝",
            bpm: 100,
            start: 0
          },
          {
            title: "월 스트레치를 사용한 클래시컬 프레이즈",
            bpm: 100,
            start: 13.5
          },
          {
            title: "화 인터벌이 큰 스트레치 특유의 프레이즈",
            bpm: 100,
            start: 26
          },
          {
            title: "수 넌피킹으로 음을 연결하는 스트레치",
            bpm: 210,
            start: 39
          },
          {
            title: "목 기절할만한 1번~4번 손가락 스트레치",
            bpm: 100,
            start: 45
          },
          {
            title: "금 코드 아르페지오를 스트레치로 연주하자",
            bpm: 100,
            start: 58
          },
          {
            title: "토 1옥타브 차이로 도레미를 연주하는 고난이도 스트레치",
            bpm: 80,
            start: 70.5
          }
        ]
      },
      {
        id: "11",
        title: "11주차 각종 뮤트를 마스터하자",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 브릿지 뮤트를 사용해서 연주하는 6번 줄 단음 리프",
            bpm: 120,
            start: 0
          },
          {
            title: "월 6번 줄 개방의 브릿지 뮤트를 섞은 리프",
            bpm: 120,
            start: 11.5
          },
          {
            title: "화 5번 줄 개방의 브릿지 뮤트를 섞은 리프",
            bpm: 120,
            start: 22
          },
          {
            title: "수 6번 줄 뮤트 음과 복음의 구분연주가 어려운 리프",
            bpm: 120,
            start: 33
          },
          {
            title: "목 특정 음에 브릿지 뮤트를 건 솔로",
            bpm: 120,
            start: 43.5
          },
          {
            title: "금 오른손 엄지를 줄에 대고 완전하게 뮤트",
            bpm: 120,
            start: 54
          },
          {
            title: "토 코드 스트로크하면서 뮤트",
            bpm: 120,
            start: 65
          }
        ]
      },
      {
        id: "12",
        title: "12주차 스무스한 조인트를 마스터하자",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 3&4번 줄의 조인트를 반복하는 기초 트레이닝",
            bpm: 80,
            start: 0
          },
          {
            title: "월 줄이동을 하면서 조인트하는 프레이즈 - 1",
            bpm: 100,
            start: 16
          },
          {
            title: "화 줄이동을 하면서 조인트하는 프레이즈 - 2",
            bpm: 100,
            start: 29
          },
          {
            title: "수 조인트의 왕복 패턴을 셋잇단음으로 연주하자",
            bpm: 100,
            start: 42
          },
          {
            title: "목 4음 패턴으로 나오는 조인트 프레이즈",
            bpm: 110,
            start: 54.5
          },
          {
            title: "금 3줄에 걸친 고난이도 조인트 프레이즈",
            bpm: 120,
            start: 66
          },
          {
            title: "토 복음&풀링이 들어간 조인트 프레이즈",
            bpm: 160,
            start: 77
          }
        ]
      },
      {
        id: "13",
        title: "13주차 다이내믹스 컨트롤",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 악센트 부분에서 강하게 연주하는 프레이즈",
            bpm: 120,
            start: 0
          },
          {
            title:
              "월 상승 시에는 점점 크게, 하강 시에는 점점 작게 연주하는 스케일 연습",
            bpm: 100,
            start: 11.5
          },
          {
            title: "화 셋잇단음의 첫 음을 세게 연주하는 프레이즈",
            bpm: 120,
            start: 24
          },
          {
            title: "수 펜타토닉의 상승, 하강에 맞춰서 강약을 조절한다",
            bpm: 100,
            start: 35
          },
          {
            title:
              "목 강하게 연주하는 것은 코드음, 약하게 연주하는 것은 넌코드음",
            bpm: 100,
            start: 47.5
          },
          {
            title: "금 같은 음에 강약을 주면서 연주하는 프레이즈",
            bpm: 100,
            start: 60
          },
          {
            title: "토 파워 코드에 강약을 주면서 연주하는 프레이즈",
            bpm: 120,
            start: 73
          }
        ]
      },
      {
        id: "14",
        title: "14주차 마이너 펜타토닉의 기본 포지션",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 A마이너 펜타토닉 6번 줄 루트 포지션",
            bpm: 120,
            start: 0
          },
          {
            title: "월 A마이너 펜타토닉에 의한 정석 중의 정석 프레이즈",
            bpm: 110,
            start: 11.5
          },
          {
            title: "화 A마이너 펜타토닉 6번 줄 루트의 슬라이드를 포함한 포지션",
            bpm: 80,
            start: 23
          },
          {
            title: "수 같은 패턴의 프레이즈를 옥타브 차이로 연주하자",
            bpm: 90,
            start: 39
          },
          {
            title: "목 A마이너 펜타토닉 5번 줄 루트 포지션",
            bpm: 110,
            start: 53
          },
          {
            title:
              "금 슬라이드가 들어간 포지션에서 옥타브 차이의 같은 프레이즈를 연주하자",
            bpm: 130,
            start: 64.5
          },
          {
            title: "토 16분 음표에 의한 프레이즈를 옥타브 차이로 연주하자",
            bpm: 100,
            start: 74
          }
        ]
      },
      {
        id: "15",
        title: "15주차 다양한 포지션의 마이너 펜타토닉",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 6번 줄 위에서 A마이너 펜타토닉의 구성음을 연주하자",
            bpm: 70,
            start: 0
          },
          {
            title: "월 라, 도에서 시작하는 포지션",
            bpm: 80,
            start: 18.5
          },
          {
            title: "화 레, 미에서 시작하는 포지션",
            bpm: 80,
            start: 34
          },
          {
            title: "수 솔, 라에서 시작하는 포지션",
            bpm: 80,
            start: 50
          },
          {
            title: "목 3개의 펜타토닉 포지션을 왕복하는 프레이즈",
            bpm: 130,
            start: 65.5
          },
          {
            title: "금 6개의 단위로 복수의 포지션을 왕복하는 프레이즈",
            bpm: 130,
            start: 76
          },
          {
            title: "토 로우 프렛에서 하이 프렛까지 펜타토닉으로 횡단!",
            bpm: 140,
            start: 86
          }
        ]
      },
      {
        id: "16",
        title: "16주차 초킹 엑서사이즈",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 반음, 1음 초킹의 음정확인 연습",
            bpm: 100,
            start: 0
          },
          {
            title: "월 초킹 타이밍의 바리에이션",
            bpm: 100,
            start: 13.5
          },
          {
            title: "화 정석적인 초킹 프레이즈의 반복",
            bpm: 100,
            start: 26
          },
          {
            title: "수 1번 손가락에 의한 초킹",
            bpm: 120,
            start: 38
          },
          {
            title: "목 3번 손가락에 의한 끌어내리는 초킹",
            bpm: 100,
            start: 48
          },
          {
            title: "금 반음 초킹 엑서사이즈",
            bpm: 100,
            start: 61
          },
          {
            title: "토 초킹을 섞은 정석적인 블루스 프레이즈",
            bpm: 160,
            start: 74
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
      },
      {
        id: "21",
        title: "21주차 음표가 혼재한 프레이즈를 연주하자",
        hasBackingTrack: false,
        lessons: [
          {
            title:
              "매일 4분음표->8분음표->셋잇단음->16분음표의 순서로 연주하는 프레이즈",
            bpm: 110,
            start: 0
          },
          {
            title: "월 8분음표와 셋잇단음이 2박자씩 바뀐다",
            bpm: 110,
            start: 12
          },
          {
            title: "화 8분음표->16분음표로 연주하는 2배속 프레이즈",
            bpm: 100,
            start: 24
          },
          {
            title: "수 셋잇단음과 16분음표가 1박자마다 바뀐다",
            bpm: 100,
            start: 36.5
          },
          {
            title: "목 16분음표, 다섯잇단음표에 특화된 프레이즈",
            bpm: 80,
            start: 49
          },
          {
            title: "금 2박자 셋잇단음 프레이즈",
            bpm: 110,
            start: 65
          },
          {
            title: "토 셋잇단음표->16분음표를 섞은 음계연습",
            bpm: 110,
            start: 76.5
          }
        ]
      },
      {
        id: "22",
        title: "22주차 돌출주의! 리듬 바꾸기",
        hasBackingTrack: false,
        lessons: [
          {
            title:
              "매일 4음 세트의 프레이즈를 8분음표, 셋잇단음표, 16분음표로 연주",
            bpm: 100,
            start: 0
          },
          {
            title: "월 전반 '도레미파', 후반 '솔파미레'를 셋잇단음으로 연주",
            bpm: 100,
            start: 13
          },
          {
            title: "화 4음 세트로 상승->하강하는 스케일 연습",
            bpm: 100,
            start: 26
          },
          {
            title: "수 5음 세트로 이동하는 리듬 바꾸기 프레이즈",
            bpm: 100,
            start: 39
          },
          {
            title: "목 해머링&풀링이 섞인 실전 프레이즈",
            bpm: 120,
            start: 51.5
          },
          {
            title: "금 5음 세트의 프레이즈를 16분음표로 연주",
            bpm: 110,
            start: 62
          },
          {
            title: "토 4음 세트를 여섯잇단음으로 속주",
            bpm: 80,
            start: 74
          }
        ]
      },
      {
        id: "23",
        title: "23주차 리듬의 뒷박자를 느끼는 트레이닝",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 8분음표 뒷박자를 연타하는 리프 트레이닝",
            bpm: 140,
            start: 0
          },
          {
            title: "월 점4분음이 연속되는 싱코페이션",
            bpm: 160,
            start: 9.8
          },
          {
            title: "화 같은 프레이즈를 후반에서는 8분음표 어긋나게 연주",
            bpm: 160,
            start: 18
          },
          {
            title: "수 2박자마다 8분쉼표가 들어가는 패턴",
            bpm: 160,
            start: 26
          },
          {
            title: "목 끝까지 8분음표 뒷박자를 연주하는 코드 백킹",
            bpm: 160,
            start: 34.5
          },
          {
            title: "금 16분음표 뒷박자 연발 리프",
            bpm: 110,
            start: 43
          },
          {
            title: "토 셔플 리듬으로 뒷박자를 연주",
            bpm: 120,
            start: 54.5
          }
        ]
      },
      {
        id: "24",
        title: "24주차 메트로놈을 활용한 트레이닝",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 2분음표로 메트로놈을 울리면서 연주하는 트레이닝",
            bpm: 110,
            start: 0
          },
          {
            title: "월 2&4박자 째에 메트로놈을 울리는 단순한 리프",
            bpm: 110,
            start: 12
          },
          {
            title: "화 1소절에 1번 메트로놈을 울리면서 연주하는 록 계열 리프",
            bpm: 110,
            start: 24
          },
          {
            title: "수 8분음표 뒷박자에서 메트로놈을 울린다",
            bpm: 110,
            start: 36
          },
          {
            title: "목 1, 3박자 째 뒷박자에서 메트로놈을 울린다",
            bpm: 110,
            start: 48
          },
          {
            title: "금 2&4박자 째 뒷박자에 메트로놈을 울리면서 연주하는 리프",
            bpm: 110,
            start: 59
          },
          {
            title: "토 16분음표 뒷박자에서 메트로놈을 울리는 고난이도 프레이즈",
            bpm: 90,
            start: 71
          }
        ]
      },
      {
        id: "25",
        title: "25주차 재빠른 코드 체인지 트레이닝",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 Low코드의 코드 체인지를 무작정 반복",
            bpm: 80,
            start: 0
          },
          {
            title: "월 매일 연주할 악보와 같은 코드진행을 A키로 연주",
            bpm: 80,
            start: 16.5
          },
          {
            title: "화 5&6번 줄 루트의 바레코드 체인지",
            bpm: 120,
            start: 32
          },
          {
            title: "수 생략형 코드 폼으로 코드 체인지",
            bpm: 120,
            start: 42.5
          },
          {
            title: "목 1번과 4번 손가락은 움직이지 않고 연주하는 커팅",
            bpm: 120,
            start: 53
          },
          {
            title: "금 다이어토닉 코드를 가까운 포지션에서 해결",
            bpm: 100,
            start: 64
          },
          {
            title: "토 난해한 코드 체인지에 도전",
            bpm: 110,
            start: 77
          }
        ]
      },
      {
        id: "26",
        title: "26주차 코드 커팅 트레이닝",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 나인스 코드에 의한 펑키한 커팅",
            bpm: 100,
            start: 0
          },
          {
            title: "월 코드를 누르는 타이밍을 바꾸는 연습 - 1",
            bpm: 100,
            start: 13
          },
          {
            title: "화 코드를 누르는 타이밍을 바꾸는 연습 - 2",
            bpm: 100,
            start: 26
          },
          {
            title: "수 3번 손가락 바레코드에 의한 나인스 코드",
            bpm: 100,
            start: 38.5
          },
          {
            title: "목 팝스의 정석적인 코드 커팅",
            bpm: 110,
            start: 51
          },
          {
            title: "금 Dm7(9)의 쿨한 울림이 인상적인 코드 커팅",
            bpm: 110,
            start: 62.5
          },
          {
            title: "토 지미 헨드릭스 스타일의 코드 커팅",
            bpm: 110,
            start: 74
          }
        ]
      },
      {
        id: "27",
        title: "27주차 단음 커팅 트레이닝",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 3번 줄 단음 커팅",
            bpm: 100,
            start: 0
          },
          {
            title: "월 16분음표로 연주하는 펑키한 단음 커팅",
            bpm: 100,
            start: 13
          },
          {
            title: "화 좀 더 움직임이 있는 단음 커팅",
            bpm: 100,
            start: 26
          },
          {
            title: "수 블루 노트를 넣은 소울 계열의 단음 커팅",
            bpm: 100,
            start: 38.5
          },
          {
            title: "목 오른손을 브릿지에 두고 연주하는 단음 뮤트 커팅 프레이즈",
            bpm: 110,
            start: 50.5
          },
          {
            title: "금 해머링을 섞어서 풍부한 뉘앙스의 단음 뮤트 커팅",
            bpm: 110,
            start: 62
          },
          {
            title: "토 코드음을 중심으로 연주하는 팝스 계열 단음 뮤트 커팅",
            bpm: 110,
            start: 74
          }
        ]
      },
      {
        id: "28",
        title: "28주차 커팅의 바리에이션",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 코드 커팅과 단음 커팅을 섞은 패턴",
            bpm: 110,
            start: 0
          },
          {
            title: "월 2줄을 울리는 것만으로 듣기 좋은 코드 커팅",
            bpm: 110,
            start: 12
          },
          {
            title: "화 16분음표가 섞인 8비트 커팅",
            bpm: 140,
            start: 23.5
          },
          {
            title: "수 반박자 셋잇단음이 들어간 테크니컬 커팅",
            bpm: 110,
            start: 33
          },
          {
            title:
              "목 고음 줄의 코드음과 저음 줄의 단음을 조합한 실전적인 커팅",
            bpm: 95,
            start: 44.5
          },
          {
            title: "금 옥타브 주법에 의한 커팅",
            bpm: 120,
            start: 57.5
          },
          {
            title: "토 다른 줄 같은 프렛에 의한 리프 커팅",
            bpm: 115,
            start: 68
          }
        ]
      },
      {
        id: "29",
        title: "29주차 강력한 임팩트! 초퍼 주법",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 오른손 엄지와 왼손 2번&3번 손가락으로 줄 때리기",
            bpm: 100,
            start: 0
          },
          {
            title: "월 1번 손가락에 의한 '풀'을 섞은 초퍼",
            bpm: 100,
            start: 13
          },
          {
            title: "화 왼손 때리기, 오른손 때리기&1번 손가락 풀을 조합한 초퍼",
            bpm: 125,
            start: 25.5
          },
          {
            title: "수 6번 줄을 1번 손가락으로 풀하고, 스릴감을 연출하자.",
            bpm: 125,
            start: 36
          },
          {
            title: "목 슬라이드를 섞어서 다채롭게 공격하는 초퍼 프레이즈",
            bpm: 125,
            start: 46.5
          },
          {
            title: "금 오른손 섬핑만으로 연주하는 초퍼",
            bpm: 120,
            start: 57
          },
          {
            title: "토 6번 줄 개방 해머링을 도입한 하이퍼 초퍼",
            bpm: 140,
            start: 67.5
          }
        ]
      },
      {
        id: "30",
        title: "30주차 인사이드&아웃사이드 피킹",
        hasBackingTrack: false,
        lessons: [
          {
            title:
              "매일 전반을 인사이드, 후반을 아웃사이드로 연주하는 5번 줄 건너뛰기 패턴",
            bpm: 120,
            start: 0
          },
          {
            title: "월 얼터네이트로 연주하는 인사이드에 의한 프레이즈",
            bpm: 100,
            start: 11
          },
          {
            title: "화 얼터네이트로 연주하는 아웃사이드에 의한 프레이즈",
            bpm: 100,
            start: 24
          },
          {
            title: "수 풀링을 섞은 아웃사이드 피킹",
            bpm: 110,
            start: 37
          },
          {
            title:
              "목 같은 프레이즈를 전반은 인사이드, 후반은 아웃사이드로 연주",
            bpm: 110,
            start: 48.5
          },
          {
            title: "금 셋잇단음 프레이즈에서의 인사이드와 아웃사이드",
            bpm: 120,
            start: 60
          },
          {
            title: "토 아웃사이드 피킹이 적합한 프레이즈",
            bpm: 120,
            start: 71
          }
        ]
      },
      {
        id: "31",
        title: "31주차 피킹의 속도를 높혀라",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 반박자 셋잇단음으로 빠른 피킹을 익히자",
            bpm: 100,
            start: 0
          },
          {
            title: "월 3음 세트 패턴을 셋잇단음->16분음표로 연주",
            bpm: 110,
            start: 13.5
          },
          {
            title: "화 노도의 여섯잇단음 트레몰로 피킹",
            bpm: 100,
            start: 25
          },
          {
            title: "수 반박자 셋잇단음에 의한 스케일 연습",
            bpm: 110,
            start: 38
          },
          {
            title: "목 6음 세트 프레이즈를 4박자 째만 여섯잇단음으로 연주",
            bpm: 110,
            start: 49.5
          },
          {
            title: "금 왼손 주도 의식을 훈련하는 속주 프레이즈",
            bpm: 100,
            start: 61
          },
          {
            title:
              "토 전반은 해머링&풀링,후반은 전부피킹으로 연주하는 프레이즈",
            bpm: 120,
            start: 74
          }
        ]
      },
      {
        id: "32",
        title: "32주차 속주 특훈 주간",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 왼손만 움직이면 여섯잇단음 속주도 간단하다!",
            bpm: 110,
            start: 0
          },
          {
            title: "월 해머링 속주 프레이즈",
            bpm: 160,
            start: 12
          },
          {
            title: "화 군데군데 여섯잇단음이 들어간 프레이즈",
            bpm: 120,
            start: 20.5
          },
          {
            title: "수 강약을 주어서 상승, 하강하는 프레이즈",
            bpm: 130,
            start: 31
          },
          {
            title: "목 해머링&풀링을 사용한 펜타토닉",
            bpm: 140,
            start: 41
          },
          {
            title: "금 1번 줄만을 연주하는 속주 프레이즈",
            bpm: 105,
            start: 50.5
          },
          {
            title: "토 2번 손가락을 병용한 속주 프레이즈",
            bpm: 160,
            start: 62.5
          }
        ]
      },
      {
        id: "33",
        title: "33주차 레가토 주법",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 최초 첫 음도 해머링으로 시작해서 끝까지 넌피킹으로",
            bpm: 140,
            start: 0
          },
          {
            title: "월 5음 단위의 프레이즈를 반복하면서 슬라이드로 연결한다",
            bpm: 120,
            start: 10
          },
          {
            title: "화 지옥의 6번 줄 넌피킹 프레이즈",
            bpm: 120,
            start: 20.5
          },
          {
            title:
              "수 4번 손가락으로 줄을 때려서 각 박자의 첫 음을 내는 프레이즈",
            bpm: 140,
            start: 31.5
          },
          {
            title: "목 음정차이가 큰 여섯잇단음 속주 프레이즈",
            bpm: 90,
            start: 40.5
          },
          {
            title: "금 눈 깜빡할 사이에 내려가는 레가토 속주",
            bpm: 160,
            start: 55
          },
          {
            title:
              "토 해머링&풀링, 슬라이드를 구사한 현대적인 초고속 속주 패텅",
            bpm: 120,
            start: 63
          }
        ]
      },
      {
        id: "34",
        title: "34주차 도리안&믹솔리디안 스케일",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 도리안&믹솔리디안 스케일",
            bpm: 80,
            start: 0
          },
          {
            title: "월 E도리안 스케일을 사용한 쿨한 솔로",
            bpm: 70,
            start: 16.5
          },
          {
            title: "화 해머링&풀링, 슬라이드로 억양을 넣은 솔로",
            bpm: 90,
            start: 34
          },
          {
            title: "수 D믹솔리디안에 의한 연습 프레이즈",
            bpm: 70,
            start: 48
          },
          {
            title: "목 D믹솔리디안에 의한 실전적인 프레이즈",
            bpm: 90,
            start: 66
          },
          {
            title: "금 A->B도리안에 의한 음정차이가 큰 프레이즈",
            bpm: 100,
            start: 80
          },
          {
            title: "토 C->F믹솔리디안에 의한 펑키한 프레이즈",
            bpm: 100,
            start: 93
          }
        ]
      },
      {
        id: "35",
        title: "35주차 마이너 펜타토닉에 텐션을 더하자",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 A마이너 펜타토닉으로 A도리안을 만들어낸다",
            bpm: 80,
            start: 0
          },
          {
            title: "월 A도리안에 의한 음정차이가 큰 프레이즈",
            bpm: 90,
            start: 16.5
          },
          {
            title: "화 D마이너 펜타토닉으로 D도리안을 만들어낸다",
            bpm: 90,
            start: 30.5
          },
          {
            title: "수 D도리안에 의한 실전적인 프레이즈",
            bpm: 100,
            start: 44.5
          },
          {
            title: "목 C마이너 펜타토닉에 △3rd, 13th, b5th를 더한 프레이즈",
            bpm: 160,
            start: 57.5
          },
          {
            title: "금 C마이너 펜타토닉을 근거로 코드 음을 넣은 프레이즈",
            bpm: 160,
            start: 65.5
          },
          {
            title: "토 C마이너 펜타토닉을 근거로 다양한 음을 넣은 재지한 솔로",
            bpm: 100,
            start: 74
          }
        ]
      },
      {
        id: "36",
        title: "36주차 메이저&마이너 펜타토닉의 구분",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 C메이저 펜타토닉->C마이너 펜타토닉의 기초연습",
            bpm: 120,
            start: 0
          },
          {
            title: "월 스무스하게 펜타토닉을 바꾸는 실전적인 프레이즈",
            bpm: 120,
            start: 11
          },
          {
            title: "화 1소절마다 펜타토닉을 바꾼 프레이즈",
            bpm: 100,
            start: 22
          },
          {
            title:
              "수 G메이저 펜타토닉부터 G마이너 펜타토닉으로 바꾸는 블루스 프레이즈",
            bpm: 120,
            start: 35
          },
          {
            title:
              "목 G마이너 펜타토닉의 5번 줄 루트 포지션으로 이동하는 플레이",
            bpm: 100,
            start: 45.5
          },
          {
            title: "금 메이저&마이너 펜타토닉을 섞은 플레이",
            bpm: 100,
            start: 58
          },
          {
            title: "토 메이저&마이너 펜타토닉을 망라한 컨트리 프레이즈",
            bpm: 100,
            start: 70
          }
        ]
      },
      {
        id: "37",
        title: "37주차 셔플리듬으로 피킹",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 셋잇단음의 셔플로 '튀는 리듬'을 익히자",
            bpm: 110,
            start: 0
          },
          {
            title: "월 C메이저 스케일을 튀는 리듬으로 연주",
            bpm: 110,
            start: 12
          },
          {
            title: "화 B마이너 펜타토닉을 튀는 리듬으로 연주",
            bpm: 120,
            start: 24
          },
          {
            title: "수 8분음표->셔플로 변하는 기타리프",
            bpm: 120,
            start: 34.5
          },
          {
            title: "목 오른손의 릴렉스가 요구되는 튀는 16분음표",
            bpm: 95,
            start: 45.5
          },
          {
            title: "금 경쾌한 튀는 16분음 기타 리프",
            bpm: 100,
            start: 59
          },
          {
            title: "토 약간 튀는 리듬으로 연주하는 재지한 프레이징",
            bpm: 100,
            start: 71.5
          }
        ]
      },
      {
        id: "38",
        title: "38주차 셔플비트를 배우자",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 셋잇단음으로 코드 커팅",
            bpm: 120,
            start: 0
          },
          {
            title: "월 피킹 패턴에 주의가 필요한 코드 커팅",
            bpm: 120,
            start: 11
          },
          {
            title: "화 전부 다운으로 연주하는 블루스 계열의 백킹",
            bpm: 120,
            start: 22
          },
          {
            title: "수 강력한 연주가 어울리는 셔플 계열 코드 백킹",
            bpm: 130,
            start: 33
          },
          {
            title: "목 튀는 16분음으로 연주하는 펑키한 코드 커팅",
            bpm: 90,
            start: 42.5
          },
          {
            title: "금 슬라이드를 섞은 튀는 16분음 코드 커팅",
            bpm: 95,
            start: 56
          },
          {
            title: "토 왕복하는 슬라이드가 어려운 코드 커팅",
            bpm: 95,
            start: 69.5
          }
        ]
      },
      {
        id: "39",
        title: "39주차 블루스의 정석 백킹 패턴",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 정석 중의 정석, 6도를 더한 백킹",
            bpm: 120,
            start: 0
          },
          {
            title: "월 4번 손가락 스트레치가 힘든 정석 패턴",
            bpm: 120,
            start: 11.5
          },
          {
            title: "화 m3rd->△3rd라는 양념이 들어간 패턴",
            bpm: 120,
            start: 22
          },
          {
            title: "수 손가락이 닿지 않는 사람들을 위한 패턴",
            bpm: 130,
            start: 32.5
          },
          {
            title: "목 셔플 리듬으로 정석 패턴을 연주",
            bpm: 110,
            start: 42.5
          },
          {
            title: "금 엄지로 6번 줄을 누르는 다채로운 커팅 패턴",
            bpm: 110,
            start: 54
          },
          {
            title: "토 코드음을 움직여서 연주하는 백킹 패턴",
            bpm: 140,
            start: 66
          }
        ]
      },
      {
        id: "40",
        title: "40주차 쉼표를 살린 커팅",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 1, 2박자를 비운 코드 커팅",
            bpm: 100,
            start: 0
          },
          {
            title: "월 16분음을 섞은 8비트 커팅",
            bpm: 110,
            start: 13
          },
          {
            title: "화 혼 섹션 느낌의 블루지한 백킹",
            bpm: 110,
            start: 24
          },
          {
            title: "수 궁극의 심플 커팅",
            bpm: 195,
            start: 35.5
          },
          {
            title: "목 틈을 노린 펑키한 백킹",
            bpm: 95,
            start: 49
          },
          {
            title: "금 핑거피킹에 의한 타이트한 백킹",
            bpm: 110,
            start: 61.5
          },
          {
            title: "토 앙상블과 어울리는 백킹",
            bpm: 100,
            start: 73
          }
        ]
      },
      {
        id: "41",
        title: "41주차 하모닉스 테크닉",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 기타 리프의 사이에 내추럴 하모닉스를 넣자",
            bpm: 130,
            start: 0
          },
          {
            title: "월 터치 하모닉스를 사용한 코드 백킹",
            bpm: 75,
            start: 11
          },
          {
            title: "화 터치 하모닉스를 사용한 솔로 프레이즈",
            bpm: 120,
            start: 27
          },
          {
            title: "수 터치 하모닉스 할 위치를 바꾸는 코드 플레이",
            bpm: 75,
            start: 38
          },
          {
            title: "목 오른손으로 줄을 때리는 태핑 하모닉스",
            bpm: 100,
            start: 55
          },
          {
            title:
              "금 아이언 메이든 스타일의 6번 줄 하모닉스와 3번 줄 트릴&하모닉스",
            bpm: 130,
            start: 67.5
          },
          {
            title: "토 와일드한 피킹 하모닉스와 터치 하모닉스",
            bpm: 120,
            start: 77.5
          }
        ]
      },
      {
        id: "42",
        title: "42주차 피킹의 정밀도를 높이자",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 같은 프레이즈를 상반된 피킹 패턴으로 비교연주",
            bpm: 110,
            start: 0
          },
          {
            title: "월 Bb메이저 스케일을 상반된 얼터네이트로 연주",
            bpm: 110,
            start: 12
          },
          {
            title: "화 다운과 업이 매번 바뀌는 5음 세트 프레이즈",
            bpm: 100,
            start: 23.5
          },
          {
            title: "수 파워 코드를 다운으로 피킹하는 것을 우선시 한 기타 리프",
            bpm: 110,
            start: 36
          },
          {
            title: "목 셋잇단음->16분음표로 바뀌는 피킹이 헷갈리는 프레이즈",
            bpm: 110,
            start: 48
          },
          {
            title: "금 3음 세트의 고음 줄 속주 프레이즈",
            bpm: 110,
            start: 60
          },
          {
            title: "토 얼터네이트로 끝내는 속주 코드 아르페지오",
            bpm: 120,
            start: 71.5
          }
        ]
      },
      {
        id: "43",
        title: "43주차 스위프 피킹 입문",
        hasBackingTrack: false,
        lessons: [
          {
            title: "매일 코드 음을 셋잇단음으로 연주하는 스위프의 기초 연습",
            bpm: 130,
            start: 0
          },
          {
            title: "월 풀링과 조합한 스위프",
            bpm: 110,
            start: 10.5
          },
          {
            title: "화 5음 세트에 의한 상승형 스위프",
            bpm: 100,
            start: 22
          },
          {
            title: "수 반박자 셋잇단음에 의한 고속 스위프",
            bpm: 110,
            start: 35
          },
          {
            title: "목 각 코드 음을 연주하는 5~1번 줄에 걸친 스위프",
            bpm: 120,
            start: 46.5
          },
          {
            title: "금 메이저 세븐스 코드 음에 9th를 더한 멋진 스위프",
            bpm: 120,
            start: 57
          },
          {
            title: "토 슬라이드도 섞은 다이내믹스한 스위프",
            bpm: 130,
            start: 68
          }
        ]
      }
    ]
  }
];
