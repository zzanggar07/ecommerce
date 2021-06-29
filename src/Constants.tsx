// @ts-ignore
// import Map from 'collections/map';

export const BUFFER_SIZE = 16384
export const SAMPLE_RATE = 8000

export const NET_REQ_STATUS = {
   READY: 'READY',
   PENDING: 'PENDING',
   DONE: 'DONE',
   ERROR: 'ERROR',
}
export const NET_RES_STATUS = {
   DONE: 'DONE',
   FAILED: 'FAILED',
   SUCCESS: 'SUCCESS',
}
export const AUDIO_STATE = {
   PAUSE: 2,
   PLAY: 1,
   SEEK: 3,
   STOP: 0,
}

export const TRANSACTION = {
   CONTENTS: 'CONTENTS',
   END: 'END',
   REGISTER: 'REGISTER',
   REGISTERED: 'REGISTERED',
   RESULT: 'RESULT',
}

export const MENU = {
   BOT: 1,
   CONVERSATION: 0,
}

export const MAIN_MENU = {
   HOME: 'home',
   SHOP: 'shop',
   ABOUT: 'about',
   LATEST: 'latest',
   BLOG: 'blog',
   PAGES: 'pages',
   CART: 'cart',
   CONTACT: 'contact',
   LOGIN: 'login',
}

export const MAIN_MENU_PROPS = new Map()
   .set(MAIN_MENU.HOME, { name: 'HOME', key: MAIN_MENU.HOME, title: 'Home', pathName:"/"})
   .set(MAIN_MENU.SHOP, {
      name: 'SHOP',
      key: MAIN_MENU.SHOP,
      title: 'Shop',
      pathName:"/products"
   })
   .set(MAIN_MENU.ABOUT, {
      name: 'ABOUT',
      key: MAIN_MENU.ABOUT,
      title: 'About',
      pathName:"/about"
   })
   .set(MAIN_MENU.LATEST, {
      name: 'LATEST',
      key: MAIN_MENU.LATEST,
      title: 'Latest',
      pathName:"/latest"
   })
   .set(MAIN_MENU.BLOG, {
      name: 'BLOG',
      key: MAIN_MENU.BLOG,
      title: 'Blog',
      pathName:"/blog"
   })
   .set(MAIN_MENU.PAGES, {
      name: 'PAGES',
      key: MAIN_MENU.PAGES,
      title: 'Pages',
      pathName:"/pages"
   })
   .set(MAIN_MENU.CART, {
      name: 'CART',
      key: MAIN_MENU.CART,
      title: 'Cart',
      pathName:"/cart"
   })
   .set(MAIN_MENU.CONTACT, {
      name: 'CONTACT',
      key: MAIN_MENU.CONTACT,
      title: 'Contact',
      pathName:"/contact"
   })
   .set(MAIN_MENU.LOGIN, {
      name: 'LOGIN',
      key: MAIN_MENU.LOGIN,
      title: 'Login',
      pathName:"/login"
   })

export const SUB_MENU_HOME = {
   DASHBOARD: 'dashBoard',
   LEARNING_TOOL: 'learningTool',
   TAGGING_GUIDE: 'taggingGuide',
   STORAGE_INFO: 'storageInfo',
}

export const SUB_MENU_HOME_PROPS = new Map()
   .set(SUB_MENU_HOME.DASHBOARD, {
      name: SUB_MENU_HOME.DASHBOARD,
      key: SUB_MENU_HOME.DASHBOARD,
      title: '대시보드',
   })
   .set(SUB_MENU_HOME.LEARNING_TOOL, {
      name: SUB_MENU_HOME.LEARNING_TOOL,
      key: SUB_MENU_HOME.LEARNING_TOOL,
      title: '학습기 사용법',
   })
   .set(SUB_MENU_HOME.TAGGING_GUIDE, {
      name: SUB_MENU_HOME.TAGGING_GUIDE,
      key: SUB_MENU_HOME.TAGGING_GUIDE,
      title: '메타데이터 태깅가이드',
   })
   .set(SUB_MENU_HOME.STORAGE_INFO, {
      name: SUB_MENU_HOME.STORAGE_INFO,
      key: SUB_MENU_HOME.STORAGE_INFO,
      title: '저장소 안내',
   })

