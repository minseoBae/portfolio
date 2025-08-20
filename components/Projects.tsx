"use client"

import { ExternalLink, Github, Calendar, Users, X, ArrowRight, Volume } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: '트렌드 기반 상호명 추천 웹사이트(상추)',
      description: '사용자의 업종에 맞는 트렌디한 가게 이름을 제안해주는 웹사이트',
      image: '/api/placeholder/400/250',
      technologies: ['Spring', 'MySQL', 'Elasticsearch', 'Kibana', 'Docker & Docker Compose', 'Nginx', 'React', 'JavaScript', 'Java', 'Python'],
      github: 'https://github.com/BESP-LLL3',
      date: '2025.04.10~2025.05.08',
      team: '4명(Backend 4명)',
      details: {
        overview: '현재 상권의 데이터를 사용해 자신의 업종의 상가들이 사용하는 상호명들의 트렌드를 확인할 수 있고, 그에 기반한 트렌드한 상호명을 추천 받을 수 있습니다. 또한 본인이 정한 이름과 동일한 상호명이 있는지 체크할 수 있습니다.',
        idea: '창업을 준비하는 사람들이 상호명을 정하는 데 어려움을 겪는 것을 보고, 데이터 기반의 상호명 추천 서비스를 만들면 도움이 될 것 같아서 시작했습니다. 업종별 트렌드 분석을 통해 더 나은 상호명을 제안할 수 있을 것이라 생각했습니다.',
        architectureImage: '/architectureImage/architecture1.png',
        features: [
          '상권 데이터 분석 - 현재 상권 상호명의 트렌드를 정확히 파악',
          '상호명 추천 - 인기 키워드를 활용해 창의적인 상호명을 제안',
          '중복 및 특허 확인 - 상호명 중복과 특허 문제를 사전에 검토하여 안정성을 확보',
          'Docker를 통한 컨테이너화 - 개발 환경과 운영 환경의 일관성 유지',
        ],
        challenges: [
          '대용량 데이터 처리 및 검색 성능 최적화 - 데이터 크기와 복잡성 증가에 따른 성능 저하 해결',
          '분기별 트렌드 분석 알고리즘 구현 - 분기별 공공 데이터 처리 및 분석 알고리즘 개발',
          'Docker 환경에서의 서비스 안정성 확보 - 개발 환경과 운영 환경의 일관성 유지'
        ],
        troubleshooting: [
          {
            title: '시스템 리소스 부족으로 인한 병목 현상',
            problem: '대용량 데이터 처리 시, 시스템 리소스(CPU, 메모리, 네트워크, 디스크 등) 부족으로 인한 병목 발생',
            details: [
              '데이터 크기와 복잡성 증가에 따른 성능 저하',
              '동시 요청 처리 시 시스템 응답 지연',
              '메모리 부족으로 인한 OutOfMemoryError 발생'
            ],
            solutions: [
              '인스턴스의 수직적 확장을 통한 병목 현상 해결',
              'OCPU count : 1 ->  2',
              'Network bandwidth : 0.48 -> 2 Gbps',
              'Memory : 1 -> 12 GB',
              'Volume :',
              '1. APP Server : 50 GB',
              '2. DB Server : 50 GB -> 150 GB'
            ],
            results: [
              '시스템 응답 속도 3배 향상',
              '동시 접속자 처리 능력 대폭 개선',
              '안정적인 서비스 운영 가능'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting1-1.png',
                caption: '초기 인스턴스 사양',
                width: 'w-full',
                showArrow: true
              },
              {
                src: '/troubleshootingImage/troubleshooting1-2.png',
                caption: '확장 후 인스턴스 사양',
                width: 'w-3/4'
              }
            ]
          },
          {
            title: '트렌드 키워드 정제 및 상호명 추천 정확도 개선',
            problem: 'Elasticsearch에서 \'삼겹살\'과 같은 키워드 입력 시, \'겹\', \'삼\' 등 한 글자 형태소가 자주 등장하며 실제로 사용할 수 없는 단어들이 상호명으로 추천되는 문제가 발생. 또한, 임베딩 시 상호명 + 업종 중분류 + 업종 소분류만 조합하여 생성된 벡터는 상호 간 의미가 유사한 데이터 간 군집 구분이 어려워, 유사도 비교의 정확도가 떨어지는 문제가 있었음.',
            details: [
              '형태소 분석 시 불필요한 조사나 어미가 포함되어 노이즈 발생',
              '프렌차이즈 상호명의 반복으로 인한 키워드 편향',
              '단일 글자 형태소로 인한 의미 없는 키워드 추출',
              '임베딩 기준 부족으로 인한 키워드 추출 어려움'
            ],
            solutions: [
              '불필요한 형태소 필터링 로직 구현',
              '프렌차이즈 상호명 제외 필터 적용',
              '최소 2글자 이상 키워드만 추출하도록 제한',
              '자연어 형식으로 상호명, 업종중분류, 업종소분류를 조합하여 임베딩 벡터 값을 추출. 강조 구문을 통해 임베딩 벡터 값이 상호명을 기준으로 군집을 이룰 수 있도록 처리함'
            ],
            results: [
              '테스트 결과, 사용자 입력 키워드에 대해 더 현실적이고 매력적인 상호명 추천 가능',
              '추천된 상호명 품질에 대한 사용자 만족도 향상',
              '키워드 추출 정확도 대폭 개선'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting2-1.png',
                caption: 'Elasticsearch nori 분석기 형태소 품사 태그',
                width: 'w-4/5'
              },
              {
                src: '/troubleshootingImage/troubleshooting2-2.png',
                caption: '필요 없는 품사 태그 제거',
                width: 'w-4/5'
              },
              {
                src: '/troubleshootingImage/troubleshooting2-3.png',
                caption: '프렌차이즈 상호명 제외 필터 적용',
                width: 'w-4/5'
              },
              {
                src: '/troubleshootingImage/troubleshooting2-4.png',
                caption: '한 글자 키워드 필터링',
                width: 'w-4/5'
              },
              {
                src: '/troubleshootingImage/troubleshooting2-5.png',
                caption: '단순 단어 나열 형태의 임베딩 문구 작성',
                width: 'w-4/5',
                showArrow: true
              },
              {
                src: '/troubleshootingImage/troubleshooting2-6.png',
                caption: '업종의 대분류, 중분류, 소분류를 각각 구분하고, 각 분류가 의미하는 바를 AI가 이해할 수 있도록 자연어로 설명하고,\n중요도를 다르게 하여 임베딩 값을 추출',
                width: 'w-4/5'
              }
            ]
          },
          {
            title: '유사도 알고리즘 테스트 및 성능 최적화',
            problem: 'Elasticsearch의 기본 search API는 최대 10,000건 제한으로 인해 전체 450만 건 데이터 기반 상호명 추천 서비스에 적합하지 않음. search_after 방식 사용 시에도 9개 분기 약 450만 건 데이터를 순차로 불러오며 JVM의 OOM(Out Of Memory) 발생. 필터링 기준을 설정할 필요가 있었고, 이에 따라 KNN(K Nearest Neighbors)과 Cosine Similarity를 비교 테스트하여 유사도 기반 필터링 성능과 정확도를 평가.',
            details: [
              'Elasticsearch 기본 search API의 10,000건 제한',
              'search_after 방식 사용 시 JVM OOM 발생',
              '450만 건 데이터 처리 시 성능 저하',
              'KNN과 Cosine Similarity 알고리즘 비교 필요'
            ],
            solutions: [
              'Elasticsearch에서 검색 조건 필터링된 데이터만 반환받고, 해당 결과에 대해 KNN과 Cosine Similarity를 각각 적용하여 메모리 사용량과 정확도 모두 고려한 방식 테스트',
              'Cosine Similarity는 전체 데이터와 직접 비교하는 방식으로 정확도가 높았지만, 처리 시간이 약 8분 소요',
              'KNN은 모집군 내에서 빠른 속도(약 3분)를 보였지만, 전체 트렌드를 반영하지 못해 추천의 신뢰도가 낮음',
              '최종적으로 Cosine Similarity 채택: 처리 시간은 오래 걸리나, 추천 결과의 품질이 높고 신뢰할 수 있었음'
            ],
            results: [
              '데이터 정확도와 품질이 중요한 서비스 특성상 Cosine 방식 적용을 통해 추천 신뢰도 대폭 향상',
              '전체 트렌드를 반영한 정확한 추천 결과 제공',
              '사용자 만족도 향상'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting3-1.png',
                caption: 'Cosine Similarity 키워드 추출 결과 : 검색 키워드 : 부동산, 소요 시간 약 8분',
                width: 'w-4/5'
              },
              {
                src: '/troubleshootingImage/troubleshooting3-2.png',
                caption: 'KNN 알고리즘 키워드 추출 결과 : 검색 키워드 : 부동산, k = 40, numCandidates= 100 소요 시간 약 3분',
                width: 'w-4/5'
              }
            ]
          },
          {
            title: '대용량 데이터 배치 처리 최적화',
            problem: '정부 공개 API에서 수집한 약 450만 건의 상호명 데이터를 주기적으로 수집·임베딩 처리 시, 처리 시간과 자원 사용량 증가. 임베딩 처리 과정에서 시간 지연 발생, 비동기 방식 적용 시 동일 데이터 반복 처리되는 현상 존재.',
            details: [
              '450만 건 상호명 데이터 처리 시 성능 저하',
              '임베딩 처리 과정에서 시간 지연 발생',
              '비동기 방식 적용 시 동일 데이터 반복 처리',
              '배치 처리 최적화 필요'
            ],
            solutions: [
              'Spring Batch 기반 일괄 처리 구조로 전환하고, Partitioner를 활용해 작업을 분산 처리하여 병렬 실행 가능하도록 개선',
              '비동기 처리(TaskExecutor) 적용 후, Partitioner로 구간을 나눠 반복 처리 없이 모든 데이터를 균등하게 처리',
              '배치 처리 최적화 성능 개선: 32.69초 → 10.45초 (약 69% 성능 개선)',
              '비동기 병렬 처리 적용 성능 개선: 71초 → 52.7초 (약 26% 성능 개선)',
              '최종적으로 450만 건 임베딩 작업을 약 5초 수준으로 최적화'
            ],
            results: [
              '배치 처리 최적화 성능 개선: 32.69초 → 10.45초 (약 69% 성능 개선)',
              '비동기 병렬 처리 적용 성능 개선: 71초 → 52.7초 (약 26% 성능 개선)',
              '최종적으로 450만 건 임베딩 작업을 약 5초 수준으로 최적화'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting4-1.png',
                caption: 'Spring Batch 처리 구조',
                width: 'w-full'
              }
            ]
          }
        ],
        learnings: [
          'Elasticsearch와 Kibana의 실무 활용',
          '대용량 데이터 처리 및 검색 최적화',
          'Docker 기반 배포 및 운영'
        ]
      }
    },
    {
      title: '맞춤형 영화관 찾기 서비스(CineFinder)',
      description: '전국의 상영 정보를 한 눈에 비교하고 검색할 수 있는 통합 영화 정보 서비스',
      image: '/api/placeholder/400/250',
      technologies: ['Spring Boot(+JPA, Security)', 'MySQL', 'Elasticsearch', 'Redis', 'Kafka', 'RabbitMQ', 
        'WebSocket', 'JWT', 'OAuth 2.0', 'RESTful API', 'Git', 'Docker', 'Nginx', 'React', 'JavaScript'],
      github: 'https://github.com/BESP-CineFinder',
      date: '2025.05.09~2025.06.04',
      team: '4명(Backend 4명)',
      details: {
        overview: '전국의 영화관 상영 정보를 통합하여 사용자가 편리하게 영화에 기반한 영화관 정보를 찾을 수 있는 서비스입니다. 실시간 데이터 동기화와 메시징 큐를 활용한 안정적인 시스템을 구축했습니다.',
        idea: '영화를 보려고 할 때 여러 영화관 사이트를 번갈아가며 확인해야 하는 불편함을 겪었습니다. 모든 영화관의 상영 정보를 한 곳에서 확인할 수 있다면 사용자들이 훨씬 편리할 것이라 생각해서 시작했습니다.',
        architectureImage: '/architectureImage/architecture2.png',
        features: [
          '전국 영화관 상영 정보 통합 검색',
          '영화나 지역, 영화관, 시간을 기반으로 실시간 좌석 정보 제공',
          'WebSocket을 통한 실시간 통신',
          'Kafka와 RabbitMQ를 활용한 메시징 시스템',
          'OAuth 2.0 기반 소셜 로그인'
        ],
        challenges: [
          '다양한 영화관 API 데이터 통합',
          '실시간 데이터 동기화 및 일관성 유지',
          '대용량 트래픽 처리 및 성능 최적화'
        ],
        troubleshooting: [
          {
            "title": "실시간 채팅 로그 저장 시 발생하는 데이터 공백 문제 해결",
            "problem": "실시간으로 Kafka에서 Elasticsearch로 로그를 개별 저장 시 과부하가 발생하여, 5초 간격으로 Bulk 저장을 도입했으나 이로 인해 실시간 데이터 조회에 공백이 생기는 문제가 발생했습니다.",
            "details": [
              "매 채팅마다 Elasticsearch의 save API를 호출하자 시스템에 과부하가 걸려 로그 저장이 누락되는 현상 발생",
              "이를 해결하기 위해 5초간 로그를 모아 Bulk API로 일괄 저장하는 방식으로 변경",
              "그러나 이 5초의 데이터 수집 시간 동안 사용자가 채팅 내역을 조회할 경우, 아직 저장되지 않은 최신 로그가 보이지 않는 '데이터 공백' 문제 발생"
            ],
            "solutions": [
              "5초 간격의 Bulk 저장은 유지하여 Elasticsearch의 부하를 최소화",
              "새로운 채팅 로그가 발생하면, Elasticsearch에 저장되기 전 Redis에 즉시 임시 저장(캐싱)",
              "사용자가 채팅 내역을 요청할 때, Elasticsearch의 데이터와 Redis에 캐시된 최신 데이터를 조합하여 5초의 공백 없는 실시간 로그를 제공"
            ],
            "results": [
              "Elasticsearch의 과부하 문제를 해결하여 안정적인 로그 저장 시스템 구축",
              "Redis 캐시를 통해 데이터 공백을 완벽히 메꿔 실시간 채팅 로그 조회 기능 구현",
              "데이터의 영속성(Elasticsearch)과 실시간성(Redis)을 모두 확보하여 사용자 경험 개선"
            ],
            "images": [
              {
                "src": "/troubleshootingImage/troubleshooting5-1.png",
                "caption": "Redis 캐시를 도입한 실시간 로그 처리 아키텍처",
                "width": "w-full"
              },
              {
                "src": "/troubleshootingImage/your-data-flow-chart.png",
                "caption": "사용자 요청 시 데이터 조합 흐름도",
                "width": "w-4/5"
              }
            ]
          },
          {
            title: 'Redis 캐시 성능 문제',
            problem: 'Redis Cluster 구성을 통해 캐시 성능을 향상시켰습니다.',
            details: [
              '단일 Redis 인스턴스로 인한 성능 병목',
              '대용량 데이터 처리 시 메모리 부족',
              '캐시 미스율 증가로 인한 응답 지연'
            ],
            solutions: [
              'Redis Cluster 구성을 통해 캐시 성능을 향상',
              '캐시 키 전략 최적화로 캐시 히트율 개선',
              'TTL 설정을 통한 메모리 사용량 최적화'
            ],
            results: [
              '캐시 성능 대폭 향상',
              '캐시 히트율 개선으로 응답 속도 향상',
              '메모리 사용량 최적화'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting5-1.png',
                caption: 'Redis Cluster 구성도',
                width: 'w-full'
              },
              {
                src: '/troubleshootingImage/troubleshooting5-2.png',
                caption: '캐시 성능 개선 그래프',
                width: 'w-3/4'
              }
            ]
          },
          {
            title: 'WebSocket 동시 접속 처리 문제',
            problem: 'WebSocket 연결 풀링으로 동시 접속자 처리 능력을 개선했습니다.',
            details: [
              '대량 동시 접속 시 서버 리소스 부족',
              'WebSocket 연결 관리의 복잡성',
              '연결 끊김 시 재연결 로직의 불안정성'
            ],
            solutions: [
              'WebSocket 연결 풀링으로 동시 접속자 처리 능력을 개선',
              '연결 상태 모니터링 및 자동 재연결 로직 구현',
              '부하 분산을 위한 로드 밸런싱 설정'
            ],
            results: [
              '동시 접속자 처리 능력 대폭 개선',
              '연결 안정성 향상',
              '실시간 통신 성능 최적화'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting6-1.png',
                caption: 'WebSocket 연결 풀 구성',
                width: 'w-full'
              },
              {
                src: '/troubleshootingImage/troubleshooting6-2.png',
                caption: '동시 접속자 처리 성능',
                width: 'w-4/5'
              }
            ]
          }
        ],
        learnings: [
          '메시징 큐 시스템 설계 및 구현',
          '실시간 데이터 처리 및 동기화',
          '마이크로서비스 아키텍처 설계'
        ]
      }
    },
    {
      title: '가상 화폐 거래 체험(KMBBJ)',
      description: '실제 돈이 아닌 가상의 자산을 사용하여 코인을 사고팔고, 시장의 변동성을 체험할 수 있습니다. 이를 통해 사용자는 실제 거래의 복잡성과 위험을 이해하고, 전략을 개발하며, 친구들과 경쟁할 수 있습니다.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REDIS', 'Cassandra', 'JPA', 'Docker', 'Jenkins', 'AWS', 'GCP'],
      github: 'https://github.com/KMBBJ/KMBBJ_BACKEND',
      date: '2024.08.01~2024.12.12',
      team: '5명(Backend 5명)',
      details: {
        overview: '실제 돈이 아닌 가상의 자산을 사용하여 코인을 사고팔고, 시장의 변동성을 체험할 수 있습니다. 이를 통해 사용자는 실제 거래의 복잡성과 위험을 이해하고, 전략을 개발하며, 친구들과 경쟁할 수 있습니다.',
        idea: '암호화폐 투자에 관심이 있지만 실제 돈으로 거래하기에는 부담스러운 사람들을 위해 가상 거래 환경을 제공하고 싶었습니다. 실제 시장 데이터를 기반으로 한 시뮬레이션을 통해 안전하게 거래 경험을 쌓을 수 있을 것이라 생각했습니다.',
        architectureImage: '/architectureImage/architecture3.png',
        features: [
          '실시간 가상 화폐 시세 제공',
          '가상 자산 거래 및 포트폴리오 관리',
          '실시간 거래 내역 및 차트 제공',
          '친구들과의 랭킹 시스템',
          '다양한 거래 전략 시뮬레이션'
        ],
        challenges: [
          '실시간 시세 데이터 처리 및 정확성 확보',
          '대용량 거래 데이터 처리 및 저장',
          '동시 접속자 처리 및 시스템 안정성'
        ],
        troubleshooting: [
          {
            title: 'Cassandra 대용량 데이터 처리 문제',
            problem: 'Cassandra 파티셔닝 전략을 최적화하여 대용량 데이터 처리 성능을 향상시켰습니다.',
            details: [
              '대용량 거래 데이터로 인한 파티션 불균형',
              '쿼리 성능 저하 및 응답 지연',
              '데이터 분산 저장 시 일관성 문제'
            ],
            solutions: [
              'Cassandra 파티셔닝 전략을 최적화하여 대용량 데이터 처리 성능을 향상',
              '적절한 파티션 키 설계로 데이터 분산 최적화',
              '읽기 성능 향상을 위한 복제 전략 구현'
            ],
            results: [
              '대용량 데이터 처리 성능 대폭 향상',
              '쿼리 응답 속도 개선',
              '데이터 일관성 확보'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting7-1.png',
                caption: 'Cassandra 파티셔닝 전략',
                width: 'w-full'
              },
              {
                src: '/troubleshootingImage/troubleshooting7-2.png',
                caption: '데이터 처리 성능 개선 결과',
                width: 'w-3/4'
              }
            ]
          },
          {
            title: 'Redis 실시간 시세 업데이트 지연',
            problem: 'Redis Pub/Sub을 활용하여 실시간 시세 업데이트 지연 문제를 해결했습니다.',
            details: [
              '실시간 시세 데이터 업데이트 지연',
              '대량 데이터 전송 시 네트워크 병목',
              '시세 데이터 일관성 보장의 어려움'
            ],
            solutions: [
              'Redis Pub/Sub을 활용하여 실시간 시세 업데이트 지연 문제를 해결',
              '메시지 큐를 통한 비동기 데이터 처리',
              '데이터 버전 관리로 일관성 보장'
            ],
            results: [
              '실시간 시세 업데이트 지연 문제 해결',
              '시세 데이터 일관성 확보',
              '사용자 경험 향상'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting8-1.png',
                caption: 'Redis Pub/Sub 구성도',
                width: 'w-full'
              },
              {
                src: '/troubleshootingImage/troubleshooting8-2.png',
                caption: '실시간 시세 업데이트 성능',
                width: 'w-4/5'
              }
            ]
          },
          {
            title: '트래픽 증가에 따른 서버 확장 문제',
            problem: 'AWS Auto Scaling을 통해 트래픽 증가에 따른 서버 확장을 자동화했습니다.',
            details: [
              '트래픽 증가 시 서버 리소스 부족',
              '수동 서버 확장의 복잡성과 지연',
              '비용 효율적인 리소스 관리의 어려움'
            ],
            solutions: [
              'AWS Auto Scaling을 통해 트래픽 증가에 따른 서버 확장을 자동화',
              'CloudWatch를 통한 모니터링 및 알림 설정',
              '비용 최적화를 위한 스케일링 정책 수립'
            ],
            results: [
              '자동 서버 확장으로 안정적인 서비스 운영',
              '비용 효율적인 리소스 관리',
              '트래픽 증가에 따른 자동 대응'
            ],
            images: [
              {
                src: '/troubleshootingImage/troubleshooting9-1.png',
                caption: 'AWS Auto Scaling 설정',
                width: 'w-full'
              },
              {
                src: '/troubleshootingImage/troubleshooting9-2.png',
                caption: '트래픽에 따른 자동 확장 모니터링',
                width: 'w-3/4'
              }
            ]
          }
        ],
        learnings: [
          '실시간 데이터 처리 시스템 설계',
          '대용량 데이터베이스 최적화',
          '클라우드 환경에서의 서비스 운영'
        ]
      }
    }
  ]

  const handleProjectClick = (index: number) => {
    setSelectedProject(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal()
    }
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 개발한 프로젝트들입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProjectClick(index)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-primary-600 text-4xl font-bold">
                  {project.title.split(' ')[0]}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Click to view details */}
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  <span>상세 보기</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            더 많은 프로젝트 보기
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="모달 닫기"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">프로젝트 개요</h3>
                <p className="text-gray-600 leading-relaxed">
                  {projects[selectedProject].details.overview}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} className="text-primary-600" />
                  <span className="text-gray-700">{projects[selectedProject].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-primary-600" />
                  <span className="text-gray-700">{projects[selectedProject].team}</span>
                </div>
              </div>

              {/* Idea */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">아이디어 계기</h3>
                <p className="text-gray-600 leading-relaxed">
                  {projects[selectedProject].details.idea}
                </p>
              </div>

              {/* Architecture */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">프로젝트 구조</h3>
                <img src={projects[selectedProject].details.architectureImage} alt="Architecture" className="w-full h-auto rounded-lg" />
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">주요 기능</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].details.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">도전 과제</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].details.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Troubleshooting */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">트러블 슈팅</h3>
                <div className="space-y-6">
                  {projects[selectedProject].details.troubleshooting.map((trouble, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">{trouble.title}</h4>
                      
                      {/* Problem */}
                      <div className="mb-4">
                        <h5 className="font-medium text-red-600 mb-2">문제 상황</h5>
                        <p className="text-gray-600 text-sm">{trouble.problem}</p>
                      </div>

                      {/* Details */}
                      <div className="mb-4">
                        <h5 className="font-medium text-orange-600 mb-2">상세 분석</h5>
                        <ul className="space-y-1">
                          {trouble.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <ArrowRight size={14} className="text-orange-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div className="mb-4">
                        <h5 className="font-medium text-green-600 mb-2">해결 방안</h5>
                        <ul className="space-y-1">
                          {trouble.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start space-x-2">
                              <ArrowRight size={14} className="text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="mb-4">
                        <h5 className="font-medium text-blue-600 mb-2">성과</h5>
                        <ul className="space-y-1">
                          {trouble.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-2">
                              <ArrowRight size={14} className="text-blue-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Images */}
                      {trouble.images && (
                        <div className="mt-4 space-y-4">
                          {trouble.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="text-center">
                              <img 
                                src={image.src} 
                                alt={image.caption}
                                className={`${image.width} h-auto rounded-lg border border-gray-200 mx-auto`}
                              />
                              <p className="text-sm text-gray-500 mt-2 italic whitespace-pre-line">
                                {image.caption}
                              </p>
                              {image.showArrow && (
                                <div className="flex justify-center mt-2">
                                  <ArrowRight size={20} className="text-primary-600 rotate-90" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Learnings */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">학습 내용</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].details.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>GitHub 저장소</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects 