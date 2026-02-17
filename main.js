const trends = [
  {
    title: '아시아 스트리트 믹스 레이어링',
    category: '패션',
    country: '대한민국',
    region: '서울',
    summary: '테크웨어와 빈티지 스포츠웨어를 섞은 레이어링이 SNS 숏폼에서 빠르게 확산 중.',
    intro: '오버사이즈 아우터 + 포인트 액세서리 조합이 핵심이며, 성수/홍대 편집숍 착장 리뷰가 인기입니다.',
    consumption: ['편집숍 룩북 참고', '리셀 플랫폼에서 한정 아이템 탐색', '스타일 챌린지 해시태그 참여'],
    purchaseLink: 'https://www.musinsa.com'
  },
  {
    title: 'Y2K 비즈 폰스트랩',
    category: '소품',
    country: '일본',
    region: '도쿄',
    summary: '직접 커스텀 가능한 비즈 폰스트랩이 다시 유행하며 키치 무드 강화.',
    intro: '하라주쿠 소품숍 중심으로 컬러 비즈·캐릭터 참 조합이 인기이며, 선물용 수요도 높습니다.',
    consumption: ['DIY 키트 구매 후 제작', '핸드메이드 마켓에서 주문', '가방·키링 세트로 연출'],
    purchaseLink: 'https://minne.com'
  },
  {
    title: '프로틴 디저트 컵',
    category: '디저트',
    country: '미국',
    region: '캘리포니아',
    summary: '저당·고단백 디저트가 건강 루틴과 결합해 카페 신메뉴로 확산.',
    intro: '그릭요거트와 견과류, 과일 토핑을 층층이 쌓아 "헬시하지만 맛있는" 경험을 강조합니다.',
    consumption: ['헬시 카페 방문', '밀키트 정기배송', '운동 후 간식 루틴에 포함'],
    purchaseLink: 'https://www.wholefoodsmarket.com'
  },
  {
    title: '스페셜티 말차 라떼 바',
    category: '음식',
    country: '프랑스',
    region: '파리',
    summary: '말차 전문 바에서 산지·블렌딩을 고르는 체험형 음료 문화가 급부상.',
    intro: '시각적 퍼포먼스와 티 페어링을 묶어 관광객·로컬 MZ 모두를 타깃으로 운영합니다.',
    consumption: ['팝업 티바 예약', '원물 매장 구매', '홈카페 세트 구독'],
    purchaseLink: 'https://www.palaisdesthes.com'
  },
  {
    title: '초단편 브이로그 챌린지',
    category: '문화',
    country: '브라질',
    region: '상파울루',
    summary: '15초 내 일상을 압축해 보여주는 브이로그 포맷이 브랜드 협업까지 확장.',
    intro: '현지 음악과 자막 밈을 함께 쓰는 것이 포인트이며, 영상 제작 워크숍도 인기입니다.',
    consumption: ['숏폼 앱 챌린지 참여', '크리에이터 클래스 수강', '음원·템플릿 구독'],
    purchaseLink: 'https://www.tiktok.com'
  },
  {
    title: '로파이 하이브리드 플레이리스트',
    category: '음악',
    country: '영국',
    region: '런던',
    summary: '로파이 비트와 UK garage를 섞은 플레이리스트가 공부/작업용으로 확산.',
    intro: '커뮤니티 기반 큐레이션 계정이 트렌드를 주도하고 오프라인 청음 모임도 늘어났습니다.',
    consumption: ['스트리밍 큐레이션 팔로우', '청음 이벤트 참여', '뮤직 굿즈 구매'],
    purchaseLink: 'https://open.spotify.com'
  },
  {
    title: '슬랭 기반 언어교환 스터디',
    category: '언어',
    country: '멕시코',
    region: '멕시코시티',
    summary: '교과서 표현보다 현지 밈/슬랭을 배우는 언어교환 모임이 인기.',
    intro: '짧은 상황극과 밈 해석 중심으로 진행되어 참여 장벽이 낮고, SNS 콘텐츠로도 활용됩니다.',
    consumption: ['로컬 밋업 참가', '짧은 표현 카드 구독', '온라인 언어교환 앱 사용'],
    purchaseLink: 'https://www.meetup.com'
  }
];

const categorySelect = document.getElementById('category-select');
const countrySelect = document.getElementById('country-select');
const regionSelect = document.getElementById('region-select');
const resetBtn = document.getElementById('reset-btn');
const trendList = document.getElementById('trend-list');
const resultCount = document.getElementById('result-count');
const cardTemplate = document.getElementById('trend-card-template');

const unique = (values) => [...new Set(values)];

function createOption(value, label = value) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = label;
  return option;
}

function setOptions(select, items, allLabel) {
  select.innerHTML = '';
  select.append(createOption('ALL', allLabel));
  items.forEach((item) => select.append(createOption(item)));
}

function initializeFilters() {
  setOptions(categorySelect, unique(trends.map((item) => item.category)), '모든 카테고리');
  setOptions(countrySelect, unique(trends.map((item) => item.country)), '모든 국가');
  updateRegionOptions();
}

function updateRegionOptions() {
  const currentCountry = countrySelect.value;
  const regionCandidates = trends
    .filter((item) => currentCountry === 'ALL' || item.country === currentCountry)
    .map((item) => item.region);

  setOptions(regionSelect, unique(regionCandidates), '모든 지역');
}

function applyFilter(item) {
  const categoryOk = categorySelect.value === 'ALL' || item.category === categorySelect.value;
  const countryOk = countrySelect.value === 'ALL' || item.country === countrySelect.value;
  const regionOk = regionSelect.value === 'ALL' || item.region === regionSelect.value;
  return categoryOk && countryOk && regionOk;
}

function createTrendCard(item) {
  const fragment = cardTemplate.content.cloneNode(true);
  fragment.querySelector('.category').textContent = item.category;
  fragment.querySelector('.place').textContent = `${item.country} · ${item.region}`;
  fragment.querySelector('.title').textContent = item.title;
  fragment.querySelector('.summary').textContent = item.summary;
  fragment.querySelector('.intro').textContent = item.intro;

  const list = fragment.querySelector('.consumption-list');
  item.consumption.forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = entry;
    list.append(li);
  });

  const link = fragment.querySelector('.purchase-link');
  link.href = item.purchaseLink;

  return fragment;
}

function render() {
  const filtered = trends.filter(applyFilter);
  trendList.innerHTML = '';

  if (filtered.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = '조건에 맞는 트렌드가 없습니다. 필터를 조정해 보세요.';
    trendList.append(empty);
  } else {
    filtered.forEach((item) => {
      trendList.append(createTrendCard(item));
    });
  }

  resultCount.textContent = `${filtered.length}개 추천 중`;
}

categorySelect.addEventListener('change', render);
countrySelect.addEventListener('change', () => {
  updateRegionOptions();
  render();
});
regionSelect.addEventListener('change', render);
resetBtn.addEventListener('click', () => {
  categorySelect.value = 'ALL';
  countrySelect.value = 'ALL';
  updateRegionOptions();
  regionSelect.value = 'ALL';
  render();
});

initializeFilters();
render();