export const SUB_MENU_MANAGER = {
   LEARNING_TYPE: 'learningType',
   LEARNING_MODELS: 'learningModels',
   LEARNING_DATASET: 'learningDataset',
}

export const SUB_MENU_MANAGER_PROPS = new Map()
   .set(SUB_MENU_MANAGER.LEARNING_TYPE, {
      name: SUB_MENU_MANAGER.LEARNING_TYPE,
      key: SUB_MENU_MANAGER.LEARNING_TYPE,
      title: '학습유형',
   })
   .set(SUB_MENU_MANAGER.LEARNING_MODELS, {
      name: SUB_MENU_MANAGER.LEARNING_MODELS,
      key: SUB_MENU_MANAGER.LEARNING_MODELS,
      title: '학습모델',
   })
   .set(SUB_MENU_MANAGER.LEARNING_DATASET, {
      name: SUB_MENU_MANAGER.LEARNING_DATASET,
      key: SUB_MENU_MANAGER.LEARNING_DATASET,
      title: '학습데이터셋',
   })

export const CREATE_LEARNING_ITEM = {
   TYPE: 'TYPE',
   NAME: 'NAME',
   MODEL: 'MODEL',
   DATASET: 'DATASET',
   BATCH: 'BATCH',
   EPOCH: 'EPOCH',
   GPU: 'GPU',
}

export const CREATE_LEARNING_ITEM_PROPS = new Map()
   .set(CREATE_LEARNING_ITEM.TYPE, {
      title: '학습유형',
      param: 'learningType',
      errorMsg: '학습유형을 선택하세요.',
   })
   .set(CREATE_LEARNING_ITEM.NAME, {
      title: '저장모델명',
      param: 'learningType',
      errorMsg: '저장 모델명을 작성하세요.',
   })
   .set(CREATE_LEARNING_ITEM.MODEL, {
      title: '모델선택',
      param: 'learningType',
      errorMsg: '모델을 선택해주세요.',
   })
   .set(CREATE_LEARNING_ITEM.DATASET, {
      title: '데이터 셋 선택',
      param: 'learningType',
      errorMsg: '데이터 셋을 선택해주세요.',
   })
   .set(CREATE_LEARNING_ITEM.BATCH, {
      title: '배치 사이즈',
      param: 'learningType',
      errorMsg: '배치 사이즈를 입력하세요.',
   })
   .set(CREATE_LEARNING_ITEM.EPOCH, {
      title: '에폭 수',
      param: 'learningType',
      errorMsg: '에폭수를 입력하세요.',
   })
   .set(CREATE_LEARNING_ITEM.GPU, {
      title: 'GPU 지정',
      param: 'learningType',
      errorMsg: 'GPU 지정하세요.',
   })

export const SEARCH_RULE_TYPE = {
   COMPANY_NAME: 'COMPANY_NAME',
   EMAIL: 'EMAIL',
   MANAGER_NAME: 'MANAGER_NAME',
   FINAL_CREATOR: 'FINAL_CREATOR',
}

export const SEARCH_RULE_OPTION = [
   { value: SEARCH_RULE_TYPE.COMPANY_NAME, label: '업체' },
   { value: SEARCH_RULE_TYPE.EMAIL, label: '이메일' },
   { value: SEARCH_RULE_TYPE.MANAGER_NAME, label: '고객명' },
   { value: SEARCH_RULE_TYPE.FINAL_CREATOR, label: '최종상담자' },
]

