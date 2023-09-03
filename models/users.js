const verify = require('../lib/encryption');

let users = [
  {
    email: 'test@test.com',
    // password: 'test123!',
    password: {
      hashedPassword: 'rfeWbjQcp8HykAaZ/CSZOrC9Vuj+nAK8ZLdfSE0FfhtXY8oLR21lUXQMRO3zN9auh1R1bBFc/mv34QQGqgfh9A==',
      salt: 'Sq8ahX2trhmrARioCuCfjSsTrXQZpEVEmQj3W4HteF/bHyB6FmqtIxVNZATwp7wFpT2Ax3PSQ5n81JGel9pAbQ==',
    },
    nickname: 'test',
    my_library: [
      {
        title: '어린 왕자',
        rate: 4.5,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=68534943&amp;partner=openAPI&amp;start=api',
        author: '앙투안 드 생텍쥐페리 (지은이), 황현산 (옮긴이)',
        pubDate: '2015-10-20',
        description:
          '전 세계인들의 사랑을 받은 가장 아름다운 이야기, 생텍쥐페리의 &lt;어린 왕자&gt;가 문학 평론가 황현산의 번역으로 열린책들에서 출간되었다. 황현산은 이 작품을 새롭게 번역하면서 생텍쥐페리의 진솔한 문체를 고스란히 살려 내기 위해 심혈을 기울였다.',
        isbn: '8932917248',
        isbn13: '9788932917245',
        itemId: 68534943,
        priceSales: 10620,
        priceStandard: 11800,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 590,
        cover: 'https://image.aladin.co.kr/product/6853/49/cover/8932917248_2.jpg',
        categoryId: 50921,
        categoryName: '국내도서>소설/시/희곡>프랑스소설',
        publisher: '열린책들',
        salesPoint: 43838,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 10,
        subInfo: {},
      },
      {
        title: '초판본 어린 왕자 (무선) - 1943년 오리지널 초판본 표지디자인',
        rate: 4,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=280504630&amp;partner=openAPI&amp;start=api',
        author: '앙투안 드 생텍쥐페리 (지은이), 김미정 (옮긴이)',
        pubDate: '2021-10-04',
        description:
          '1943년 뉴욕에서 출판된 프랑스어판 초판본 표지디자인을 그대로 되살린 무선 초판본 표지 디자인 《어린 왕자》이다. 어둡지도 너무 빛바래지도 않은 노란색 표지와 어린 왕자의 연둣빛 옷의 색감이 잘 살아 있으며, 본문에는 생텍쥐페리의 친필 사인이 들어 있다.',
        isbn: 'K102734432',
        isbn13: '9791164455300',
        itemId: 280504630,
        priceSales: 4950,
        priceStandard: 5500,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 270,
        cover: 'https://image.aladin.co.kr/product/28050/46/cover/k102734432_1.jpg',
        categoryId: 50921,
        categoryName: '국내도서>소설/시/희곡>프랑스소설',
        publisher: '더스토리',
        salesPoint: 23467,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 10,
        seriesInfo: {
          seriesId: 103666,
          seriesLink: 'http://www.aladin.co.kr/shop/common/wseriesitem.aspx?SRID=103666&amp;partner=openAPI',
          seriesName: '더스토리 초판본 시리즈 ',
        },
        subInfo: {},
      },
      {
        title: '어린 왕자',
        rate: 4,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=234921&amp;partner=openAPI&amp;start=api',
        author: '앙투안 드 생텍쥐페리 (지은이), 박성창 (옮긴이)',
        pubDate: '2000-05-23',
        description:
          '프랑스 소설가이자 시인인 생텍쥐페리의 탄생 100주년을 기념한 작품. <인간의 대지> <야간비행> 등을 쓴 비행기 조종사였던 그는 비행기를 사색과 발견의 도구로 삼았다.',
        isbn: '8949190133',
        isbn13: '9788949190136',
        itemId: 234921,
        priceSales: 9900,
        priceStandard: 11000,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 550,
        cover: 'https://image.aladin.co.kr/product/23/49/cover/8949190133_2.jpg',
        categoryId: 48863,
        categoryName: '국내도서>어린이>초등 전학년>동화/명작/고전',
        publisher: '비룡소',
        salesPoint: 18549,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 10,
        seriesInfo: {
          seriesId: 5269,
          seriesLink: 'http://www.aladin.co.kr/shop/common/wseriesitem.aspx?SRID=5269&amp;partner=openAPI',
          seriesName: '비룡소 걸작선 ',
        },
        subInfo: {},
      },
      {
        title: '어린 왕자',
        rate: 3.5,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=118305353&amp;partner=openAPI&amp;start=api',
        author: '앙투안 드 생텍쥐페리 (지은이), 이정서 (옮긴이)',
        pubDate: '2017-09-22',
        description:
          "지난 2014년 알베르 카뮈 &lt;이방인&gt;, 2017년 스콧 피츠제럴드의 &lt;위대한 개츠비&gt;를 재번역하면서 기존 번역의 '오역'을 지적했던 번역가 이정서가 이번에는 &lt;어린 왕자&gt;를 들고 나섰다.",
        isbn: 'K722531529',
        isbn13: '9791187192596',
        itemId: 118305353,
        priceSales: 7200,
        priceStandard: 8000,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 400,
        cover: 'https://image.aladin.co.kr/product/11830/53/cover/k722531529_1.jpg',
        categoryId: 50921,
        categoryName: '국내도서>소설/시/희곡>프랑스소설',
        publisher: '새움',
        salesPoint: 11853,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 8,
        subInfo: {},
      },
      {
        title: '밤새 안녕하셨습니까? - 김복준의 아침인사',
        rate: 3.5,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=320897284&amp;partner=openAPI&amp;start=api',
        author: '김복준 (지은이)',
        pubDate: '2023-07-20',
        description:
          "32년 동안 '투신'했던 경찰생활을 정리한 다음, 유튜브 《김복준의 사건의뢰》로 '제2의 인생'을 살아가고 있는 김복준 교수의 세상살이, 그리고 이웃들의 이야기.",
        isbn: 'K552834191',
        isbn13: '9791190631655',
        itemId: 320897284,
        priceSales: 13500,
        priceStandard: 15000,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 750,
        cover: 'https://image.aladin.co.kr/product/32089/72/cover/k552834191_1.jpg',
        categoryId: 51371,
        categoryName: '국내도서>에세이>한국에세이',
        publisher: '우물이있는집',
        salesPoint: 780,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 0,
        subInfo: {},
      },
      {
        title: '달님 안녕',
        rate: 4.5,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=270976&amp;partner=openAPI&amp;start=api',
        author: '하야시 아키코 (지은이)',
        pubDate: '2001-04-02',
        description:
          '달님이 점차 환하게 떠오르다가 구름에 가려지고 다시 달님이 모습을 드러내는 늘 볼 수 있는 현상에 의인화하여 섬세하게 표현한 그림책이다. 단순한 이야기지만 밤하늘과 달님 얼굴, 구름, 집, 고양이 그림이 쉽고 간결한 언어로 어우러져 아름답게 펼쳐진다.',
        isbn: '8970940561',
        isbn13: '9788970940564',
        itemId: 270976,
        priceSales: 9900,
        priceStandard: 11000,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 550,
        cover: 'https://image.aladin.co.kr/product/27/9/cover/8970940561_2.jpg',
        categoryId: 35096,
        categoryName: '국내도서>유아>0~3세>그림책',
        publisher: '한림출판사',
        salesPoint: 71508,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 9,
        seriesInfo: {
          seriesId: 5276,
          seriesLink: 'http://www.aladin.co.kr/shop/common/wseriesitem.aspx?SRID=5276&amp;partner=openAPI',
          seriesName: '하야시 아키코 시리즈 ',
        },
        subInfo: {},
      },
      {
        title: '당신의 친구는 안녕한가 - 영적 우정과 환대의 삶을 지향하며',
        rate: 4,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=316881605&amp;partner=openAPI&amp;start=api',
        author: '김기석 (지은이)',
        pubDate: '2023-05-17',
        description:
          '김기석 목사의 시대 고민을 담은 칼럼집이다. 동시대를 살아가는 그리스도인들은 물론 교회 문턱을 넘어서도 많은 사랑을 받고 있는 저자는 이 책에서 “모든 주체들에게 주어진 소명”으로 환대를 이야기한다.',
        isbn: '8953144744',
        isbn13: '9788953144743',
        itemId: 316881605,
        priceSales: 11700,
        priceStandard: 13000,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 650,
        cover: 'https://image.aladin.co.kr/product/31688/16/cover/8953144744_1.jpg',
        categoryId: 51596,
        categoryName: '국내도서>종교/역학>기독교(개신교)>기독교(개신교) 신앙생활>간증/영적성장',
        publisher: '두란노',
        salesPoint: 3555,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 10,
        subInfo: {},
      },
      {
        title: '마음아, 안녕? - 10대를 위한 마음성장학교 실천노트',
        rate: 3,
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=319092471&amp;partner=openAPI&amp;start=api',
        author: '김은미 (지은이)',
        pubDate: '2023-06-30',
        description:
          '매일 혹은 일주일에 한 번, 나의 마음과 만나며 나를 알아가는 책이다. 마음 성장에 꼭 필요한 주제 20개를, 다양한 활동을 하며 익히고 표현할 수 있게 구성했다. 이 책의 가장 큰 특징은 마음 성장을 위한 다양한 활동에 직접 참여하도록 구성됐다는 점이다.',
        isbn: 'K682833746',
        isbn13: '9791187809494',
        itemId: 319092471,
        priceSales: 15120,
        priceStandard: 16800,
        mallType: 'BOOK',
        stockStatus: '',
        mileage: 840,
        cover: 'https://image.aladin.co.kr/product/31909/24/cover/k682833746_1.jpg',
        categoryId: 32399,
        categoryName: '국내도서>청소년>청소년 자기계발',
        publisher: '더메이커',
        salesPoint: 1615,
        adult: false,
        fixedPrice: true,
        customerReviewRank: 10,
        seriesInfo: {
          seriesId: 1124558,
          seriesLink: 'http://www.aladin.co.kr/shop/common/wseriesitem.aspx?SRID=1124558&amp;partner=openAPI',
          seriesName: '실천노트 시리즈 2',
        },
        subInfo: {},
      },
    ],
  },
];

const findUserByEmail = email => users.find(user => user.email === email);

const createUser = async (email, password, nickname) => {
  const _password = await verify.createHashedPassword(password);

  users = [
    ...users,
    {
      email,
      password: _password,
      nickname: nickname || email.split('@')[0],
      my_library: [],
    },
  ];
};

const addBook = (email, newBook) => {
  users = users.map(user =>
    user.email === email && !user.my_library.find(({ itemId }) => itemId === newBook.itemId)
      ? { ...user, my_library: [...user.my_library, newBook] }
      : user
  );
};

const editRate = (email, itemId, rate) => {
  users = users.map(user =>
    user.email === email
      ? {
          ...user,
          my_library: user.my_library.map(book => (book.itemId === +itemId ? { ...book, rate: rate } : book)),
        }
      : user
  );
};

module.exports = { findUserByEmail, createUser, addBook, editRate };
