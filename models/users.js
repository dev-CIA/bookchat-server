const verify = require('../lib/encryption');

let users = [
  {
    email: 'test@test.com',
    // password: 'test123!',
    password: {
      hashedPassword: '',
      salt: '',
    },
    name: 'test',
    my_library: [
      {
        title: '시선으로부터, (정세랑 장편소설)',
        rate: 4.5,
        link: 'https://search.shopping.naver.com/book/catalog/32454975970',
        image: 'https://shopping-phinf.pstatic.net/main_3245497/32454975970.20230110165450.jpg',
        author: '정세랑',
        discount: '12600',
        publisher: '문학동네',
        pubdate: '20200605',
        isbn: '9788954672214',
        description:
          '“이 소설은 무엇보다 20세기를 살아낸 여자들에게 바치는 21세기의 사랑이다.”\n  한국문학이 당도한 올곧은 따스함, 정세랑 신작 장편소설\n\n독창적인 목소리와 세계관으로 구축한 SF소설부터 우리 시대의 현실에 단단히 발 딛고 나아가는 이야기들까지, 폭넓은 작품 세계로 우리에게 늘 새로운 놀라움을 선사했던 정세랑. 작가의 동명 소설을 원작으로 제작되는 넷플릭스 드라마 〈보건교사 안은영〉(이경미 감독, 정유미 주연)과, SM에서 제작중인 케이팝 드라마 〈일루미네이션〉의 각본을 집필하며 활동 반경을 넓혀가고 있는 그가 장편소설 『시선으로부터,』로 돌아왔다. 『시선으로부터,』는 구상부터 완성까지 5년이 걸린 대작으로, 한국일보문학상을 수상한 『피프티 피플』 이후 4년 만에 내놓는 신작 장편소설이다. 『시선으로부터,』는 올해 3월 오픈한 웹진 〈주간 문학동네〉에서 3개월간 연재되었으며, 〈주간 문학동네〉 연재 후 출간되는 첫 소설이기도 하다. \n\n이 소설은 시대의 폭력과 억압 앞에서 순종하지 않았던 심시선과 그에게서 모계로 이어지는 여성 중심의 삼대 이야기이다. 한국전쟁의 비극을 겪고 새로운 삶을 찾아 떠난 심시선과, 20세기의 막바지를 살아낸 시선의 딸 명혜, 명은, 그리고 21세기를 살아가고 있는 손녀 화수와 우윤. 심시선에게서 뻗어나온 여성들의 삶은 우리에게 가능한 새로운 시대의 모습을 보여준다. 협력업체 사장이 자행한 테러에 움츠러들었던 화수는 세상의 일그러지고 오염된 면을 설명할 언어를 찾고자 한다. 해림은 친구에게 가해진 인종차별 발언에 대신 화를 내다가 괴롭힘을 당했지만 후회하거나 굴하지 않는다. 경아는 무난한 자질을 가지고도 오래 견디는 여성이 있다는 걸 보여주면서 뒤따라오는 여성들에게 힘을 주고자 한다.',
      },
      {
        title: '우리는 사랑일까 (개정판)',
        rate: 4,
        link: 'https://search.shopping.naver.com/book/catalog/32455937983',
        image: 'https://shopping-phinf.pstatic.net/main_3245593/32455937983.20221230071412.jpg',
        author: '알랭 드 보통',
        discount: '12600',
        publisher: '은행나무',
        pubdate: '20110310',
        isbn: '9788956601373',
        description:
          "남녀 간의 연애심리를 독특하게 분석한 지적인 연애소설!\n\n연애의 진행과정을 담아낸 알랭 드 보통의 지적인 연애소설 『우리는 사랑일까』. 《왜 나는 너를 사랑하는가》와 《너를 사랑한다는 건》에 이은 '사랑과 인간관계 3부작'의 하나로, 3부작 중에서 여주인공의 시선으로 그려진 유일한 책이다. 20대 중반의 커리어우먼 앨리스가 꿈꾸는 낭만적 사랑과 그녀의 남자친구 에릭 사이에서 벌어지는 아슬아슬한 사건들을 통해 이상적 사랑이 어떻게 현실 속에서 성숙한 사랑으로 완성되어가는지를 보여준다. 연애의 탄생에서 성장, 그리고 결실까지를 작가 특유의 현학적 분석과 세밀한 심리 묘사로 흥미진진하게 펼쳐놓는다.",
      },
      {
        title: '우리는 언제나 서로의 행복이야 (슈야 토야의 소소하고 행복한 일상)',
        rate: 3.5,
        link: 'https://search.shopping.naver.com/book/catalog/41120988621',
        image: 'https://shopping-phinf.pstatic.net/main_4112098/41120988621.20230712072344.jpg',
        author: '대원앤북 편집부 지음',
        discount: '14400',
        publisher: '대원앤북',
        pubdate: '20230715',
        isbn: '9791170621287',
        description:
          '카카오톡 인기 이모티콘! \n인스타그램 28만 팔로워에게 \n사랑받는 슈야의 첫 번째 일상툰 출간!\n\n*초판한정 씰스티커 증정!\n*미공개 특별편 수록!\n\n언제나 행복한 토끼 슈야와, 늘 함께하는 \n든든한 토야의 소소하고 행복한 일상!\n\n“우리, 서로의 행복이 되어 주자.”\n\n이 이야기는 슈야와 토야, 귀여운 두 마리 토끼들의 이야기입니다.\n동시에 세상의 모든 슈야와 토야의 이야기이기도 합니다.\n슈야와 토야는 기쁠 때나 슬플 때나, 항상 아껴주고 사랑해 주는\n소중한 짝꿍이지요. 둘의 이야기는 일상에서 벌어지는 소소한 이야기이지만,\n함께이기에 더욱 특별합니다. 이 이야기를 읽는 여러분도 소중한 연인과 함께\n특별한 일상을 만들어 보세요!',
      },
      {
        title: '우리는 모두 죽는다는 것을 기억하라 (삶의 다른 방식을 찾고 있는 당신에게)',
        rate: 3,
        link: 'https://search.shopping.naver.com/book/catalog/32486411750',
        image: 'https://shopping-phinf.pstatic.net/main_3248641/32486411750.20230606085903.jpg',
        author: '웨인 다이어',
        discount: '15300',
        publisher: '토네이도',
        pubdate: '20191118',
        isbn: '9791158511586',
        description:
          '언제나 우리 눈앞에, 코앞에, 발밑에 있는 죽음을 기억하라!\n\n타인의 시선에서 벗어나 자신의 삶을 사는 법을 전파했던 《행복한 이기주의자》로 지금 이 순간에도 수많은 사람들의 삶을 바꾸고 있는 웨인 다이어 박사의 『우리는 모두 죽는다는 것을 기억하라』. 우리 시대 가장 위대한 동기부여 전문가이자 심리학자, 영성가로 평가받으며 지혜롭고 통찰 깊은 삶을 살다 간 저자가 세상에 마지막으로 남기고 간 작품으로, 삶의 현자들로 불리는 작가, 철학자, 영성가, 명성가 등등 다양한 인물들의 뜨거운 목소리가 담겨 있다.\n\n저자는 우리는 언제나 영원히 살 것처럼 일하고, 영원히 살 것처럼 고민하고, 영원히 살 것처럼 불안해하고 두려워하지만 언제나 죽음은 우리 코앞에 있다고 이야기하며, 우리에게 그 사실을 일깨워 우리의 삶을 ‘영원히’에서 ‘지금 당장’으로 변화시키고자 한다. 이 책에 담긴 삶의 다른 답, 다른 방식을 찾아낸 사람들의 따뜻하고 유쾌한 이야기를 통해 나 자신을 투명하게 바라보며 분노, 죄책감, 돈과 명예에 대한 욕망으로부터 자유로워지고, 마침내 삶의 다른 방식을 찾은 나 자신을 발견하게 될 것이다.',
      },
      {
        title: '우리는 에코 히어로! 4권 세트',
        rate: 3,
        link: 'https://search.shopping.naver.com/book/catalog/40342140620',
        image: 'https://shopping-phinf.pstatic.net/main_4034214/40342140620.20230614072206.jpg',
        author: '플로렌스 어커트',
        discount: '47880',
        publisher: '나무말미',
        pubdate: '20230601',
        isbn: '9791191827231',
        description:
          '처음 시작하는 환경 교육 시리즈 “우리는 에코 히어로!”\n환경 문제를 공감하고 긍정적인 환경 감수성을 형성하는 환경 논픽션 그림책\n집에서 시작하고, 자연과 함께, 동네에서 함께, 여기저기 다니면서 실천하는 우리는 에코 히어로!\n\n세계 여러 나라에서 갑작스러운 더위나 추위, 너무 많은 비나 눈이 오는 날이 점점 늘어나고 있습니다. 환경 오염, 생태계 파괴, 기후 변화 등 다양한 환경 문제가 등장하면서 지구의 기후와 환경이 변하고 있는 것입니다. 그러다 보니 환경에 대한 관심이 높아지고, 환경 교육의 중요성이 부각되고 있습니다. 특히 환경 교육을 통해 환경 감수성을 키우는 것에 대한 중요성이 높아지고 있습니다. \n\n어릴 때부터 자연스럽게 나와 가까운 환경에서의 환경 문제와 에너지 문제를 인식하고, 생물 및 자연과 공유하는 환경에 대해 존중하는 태도를 형성한다면, 우리 아이들의 환경 감수성을 높이고 환경을 소중히 여기는 책임 있는 사람으로 성장하게 할 것입니다. \n\n『우리는 에코 히어로!』  시리즈는 나와 가까운 환경부터 점차 확대된 환경 속에서의 환경 문제와 문제 해결을 위한 방법을 소개합니다. 밝고 생생한 색감의 그림을 통해 환경 문제와 이것을 해결하기 위해 우리가 할 수 있는 방법을 상세하게 설명하여 아이들이 평생 동안 ‘에코 히어로’가 될 수 있도록 안내합니다. \n\n『우리는 에코 히어로!』 시리즈의 첫 번째 책인 《우리는 에코 히어로! 집에서 시작하기》는 가정에서 에너지와 물을 사용하는 방법과 쓰레기를 줄이고, 재사용하고, 재활용하는 것이 왜 중요한지 살펴봅니다. 두 번째 책인 《우리는 에코 히어로! 자연과 함께하기》는 우리가 사는 지구와 자연 환경을 이해하고 식물을 키우고 야생 동물을 돕는 것부터 쓰레기를 집으로 가져가는 것이 왜 중요한지 이해하며, 우리가 자연 속의 일부로서 환경을 돌보는 방법을 살펴봅니다. 세 번째 책인 《우리는 에코 히어로! 동네에서 함께하기》는 우리 동네는 우리가 이웃들과 함께 살아가는 터전임을 이해하고, 학교와 지역 사회에서 우리가 에너지 사용을 줄이고, 쓰레기를 줄이고, 재사용하고, 재활용할 수 있는지 살펴봅니다. 네 번째 책인 《우리는 에코 히어로! 여기저기 다니면서》는 우리가 여행할 때 에너지를 사용하는 방법과 화석 연료, 친환경 쇼핑 등의 이슈를 살펴봅니다.',
      },
    ],
  },
];

const findUserByEmail = email => users.find(user => user.email === email);

const findUser = (email, password) =>
  users.find(
    user => user.email === email && verify.verifyPassword(password, user.password.salt, user.password.hashedPassword)
  );