export const MULTI_SELECT_TYPE = {
   BUSINESS_CATEGORY: 'businessCategory',
   COMPANY_NAME: 'companyName',
   LICENSE_NUMBER: 'licenseNumber',
   COMPANY_ADDRESS: 'companyAddress',
   MANAGER_NAME: 'managerName',
   POSITION: 'position',
   DEPARTMENT: 'department',
   TEL_NUMBER: 'telNumber',
   PHONE_NUMBER: 'phoneNumber',
   FAX_NUMBER: 'faxNumber',
   EMAIL: 'email',
   FINAL_CREATOR: 'finalCreator',
   MEMO: 'memo',
   CREATED_TIME: 'createdTime',
   UPDATED_TIME: 'updatedTime',
}

export const OPTIONS = [
   { value: MULTI_SELECT_TYPE.BUSINESS_CATEGORY, label: '업종', isFixed: true },
   { value: MULTI_SELECT_TYPE.COMPANY_NAME, label: '업체명', isFixed: true },
   { value: MULTI_SELECT_TYPE.LICENSE_NUMBER, label: '사업자번호' },
   { value: MULTI_SELECT_TYPE.MANAGER_NAME, label: '담당자', isFixed: true },
   { value: MULTI_SELECT_TYPE.EMAIL, label: '이메일', isFixed: true },
   { value: MULTI_SELECT_TYPE.COMPANY_ADDRESS, label: '회사주소' },
   { value: MULTI_SELECT_TYPE.POSITION, label: '직급' },
   { value: MULTI_SELECT_TYPE.DEPARTMENT, label: '부서명' },
   {
      value: MULTI_SELECT_TYPE.FINAL_CREATOR,
      label: '최종상담자',
      isFixed: true,
   },
   { value: MULTI_SELECT_TYPE.TEL_NUMBER, label: '전화번호' },
   { value: MULTI_SELECT_TYPE.PHONE_NUMBER, label: '휴대폰' },
   { value: MULTI_SELECT_TYPE.FAX_NUMBER, label: '팩스번호' },
   { value: MULTI_SELECT_TYPE.MEMO, label: '메모', isFixed: true },
   { value: MULTI_SELECT_TYPE.CREATED_TIME, label: '생성일시' },
   { value: MULTI_SELECT_TYPE.UPDATED_TIME, label: '수정일시' },
]

export const OPTION_STYLE = {
   multiValue: (base: any, state: any) => {
      return state.data.isFixed
         ? { ...base, backgroundColor: '#05b3d5 !important' }
         : base
   },
   multiValueLabel: (base: any, state: any) => {
      return state.data.isFixed
         ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 }
         : base
   },
   multiValueRemove: (base: any, state: any) => {
      return state.data.isFixed ? { ...base, display: 'none' } : base
   },
}

export const PERIOD_TYPE = {
   ALL: 'ALL',
   WEEK: 'WEEK',
   MONTH: 'MONTH',
   YEAR: 'YEAR',
   CUSTOM: 'CUSTOM',
}

export const PERIOD_TYPE_PROPS = new Map()
   .set(PERIOD_TYPE.ALL, { title: '전체' })
   .set(PERIOD_TYPE.WEEK, { title: '지난 주' })
   .set(PERIOD_TYPE.MONTH, { title: '지난 달' })
   .set(PERIOD_TYPE.YEAR, { title: '지난 해' })
   .set(PERIOD_TYPE.CUSTOM, { title: '임의 날짜' })

export const QUARTER_TYPE_PROPS = new Map()
   .set(1, { title: '1월~3월' })
   .set(2, { title: '4월~6월' })
   .set(3, { title: '7월~9월' })
   .set(4, { title: '10월~12월' })

export const BANTC = {
   BUDGET: 'BUDGET',
   AUTHORITY: 'AUTHORITY',
   NEEDS: 'NEEDS',
   TIMELINE: 'TIMELINE',
   COMPETITION: 'COMPETITION',
}

