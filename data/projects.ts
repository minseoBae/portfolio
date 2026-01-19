// src/data/projects.ts

export type TroubleImage = {
    src: string
    caption: string
    width?: string
    showArrow?: boolean
  }
  
  export type Troubleshooting = {
    title: string
    problem: string
    details?: string[]
    solutions?: string[]
    results?: string[]
    images?: TroubleImage[]
  }
  
  export type Highlight = {
    title: string
    problem: string
    solution: string
    result: string
  }
  
  export type Project = {
    id: string
    title: string
    oneLiner: string
    description: string
    image?: string
    architectureImage?: string
    date: string
    team: string
    role: string
    technologies: string[]
    github: string
    deploy?: string
  
    overview: string
    idea: string
    features: string[]
    challenges: string[]
  
    highlights: Highlight[] // 사이트에서 바로 보여줄 Top 1~2
    troubleshooting?: Troubleshooting[] // (접기/더보기로만 노출)
    learnings: string[]
  }
  
  export const projects: Project[] = [
    // =========================
    // 1) 상추
    // =========================
    {
      id: "sangchu",
      title: "트렌드 기반 상호명 추천 웹사이트(상추)",
      oneLiner: "450만 건 상권 데이터를 분석해 업종 맞춤 트렌디 상호명을 추천하는 서비스",
      description: "사용자의 업종에 맞는 트렌디한 가게 이름을 제안해주는 웹사이트",
      image: "/projectImage/project1.png",
      architectureImage: "/architectureImage/architecture1.png",
      technologies: [
        "Spring",
        "MySQL",
        "Elasticsearch",
        "Kibana",
        "Docker & Docker Compose",
        "Nginx",
        "React",
        "JavaScript",
        "Java",
        "Python",
      ],
      github: "https://github.com/BESP-LLL3",
      date: "2025.04.10~2025.05.08",
      team: "4명(Backend 4명)",
      role: "백엔드 전반 + 대용량 데이터 처리/검색 최적화(Elasticsearch·Batch·임베딩 파이프라인)",
  
      overview:
        "현재 상권 데이터를 기반으로 업종별 상호명 트렌드를 분석하고, 이를 바탕으로 트렌디한 상호명을 추천합니다. 또한 사용자가 정한 이름과 동일한 상호명이 있는지 체크할 수 있습니다.",
      idea:
        "창업을 준비하는 사람들이 상호명을 정하는 데 어려움을 겪는 것을 보고, 데이터 기반 상호명 추천 서비스를 만들면 도움이 될 것 같아서 시작했습니다. 업종별 트렌드 분석을 통해 더 나은 상호명을 제안할 수 있을 것이라 생각했습니다.",
  
      features: [
        "상권 데이터 분석 - 현재 상권 상호명의 트렌드를 정확히 파악",
        "상호명 추천 - 인기 키워드를 활용해 창의적인 상호명을 제안",
        "중복 및 특허 확인 - 상호명 중복과 특허 문제를 사전에 검토하여 안정성을 확보",
        "Docker를 통한 컨테이너화 - 개발 환경과 운영 환경의 일관성 유지",
      ],
      challenges: [
        "대용량 데이터 처리 및 검색 성능 최적화 - 데이터 크기와 복잡성 증가에 따른 성능 저하 해결",
        "분기별 트렌드 분석 알고리즘 구현 - 분기별 공공 데이터 처리 및 분석 알고리즘 개발",
        "Docker 환경에서의 서비스 안정성 확보 - 개발 환경과 운영 환경의 일관성 유지",
      ],
  
      highlights: [
        {
          title: "트렌드 키워드 정제 및 상호명 추천 정확도 개선",
          problem:
            "형태소 분석 결과 단일 글자 형태소(예: '삼','겹')가 노이즈로 포함되어 사용 불가한 키워드가 추천에 섞이고, 임베딩 문구 기준이 부족해 유사도 비교 정확도가 떨어짐",
          solution:
            "불필요 형태소/프랜차이즈 제외/2글자 이상 필터 적용 + 상호명·업종 분류를 자연어로 설명하고 중요도를 다르게 주는 임베딩 문장 설계(강조 구문 포함)",
          result:
            "사용자 입력 키워드에 대해 더 현실적·매력적인 상호명 추천이 가능해지고 키워드 추출 정확도가 개선됨",
        },
        {
          title: "대용량 데이터 배치 처리 최적화",
          problem:
            "정부 공개 API 기반 450만 건 데이터를 주기적으로 수집·임베딩 처리할 때 처리 시간/자원 사용량이 증가하고, 비동기 적용 시 동일 데이터가 반복 처리되는 문제가 발생",
          solution:
            "Spring Batch로 전환 후 Partitioner로 구간 분할·분산 처리, TaskExecutor 병렬 실행으로 반복 처리 없이 균등 처리 구조로 개선",
          result:
            "배치 처리 성능 개선(32.69s→10.45s, 약 69%) 및 병렬 처리 개선(71s→52.7s, 약 26%), 최종적으로 임베딩 작업을 크게 단축",
        },
      ],
  
      troubleshooting: [
        {
          title: "시스템 리소스 부족으로 인한 병목 현상",
          problem:
            "대용량 데이터 처리 시, 시스템 리소스(CPU, 메모리, 네트워크, 디스크 등) 부족으로 인한 병목 발생",
          details: [
            "데이터 크기와 복잡성 증가에 따른 성능 저하",
            "동시 요청 처리 시 시스템 응답 지연",
            "메모리 부족으로 인한 OutOfMemoryError 발생",
          ],
          solutions: [
            "인스턴스의 수직적 확장을 통한 병목 현상 해결",
            "OCPU count : 1 ->  2",
            "Network bandwidth : 0.48 -> 2 Gbps",
            "Memory : 1 -> 12 GB",
            "Volume :",
            "1. APP Server : 50 GB",
            "2. DB Server : 50 GB -> 150 GB",
          ],
          results: ["시스템 응답 속도 3배 향상", "동시 접속자 처리 능력 대폭 개선", "안정적인 서비스 운영 가능"],
          images: [
            { src: "/troubleshootingImage/troubleshooting1-1.png", caption: "초기 인스턴스 사양", width: "w-full", showArrow: true },
            { src: "/troubleshootingImage/troubleshooting1-2.png", caption: "확장 후 인스턴스 사양", width: "w-3/4" },
          ],
        },
        {
          title: "트렌드 키워드 정제 및 상호명 추천 정확도 개선",
          problem:
            "Elasticsearch에서 '삼겹살' 입력 시 '겹','삼' 등 한 글자 형태소가 등장해 사용 불가 단어가 추천되는 문제 + 상호명/업종 조합 임베딩 기준 부족으로 군집 구분이 어려워 유사도 정확도 저하",
          details: [
            "형태소 분석 시 불필요한 조사나 어미가 포함되어 노이즈 발생",
            "프렌차이즈 상호명의 반복으로 인한 키워드 편향",
            "단일 글자 형태소로 인한 의미 없는 키워드 추출",
            "임베딩 기준 부족으로 인한 키워드 추출 어려움",
          ],
          solutions: [
            "불필요한 형태소 필터링 로직 구현",
            "프렌차이즈 상호명 제외 필터 적용",
            "최소 2글자 이상 키워드만 추출하도록 제한",
            "자연어 형식으로 상호명, 업종중분류, 업종소분류를 조합하여 임베딩 벡터 값을 추출. 강조 구문을 통해 임베딩 벡터 값이 상호명을 기준으로 군집을 이룰 수 있도록 처리함",
          ],
          results: [
            "테스트 결과, 사용자 입력 키워드에 대해 더 현실적이고 매력적인 상호명 추천 가능",
            "추천된 상호명 품질에 대한 사용자 만족도 향상",
            "키워드 추출 정확도 대폭 개선",
          ],
          images: [
            { src: "/troubleshootingImage/troubleshooting2-1.png", caption: "Elasticsearch nori 분석기 형태소 품사 태그", width: "w-4/5" },
            { src: "/troubleshootingImage/troubleshooting2-2.png", caption: "필요 없는 품사 태그 제거", width: "w-4/5" },
            { src: "/troubleshootingImage/troubleshooting2-3.png", caption: "프렌차이즈 상호명 제외 필터 적용", width: "w-4/5" },
            { src: "/troubleshootingImage/troubleshooting2-4.png", caption: "한 글자 키워드 필터링", width: "w-4/5" },
            { src: "/troubleshootingImage/troubleshooting2-5.png", caption: "단순 단어 나열 형태의 임베딩 문구 작성", width: "w-4/5", showArrow: true },
            {
              src: "/troubleshootingImage/troubleshooting2-6.png",
              caption:
                "업종의 대분류, 중분류, 소분류를 각각 구분하고, 각 분류가 의미하는 바를 AI가 이해할 수 있도록 자연어로 설명하고,\n중요도를 다르게 하여 임베딩 값을 추출",
              width: "w-4/5",
            },
          ],
        },
        {
          title: "유사도 알고리즘 테스트 및 성능 최적화",
          problem:
            "기본 search API 10,000건 제한으로 전체 450만 건 데이터 기반 추천에 부적합. search_after 사용 시 9개 분기 데이터를 순차로 불러오며 JVM OOM 발생. KNN과 Cosine Similarity 비교 테스트 필요",
          details: [
            "Elasticsearch 기본 search API의 10,000건 제한",
            "search_after 방식 사용 시 JVM OOM 발생",
            "450만 건 데이터 처리 시 성능 저하",
            "KNN과 Cosine Similarity 알고리즘 비교 필요",
          ],
          solutions: [
            "검색 조건으로 필터링된 데이터만 반환받고, 결과에 대해 KNN과 Cosine Similarity를 각각 적용하여 메모리 사용량과 정확도를 고려한 방식 테스트",
            "Cosine Similarity는 정확도가 높았지만 처리 시간이 약 8분 소요",
            "KNN은 모집군 내에서 빠른 속도(약 3분)를 보였으나 전체 트렌드 반영이 약해 추천 신뢰도 낮음",
            "최종적으로 Cosine Similarity 채택: 처리 시간은 오래 걸리나 추천 품질/신뢰도 우수",
          ],
          results: ["Cosine 방식 적용으로 추천 신뢰도 향상", "전체 트렌드를 반영한 정확한 추천 결과 제공", "사용자 만족도 향상"],
          images: [
            { src: "/troubleshootingImage/troubleshooting3-1.png", caption: "Cosine Similarity 결과(부동산), 소요 시간 약 8분", width: "w-4/5" },
            { src: "/troubleshootingImage/troubleshooting3-2.png", caption: "KNN 결과(부동산), k=40, numCandidates=100, 소요 시간 약 3분", width: "w-4/5" },
          ],
        },
        {
          title: "대용량 데이터 배치 처리 최적화",
          problem:
            "정부 공개 API에서 수집한 약 450만 건 데이터를 주기적으로 수집·임베딩 처리 시 처리 시간과 자원 사용량 증가. 비동기 적용 시 동일 데이터 반복 처리 발생",
          details: [
            "450만 건 상호명 데이터 처리 시 성능 저하",
            "임베딩 처리 과정에서 시간 지연 발생",
            "비동기 방식 적용 시 동일 데이터 반복 처리",
            "배치 처리 최적화 필요",
          ],
          solutions: [
            "Spring Batch 기반 일괄 처리 구조로 전환하고, Partitioner를 활용해 작업을 분산 처리하여 병렬 실행 가능하도록 개선",
            "TaskExecutor 적용 후, Partitioner로 구간을 나눠 반복 처리 없이 균등 처리",
            "배치 처리 최적화: 32.69초 → 10.45초 (약 69% 개선)",
            "비동기 병렬 처리: 71초 → 52.7초 (약 26% 개선)",
            "최종적으로 450만 건 임베딩 작업을 크게 단축",
          ],
          results: [
            "배치 처리 최적화 성능 개선: 32.69초 → 10.45초 (약 69% 성능 개선)",
            "비동기 병렬 처리 적용 성능 개선: 71초 → 52.7초 (약 26% 성능 개선)",
            "최종적으로 450만 건 임베딩 작업을 크게 단축",
          ],
          images: [{ src: "/troubleshootingImage/troubleshooting4-1.png", caption: "Spring Batch 처리 구조", width: "w-full" }],
        },
      ],
  
      learnings: ["Elasticsearch와 Kibana의 실무 활용", "대용량 데이터 처리 및 검색 최적화", "Docker 기반 배포 및 운영"],
    },
  
    // =========================
    // 2) CineFinder
    // =========================
    {
      id: "cinefinder",
      title: "맞춤형 영화관 찾기 서비스(CineFinder)",
      oneLiner: "Kafka/RabbitMQ + WebSocket으로 상영 정보를 통합·동기화한 실시간 영화 정보 서비스",
      description: "전국의 상영 정보를 한 눈에 비교하고 검색할 수 있는 통합 영화 정보 서비스",
      image: "/projectImage/project2.png",
      architectureImage: "/architectureImage/architecture2.png",
      deploy: "https://cinefinder.kro.kr/",
      technologies: [
        "Spring Boot(+JPA, Security)",
        "MySQL",
        "Elasticsearch",
        "Redis",
        "Kafka",
        "RabbitMQ",
        "WebSocket",
        "JWT",
        "OAuth 2.0",
        "RESTful API",
        "Git",
        "Docker",
        "Nginx",
        "React",
        "JavaScript",
      ],
      github: "https://github.com/BESP-CineFinder",
      date: "2025.05.09~2025.06.04",
      team: "4명(Backend 4명)",
      role: "실시간 로그/메시징 처리 및 수평 확장 환경 안정성(캐시·분산락) 중심으로 개선",
  
      overview:
        "전국 영화관 상영 정보를 통합하여 사용자가 영화/지역/시간 기준으로 편리하게 비교·검색할 수 있는 서비스입니다. 실시간 데이터 동기화와 메시징 큐를 활용해 안정적인 시스템을 구축했습니다.",
      idea:
        "영화를 보려면 영화관 사이트를 번갈아 확인해야 하는 불편함이 있어, 모든 영화관 상영 정보를 한 곳에서 확인할 수 있는 통합 서비스가 필요하다고 생각해 시작했습니다.",
  
      features: [
        "전국 영화관 상영 정보 통합 검색",
        "영화·지역·영화관·시간 기반 실시간 좌석 정보 제공",
        "WebSocket을 통한 실시간 통신",
        "Kafka와 RabbitMQ를 활용한 메시징 시스템",
        "OAuth 2.0 기반 소셜 로그인",
      ],
      challenges: ["다양한 영화관 API 데이터 통합", "실시간 데이터 동기화 및 일관성 유지", "대용량 트래픽 처리 및 성능 최적화"],
  
      highlights: [
        {
          title: "Bulk 저장 도입 후 ‘데이터 공백’ 문제를 Redis 캐시로 해결",
          problem: "Kafka → Elasticsearch를 개별 저장하면 과부하가 발생해 Bulk 저장(5초)을 도입했지만, 조회 시 최신 로그가 안 보이는 공백이 생김",
          solution:
            "Elasticsearch에는 Bulk 저장을 유지하고, 저장 전 최신 로그는 Redis에 즉시 캐싱 → 조회 시 ES+Redis 데이터를 합쳐 공백 없는 결과 제공",
          result: "저장 안정성과 실시간 조회 경험을 동시에 확보(영속성: ES / 실시간성: Redis)",
        },
        {
          title: "수평 확장 환경에서 초기화 로직 중복 실행을 분산 락으로 방지",
          problem: "동일 Spring 인스턴스 2개에서 기동 시 인덱스 생성/수집 로직이 동시에 실행되어 충돌 및 일부 인스턴스 비정상 종료",
          solution: "Redis 기반 분산 Lock + TTL + Idempotent 인덱스 존재 체크로 단일 실행 보장",
          result: "스케일 아웃/재시작 상황에서도 초기화 안정성 확보 및 배포 신뢰도 향상",
        },
      ],
  
      troubleshooting: [
        {
          title: "실시간 채팅 로그 저장 시 발생하는 데이터 공백 문제 해결",
          problem:
            "실시간으로 Kafka에서 Elasticsearch로 로그를 개별 저장 시 과부하가 발생하여, 5초 간격으로 Bulk 저장을 도입했으나 이로 인해 실시간 데이터 조회에 공백이 생기는 문제가 발생했습니다.",
          details: [
            "매 채팅마다 Elasticsearch의 save API를 호출하자 시스템에 과부하가 걸려 로그 저장이 누락되는 현상 발생",
            "이를 해결하기 위해 5초간 로그를 모아 Bulk API로 일괄 저장하는 방식으로 변경",
            "그러나 이 5초의 데이터 수집 시간 동안 사용자가 채팅 내역을 조회할 경우, 아직 저장되지 않은 최신 로그가 보이지 않는 '데이터 공백' 문제 발생",
          ],
          solutions: [
            "5초 간격의 Bulk 저장은 유지하여 Elasticsearch의 부하를 최소화",
            "새로운 채팅 로그가 발생하면, Elasticsearch에 저장되기 전 Redis에 즉시 임시 저장(캐싱)",
            "사용자가 채팅 내역을 요청할 때, Elasticsearch의 데이터와 Redis에 캐시된 최신 데이터를 조합하여 5초의 공백 없는 실시간 로그를 제공",
          ],
          results: [
            "Elasticsearch의 과부하 문제를 해결하여 안정적인 로그 저장 시스템 구축",
            "Redis 캐시를 통해 데이터 공백을 완벽히 메꿔 실시간 채팅 로그 조회 기능 구현",
            "데이터의 영속성(Elasticsearch)과 실시간성(Redis)을 모두 확보하여 사용자 경험 개선",
          ],
          images: [
            { src: "/troubleshootingImage/troubleshooting5-1.png", caption: "Redis 캐시를 도입한 실시간 로그 처리 아키텍처", width: "w-3/5" },
            { src: "/troubleshootingImage/troubleshooting5-2.png", caption: "사용자 요청 시 데이터 조합 흐름도", width: "w-4/5" },
          ],
        },
        {
          title: "서버 수평 확장 시 동시 실행 문제 해결",
          problem:
            "Docker로 동일한 Spring 서버 인스턴스를 2개 운영하는 수평 확장 환경에서, 서버 기동 시 수행되는 영화 데이터 수집 로직이 두 인스턴스에서 동시에 실행되며 동일한 Elasticsearch 인덱스 생성 요청이 중복되어 충돌이 발생했습니다.",
          details: [
            "부하 분산을 위해 동일한 Spring 인스턴스 2개를 수평 확장",
            "애플리케이션 시작 시 실행되는 인덱스 생성/데이터 수집 로직이 두 인스턴스 모두에서 동시 수행",
            "Elasticsearch에 동일한 인덱스 이름으로 동시 생성 요청 → 충돌 및 일부 인스턴스의 수집 로직 실패, 비정상 종료",
          ],
          solutions: [
            "Redis 기반 분산 Lock 적용으로 단일 인스턴스만 인덱스 생성 및 초기 수집 로직 수행",
            "Lock 보유 인스턴스만 실행하고, 나머지 인스턴스는 Lock 해제 전까지 해당 초기화 로직을 건너뛰도록 가드 로직 추가",
            "인덱스 존재 시 안전하게 건너뛰도록 Idempotent한 인덱스 생성 체크(존재 여부 확인 후 생성) 적용",
            "컨테이너 재시작/비정상 종료 대비를 위해 Lock에 TTL 설정 및 만료/해제 핸들링 구현",
          ],
          results: ["중복 인덱스 생성 충돌 제거로 서버 기동 안정성 확보", "수평 확장 환경에서도 초기화 로직의 단일 실행 보장", "배포/스케일 아웃 시 장애 없이 일관된 데이터 수집 파이프라인 유지"],
          images: [{ src: "/troubleshootingImage/troubleshooting6-1.png", caption: "Redis 기반 분산 Lock 처리 흐름도", width: "w-4/5" }],
        },
      ],
  
      learnings: ["메시징 큐 시스템 설계 및 구현", "실시간 데이터 처리 및 동기화", "마이크로서비스 아키텍처 설계", "수평 확장 환경에서의 분산 락 설계와 Idempotency 확보"],
    },
  
    // =========================
    // 3) KMBBJ
    // =========================
    {
      id: "kmbbj",
      title: "가상 화폐 거래 체험(KMBBJ)",
      oneLiner: "실시간 시세 수집과 대량 거래 저장을 최적화한 가상 자산 거래 시뮬레이터",
      description:
        "실제 돈이 아닌 가상의 자산을 사용하여 코인을 사고팔고, 시장의 변동성을 체험할 수 있는 가상 거래 서비스",
      image: "/projectImage/project3.png",
      architectureImage: "/architectureImage/architecture3.png",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Cassandra", "JPA", "Docker", "Jenkins", "AWS", "GCP"],
      github: "https://github.com/KMBBJ/KMBBJ_BACKEND",
      date: "2024.08.01~2024.12.12",
      team: "5명(Backend 5명)",
      role: "실시간 시세 수집/저장 파이프라인 성능·안정성 개선(WebClient·Bulk Insert·재시도)",
  
      overview:
        "실제 돈이 아닌 가상의 자산으로 코인을 사고팔며 시장 변동성을 체험하는 서비스입니다. 실제 거래의 복잡성과 위험을 이해하고 전략을 개발하며 친구들과 경쟁할 수 있습니다.",
      idea:
        "암호화폐 투자에 관심이 있지만 실제 돈으로 거래하기 부담스러운 사람들을 위해 가상 거래 환경을 제공하고자 했습니다. 실제 시장 데이터를 기반으로 안전하게 거래 경험을 쌓을 수 있도록 설계했습니다.",
  
      features: [
        "실시간 가상 화폐 시세 제공",
        "가상 자산 거래 및 포트폴리오 관리",
        "실시간 거래 내역 및 차트 제공",
        "친구들과의 랭킹 시스템",
        "다양한 거래 전략 시뮬레이션",
      ],
      challenges: ["실시간 시세 데이터 처리 및 정확성 확보", "대용량 거래 데이터 처리 및 저장", "동시 접속자 처리 및 시스템 안정성"],
  
      highlights: [
        {
          title: "WebClient + Bulk Insert로 실시간 수집/저장 병목 제거",
          problem: "시세 요청마다 개별 저장 시 느리고, 동시 요청 증가 시 서버 과부하 및 대량 INSERT 반복으로 성능 저하",
          solution: "WebClient 비동기 호출로 수집 속도 개선 + 거래 데이터는 Bulk Insert로 일괄 저장하여 DB 부하 최소화",
          result: "실시간 시세 수집 속도 향상 및 대량 데이터 저장 안정성 확보",
        },
        {
          title: "외부 API 호출 안정성 강화(Timeout/Retry) 및 유실 방지",
          problem: "WebClient 호출 타임아웃/실패 시 재시도 로직 미비로 일부 데이터 누락 가능",
          solution: "Timeout 및 retry 전략 적용 + Bulk Insert 실패 시 재시도 로직으로 데이터 유실 방지",
          result: "외부 API 장애 상황에서도 시스템이 안정적으로 동작",
        },
      ],
  
      troubleshooting: [
        {
          title: "WebClient + Bulk Insert를 활용한 데이터 처리 최적화",
          problem: "실시간 가상 화폐 시세 API 호출 및 거래 데이터 저장 시 처리 속도와 안정성 문제가 발생했습니다.",
          details: [
            "매 시세 요청마다 DB에 개별 저장 시 처리 속도가 느리고 동시 요청 증가 시 서버 과부하 발생",
            "대량 거래 데이터 저장 시 INSERT 쿼리 반복 호출로 성능 저하",
            "WebClient 호출 과정에서 타임아웃 및 실패 시 재시도 로직 미비로 일부 데이터 누락 가능",
          ],
          solutions: [
            "Spring WebClient를 활용한 비동기 API 호출로 시세 데이터 수집 속도 개선",
            "거래 데이터는 Bulk Insert 방식으로 일괄 저장하여 DB 부하 최소화",
            "WebClient 재시도(retry) 및 Timeout 설정으로 외부 API 호출 안정성 확보",
            "Bulk Insert 실패 시 재시도 로직 구현으로 데이터 유실 방지",
          ],
          results: [
            "실시간 시세 데이터 수집 속도 대폭 향상",
            "대량 거래 데이터 저장 시 DB 부하 최소화 및 처리 안정성 확보",
            "외부 API 장애 상황에도 시스템이 안정적으로 동작",
            "전체 시스템 응답 속도 개선 및 사용자 경험 향상",
          ],
          images: [
            { src: "/troubleshootingImage/troubleshooting7-1.png", caption: "WebClient와 Bulk Insert를 활용한 실시간 데이터 처리 흐름도", width: "w-full" },
          ],
        },
      ],
  
      learnings: ["실시간 데이터 처리 시스템 설계", "대용량 데이터베이스 최적화", "GCP 클라우드 환경에서의 서비스 운영"],
    },
  ]
  