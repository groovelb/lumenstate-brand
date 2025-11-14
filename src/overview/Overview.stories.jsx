import { Box, Stack, Typography } from '@mui/material';

export default {
  title: '00. Overview/Introduction',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '이 문서는 제로베이스에서 본 웹사이트를 구축할 때, 디자이너 관점에서 반드시 충족해야 하는 단계와 산출물을 간결하게 정리한 개요입니다. 구현 세부가 아니라 디자인 의사결정과 과정 중심으로 설명합니다.',
      },
    },
  },
};

export const ProjectSummary = () => (
  <Stack spacing={3}>
    <Box>
      <Typography variant="h5">프로젝트 개요</Typography>
      <Typography variant="body2" color="text.secondary">
        미니멀한 흑백 톤, 단일 페이지 구조(헤더/메인 그리드). 시간의 흐름에 맞춘 조도·색온도 경험, 반응형 그리드, 스크롤 기반 모션을 핵심으로 합니다.
      </Typography>
    </Box>

    <Box>
      <Typography variant="h6">1) @project-summary.mdc — 기획 요약</Typography>
      <Typography variant="body2">- 브랜드 톤·목표 경험·핵심 화면(히어로/브랜드/쇼케이스) 정의</Typography>
      <Typography variant="body2">- 컬러·그리드·모션에 대한 원칙 수립(필요 최소만 사용)</Typography>
    </Box>

    <Box>
      <Typography variant="h6">2) 기획 내용에 따른 데이터 구성 — @products.js</Typography>
      <Typography variant="body2">- 제품 스키마 확정: 이름, 카테고리, 가격/스펙, 이미지(주·보조), 영상, 조도·색온도</Typography>
      <Typography variant="body2">- 목록/필터/정렬 기준 확정(탐색 흐름 고려)</Typography>
    </Box>

    <Box>
      <Typography variant="h6">3) 이미지 준비 및 MUI 테마 커스텀, 아이콘 선정</Typography>
      <Typography variant="body2">- 4:5 정비율 가이드, 라이트/다크 환경 대비 보장</Typography>
      <Typography variant="body2">- 타이포·스페이싱·콘트라스트 커스텀(가독·명료 우선)</Typography>
      <Typography variant="body2">- 선형·가벼운 아이콘 선택(즉시 인지 가능성)</Typography>
    </Box>

    <Box>
      <Typography variant="h6">4) 레이아웃 관련 컴포넌트 생성</Typography>
      <Typography variant="body2">- Header(네비/시계/미니 타임라인 자리 교체)</Typography>
      <Typography variant="body2">- LineGrid(격자 라인 유지), Container(여백 체계)</Typography>
    </Box>

    <Box>
      <Typography variant="h6">5) 빈 템플릿 생성(공간만 정의)</Typography>
      <Typography variant="body2">- Hero/Brand/Showcase 골격만 구성(콘텐츠 없이 레이아웃만 검증)</Typography>
      <Typography variant="body2">- 뷰포트별 공간 배분·시선 흐름 점검</Typography>
    </Box>

    <Box>
      <Typography variant="h6">6) 기본 컴포넌트 생성 — 제품 카드·타임라인 슬라이더 등</Typography>
      <Typography variant="body2">- 카드: 주/보조 이미지 전환(야간 오버레이), 최소 메타 노출</Typography>
      <Typography variant="body2">- 타임라인: 4지점(정오/오후/저녁/자정) 버튼·마크, 직관적 피드백</Typography>
    </Box>

    <Box>
      <Typography variant="h6">7) 고급 컴포넌트 생성 — 비디오 스크롤러</Typography>
      <Typography variant="body2">- 스크롤 진행률과 비디오 프레임을 직접 매핑(선형 시킹)</Typography>
      <Typography variant="body2">- 시간 정보·타임라인을 오버레이로 제공(모바일 수직 레이아웃)</Typography>
    </Box>

    <Box>
      <Typography variant="h6">8) 템플릿 채워나가기</Typography>
      <Typography variant="body2">- 콘텐츠를 단계적으로 주입(히어로→브랜드→쇼케이스)</Typography>
      <Typography variant="body2">- 상태·인터랙션 연결(타임라인 값→배경/썸네일/칩 색)</Typography>
    </Box>

    <Box>
      <Typography variant="h6">8-1) 슬라이더에 따른 테마 전환</Typography>
      <Typography variant="body2">- 단일 컨트롤: 타임라인 슬라이더 값(0~1)을 전역 테마의 유일한 입력으로 사용</Typography>
      <Typography variant="body2">- 모드 정책: 0.5 임계값을 기준으로 라이트/다크 이원화(텍스트·칩·컨트롤 컬러 동기화)</Typography>
      <Typography variant="body2">- 배경 보간: 하루 4구간(정오/오후/저녁/자정)로 단순화해 구간 간 색을 부드럽게 보간</Typography>
      <Typography variant="body2">- 전환 감성: 1s 이징으로 자연스러운 변화, 과도한 스태거/지연 금지(피드백 지연 방지)</Typography>
      <Typography variant="body2">- 접근성: 모션 축소 설정 시 애니메이션 최소화, 대비 기준 유지</Typography>
    </Box>

    <Box>
      <Typography variant="h6">9) 반응형 대응</Typography>
      <Typography variant="body2">- sm 이하: 필터 숨김, 타임라인 수직 배치, 히어로 1열</Typography>
      <Typography variant="body2">- md 이상: 필터 스티키, 히어로 2열, 그리드 열 확장</Typography>
    </Box>
  </Stack>
);