export const BANTC_INFO = new Map()
   .set(BANTC.BUDGET, { index: 0, color: 'bg-info' })
   .set(BANTC.AUTHORITY, { index: 1, color: 'bg-success' })
   .set(BANTC.NEEDS, { index: 2, color: 'bg-purple' })
   .set(BANTC.TIMELINE, { index: 3, color: 'bg-warning' })
   .set(BANTC.COMPETITION, { index: 4, color: 'bg-pink' })

export const NOTIFICATION = {
   MESSAGE: 'MESSAGE',
   REGISTER: 'REGISTER',
   REGISTERED: 'REGISTERED',
   LICENSE_ERROR: 'LICENSE_ERROR',
   CAPACITY_OVER: 'CAPACITY_OVER',
   EXPIRY_TIME: 'EXPIRY_TIME',
   LICENSE_UPDATED: 'LICENSE_UPDATED',
   INDEXER_REGISTERED: 'INDEXER_REGISTERED',
   INDEXER_REMOVED: 'INDEXER_REMOVED',
   INDEXER_RECREATED: 'INDEXER_RECREATED',
   INDEXER_UPDATED: 'INDEXER_UPDATED',
}

export const LEVEL_TYPE = {
   INFO: 'INFO',
   WARNING: 'WARNING',
   DANGER: 'DANGER',
}

export const LEVEL = new Map()
   .set(LEVEL_TYPE.INFO, {
      icon: 'fas fa-check',
      type: 'success',
   })
   .set(LEVEL_TYPE.WARNING, {
      icon: 'fas fa-info-circle',
      type: 'warning',
   })
   .set(LEVEL_TYPE.DANGER, {
      icon: 'fas fa-exclamation-triangle',
      type: 'danger',
   })

export const COLORS = [
   '#3366CC',
   '#DC3912',
   '#FF9900',
   '#109618',
   '#990099',
   '#3B3EAC',
   '#0099C6',
   '#DD4477',
   '#66AA00',
   '#B82E2E',
]

export const ERROR_PROPS = new Map()
   // 사용자 에러 1001 ~ 1999
   .set(1001, {
      key: 'ALREADY_REGISTERED_USER',
      message: '이미 등록된 사용자입니다.',
   })
   .set(1002, { key: 'NOT_EXIST_USER', message: '존재하지 않는 사용자입니다.' })
   .set(1003, { key: 'NOT_EQUALS_PASSWORD', message: '패스워드 미일치입니다.' })
   // Folder
   .set(2001, { key: 'NOT_EXIST_FOLDER', message: '존재하지 않는 폴더입니다.' })

   // Meta
   .set(3001, {
      key: 'NOT_EXIST_META',
      message: '존재하지 않는 메타데이타입니다.',
   })

   // Role
   .set(4001, { key: 'NOT_EXIST_ROLE', message: '존재하지 않는 권한 입니다.' })

   // File
   .set(5001, { key: 'FILE_SAVE_STORAGE', message: '파일 저장 에러입니다.' })
   .set(5002, { key: 'FILE_LOAD', message: '파일 로드 에러입니다.' })
   .set(5003, {
      key: 'NOT_EXIST_RESOURCE',
      message: '존재하지 않는 리소스입니다.',
   })
   .set(5004, { key: 'RESIZE', message: '리사이즈 에러입니다.' })

   // Password
   .set(6001, {
      key: 'NOT_EXIST_PASSWORD_RESET_TOKEN',
      message: '존재하지 않는 패스워드 리셋 토큰입니다.',
   })
   .set(6002, {
      key: 'EXPIRED_PASSWORD_RESET_TOKEN',
      message: '패스워드 리셋 토큰 만료입니다.',
   })

   // Mail
   .set(7001, {
      key: 'FAILED_CONNECTING_MAIL_SERVER',
      message: '메일 서버 에러입니다.',
   })
   .set(7002, {
      key: 'EXPIRED_PASSWORD_RESET_TOKEN',
      message: '메일 발송 실패입니다.',
   })
   .set(7003, {
      key: 'EXPIRED_PASSWORD_RESET_TOKEN',
      message: '패스워드 변경 메일 발송 실패입니다.',
   })

   // Board
   .set(8001, {
      key: 'NOT_EXIST_BOARD',
      message: '존재하지 않는 게싯글입니다.',
   })
   .set(8002, {
      key: 'NOT_EXIST_COMMENT',
      message: '존재하지 않는 댓글입니다.',
   })
   .set(8003, {
      key: 'NOT_EXIST_TYPE',
      message: '존재하지 안는 게시판 타입입니다.',
   })
   .set(8004, { key: 'NOT_WRITER', message: '본인글이 아닙니다.' })

   // 시스템 에러 9 ~ 9999
   .set(9001, { key: 'FIELD_PARAMS', message: '입력 필드 오류입니다.' })
   .set(9002, { key: 'HTTP_ERROR', message: 'HTTP 에러입니다.' })
   // .set(9003, {key: 'SYSTEM_ERROR_DOWNLOAD', message: "다운로드 실패입니다."})
   // .set(9004, {key: 'SYSTEM_FAILED_SEND_MESSAGE', message: "메세지 전송 실패입니다."})
   // .set(9005, {key: 'SYSTEM_ERROR_WEB', message: "웹 에러입니다."})
   // .set(9007, {key: 'SYSTEM_WRONG_REFINDER_ADDRESS', message: "잘못된 리파인더 서버주소입니다."})
   // .set(9008, {key: 'SYSTEM_DB_VOLUME_BUSY', message: "색인이 진행 중입니다. 잠시 후에 사용해주세요."})
   // .set(9009, {key: 'SYSTEM_ERROR_UPLOAD', message: "업로드 실패입니다."})
   // .set(9999, {key: 'SYSTEM_KNOWN', message: "알 수 없는 오류입니다."})

   // STT
   .set(10001, { key: 'STT_SERVER', message: 'STT 서버 에러입니다.' })

   // PRODUCT
   .set(11001, {
      key: 'ALREADY_REGISTERED_COMPANY_PRODUCT_NAME',
      message: '이미 등록된 업체명 & 제품명입니다.',
   })
   .set(11002, {
      key: 'NOT_EXIST_PRODUCT',
      message: '등록되지 않은 제품입니다.',
   })

   // CUSTOMER
   .set(12001, {
      key: 'NOT_EXIST_CUSTOMER',
      message: '존재하지 않는 고객입니다.',
   })
   .set(12002, {
      key: 'ALREADY_REGISTERED_CUSTOMER',
      message: '이미등록된 고객입니다.',
   })
   .set(12003, {
      key: 'ALREADY_REGISTERED_EMAIL_CUSTOMER',
      message: '이미등록된 이메일 주소입니다.',
   })
   // COUNSEL
   .set(13001, {
      key: 'NOT_EXIST_COUNSEL',
      message: '존재하지 않는 상담입니다.',
   })
   .set(13001, {
      key: 'ALREADY_REGISTERED_COUNSEL',
      message: '이미 등록된 상담입니다.',
   })
   // EXCEL
   .set(14001, {
      key: 'EXCEL_DOWNLOAD',
      message: '엑셀 다운로드중 에러입니다.',
   })

   // ANALYSIS
   .set(15001, {
      key: 'ANALYSIS_SERVER_ERROR',
      message: '분석 서버 에러입니다.',
   })

   // CLASS 101 과제 
   export const COUPONS = [
      {
        type: 'rate',
        title: '10% 할인 쿠폰',
        discountRate: 10,
      },
      {
        type: 'amount',
        title: '10,000원 할인 쿠폰',
        discountAmount: 10000,
      }
    ];

    export const PRODUCTS = [
      {
        id: 'B9vUv0E0ibc0X55kVVLr',
        title: '포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스',
        coverImage: 'https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729',
        price: 560000,
        score: 200,
      },
      {
        id: '81x83ysiEHsHCBoeVh2O',
        title: '글씨가 주는 소소한 행복, Lettering Together!',
        coverImage: 'https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a',
        price: 320000,
        score: 300,
    
      },
      {
        id: 'ZXV8mCcvbpXKm5J5snUq',
        title: '붓펜으로 그려낸 보통날, 보통의 글씨',
        coverImage: 'https://cdn.class101.net/images/a363a069-5aaf-40cb-822e-a2cab585c37e',
        price: 240000,
        score: 350,
    
      },
      {
        "id": "tpP45lSwqf1X1yEEFqL4",
        "title": "수놓는 발바닥과 함께 하는 꽁냥꽁냥 고양이 자수",
        "coverImage": "https://cdn.class101.net/images/e6b7bde6-b23d-447f-9cdf-3879caf7eb13",
        price: 90000,
        score: 120,
        availableCoupon: false,
      },
      {
        "id": "nc9XiAWAN4uhNr6pDqlG",
        "title": "소복소복 바늘 끝에서 피어오르는 자수",
        "coverImage": "https://cdn.class101.net/images/38f79b22-4728-4c16-bee9-966fff07df3f",
        price: 230000,
        score: 640,
      },
      {
        "id": "ndHkNPUpGPiF4nmqX0PL",
        "title": "한 땀 한 땀 꽃을 수 놓다 - 보태니컬 입체 프랑스 자수",
        "coverImage": "https://cdn.class101.net/images/132a560b-ba7f-4564-b5f5-709b934f5ddd",
        price: 320000,
        score: 200,
      },
      {
        "id": "TQw8gmqYK2KrKcP1ibWb",
        "title": "내가 그리고, 네가 간직할 인공의 아이패드 드로잉",
        "coverImage": "https://cdn.class101.net/images/f926a844-cfeb-4983-a39a-fb55a0b3fd0b",
        price: 320000,
        score: 190,
        availableCoupon: false,
      },
      {
        "id": "pHr0phFtcWhsgZhSVe9F",
        "title": "글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피",
        "coverImage": "https://cdn.class101.net/images/864f377f-93d9-4520-94de-19ca142c432f",
        price: 123000,
        score: 453,
      },
      {
        "id": "4tVyp15jKUO6sfUvLnBc",
        "title": "또 다른 나를 그리다, 동글의 아이패드 캐릭터 드로잉",
        "coverImage": "https://cdn.class101.net/images/0a6a86b9-f1ed-4b90-9d53-cbbb0413989d",
        price: 345000,
        score: 300,
        availableCoupon: false,
      },
      {
        "id": "CNCwXwHP7FUip83z5VEH",
        "title": "평범한 일상에 색을 더하는 시간, 자토의 아이패드 드로잉",
        "coverImage": "https://cdn.class101.net/images/9e7be50d-72f1-4c93-80d6-c6b95b42bd40",
        price: 50000,
        score: 300,
      },
      {
        "id": "vgrdHO9bLqNxDYt4Q7vZ",
        "title": "리노와 아이패드로 시작하는 디지털캘리그라피",
        "coverImage": "https://cdn.class101.net/images/1ea53728-c3f7-4fe9-a485-88c9a130b3b4",
        price: 564000,
        score: 150,
      },
      {
        "id": "gGFsFvhrKlvZpjLRfmNY",
        "title": "디지털로 만들어내는 아날로그 감성, 해란의 아이패드 드로잉",
        "coverImage": "https://cdn.class101.net/images/cbadec97-d306-4669-bbcf-eef5d1a9d261",
        price: 230000,
        score: 220,
      }
    ];
    export const COUPON_TYPE_RATE = "rate"
    export const COUPON_TYPE_AMOUNT= "amount"

    export const SORT_BY_PRICE = 1
    export const SORT_BY_SCORE = 2

    export const api = "https://api.admin.pikkle.me"