// 질문 데이터
const questions = [
    {
        question: "나의 2025년을 가장 잘 표현하는 키워드를 골라보자",
        options: [
            { text: "똥, 소주, 흙", type: "chaos" },
            { text: "야스오, 항문, 바나나", type: "pervert" },
            { text: "구름, 책, 풀", type: "angel" },
            { text: "라디오, 김, 양은냄비", type: "evil" }
        ]
    },
    {
        question: "2026년이 되자마자 먹고싶은 음식은?",
        options: [
            { text: "흙", type: "chaos" },
            { text: "하얀 액체", type: "pervert" },
            { text: "보송보송한 흙", type: "angel" },
            { text: "철", type: "evil" }
        ]
    },
    {
        question: "2025년, 가장 기억에 남는 냄새",
        options: [
            { text: "냄새가 뭔데?", type: "chaos" },
            { text: "밀키스 냄새", type: "pervert" },
            { text: "고양이 털냄새", type: "angel" },
            { text: "똥꼬냄새", type: "evil" }
        ]
    },
    {
        question: "똥에 대한 솔직한 의견",
        options: [
            { text: "너무 좋아요 없어지면 죽을거예요", type: ["chaos", "evil"] },
            { text: "리스펙은 해요", type: "angel" },
            { text: "솔직히 부족해요 더 많았으면 해요", type: "pervert" }
        ]
    },
    {
        question: "나의 2025년을 가장 잘 나타내는 칵테일",
        options: [
            { text: "블러디 메리 (짭잘하고 감칠맛 도는 토마토 칵테일)", type: "chaos" },
            { text: "피나콜라다 (파인애플과 코코넛이 섞인 달달한 칵테일)", type: "pervert" },
            { text: "술 안마셔요", type: "angel" },
            { text: "맥주", type: "evil" }
        ]
    },
    {
        question: "2025년 나는 절에서...",
        options: [
            { text: "절 뭐 어쩌라고", type: "chaos" },
            { text: "절에 집착했다", type: "pervert" },
            { text: "많이 접속하려고 노력했다", type: "angel" },
            { text: "절 뭐 어쩌라고", type: "evil" }
        ]
    },
    {
        question: "c, u, m. 해당 알파벳을 보고 떠올린 것은?",
        options: [
            { text: "알파벳 뭐 어쩌라고", type: "chaos" },
            { text: "워터 화이트", type: "pervert" },
            { text: "Chu♡ Under the Mistletoe", type: "angel" },
            { text: "알파벳 뭐 어쩌라고", type: "evil" }
        ]
    },
    {
        question: "2025년을 보내며 주지스님에게 한마디",
        type: "input"
    },
    {
        question: "2026년 나의 다짐은?",
        options: [
            { text: "절에 더 많이 접속하겠다", type: "chaos" },
            { text: "절에 더 많이 접속하겠다", type: "pervert" },
            { text: "절에 더 많이 접속하겠다", type: "angel" },
            { text: "절에 더 많이 접속하겠다", type: "evil" }
        ]
    },
    {
        question: "애인과 친구와 함께 깻잎보쌈집에 갔다. 그런데\n친구가 깻잎을 혼자서 떼지 못해서 애쓰고 있다. 근데 하필\n깻잎집 이름은 깻잎과 연인, 즉 누군가의 깻잎을 뗴어주는 순간\n하늘에서 장미꽃이 내리며 키스를 해야만 한다. 키스 안하면\n9000억을 내야만 하는게 법률이다. 이때 당신의 선택은?",
        options: [
            { text: "그딴거 때려쳐", type: "chaos" },
            { text: "이제부터 내 애인은 두명", type: "pervert" },
            { text: "다이너마이트 던져서 식당 터뜨린다 존재해서는 안된다 이딴식당", type: "angel" },
            { text: "9천억 내고 키스 안한다", type: "evil" }
        ]
    }
];

// 타입별 이미지 매핑
const typeImages = {
    "몬스터주식회사 동자승": "images/1_몬스터주식회사.png",
    "음란 동자승": "images/2_음란.png",
    "예쁜이 동자승": "images/3_예쁜이.png",
    "월터화이트 동자승": "images/4_월터화이트.png",
    "주지스님의 애제자": "images/5_주지스님의애제자.png",
    "똥": "images/6_똥.png",
    "배치기 동자승": "images/7_배치기.png",
    "쥐": "images/8_쥐.png",
    "유튜버 동자승": "images/9_유튜버.png",
    "절에사는 절냥이": "images/10_절냥이.png"
};

// 결과 데이터
const results = {
    "몬스터주식회사 동자승": {
        content: "당신은 몬스터주식회사 동자승입니다.\n항상 몬스터력을 뽐내며 주변에 혼돈을 가져옵니다.\n당신의 몬스터력으로 타인을 쉽게 공포로 몰아넣을 수 있으니 조심하세요.\n주변인들은 당신이 오면 '몬스터 녀석이 온다' 라며 바지에 오줌을 지립니다.\n2026년, 두바이 쫀득 라부부 말차 쿠키가 찾아올 가능성이 높습니다.",
        message: "마음이 슬프면 하늘을 보고 마음이 아프면 발밑을 보라"
    },
    "음란 동자승": {
        content: "당신은 음란 동자승입니다.\n항상 변을 탐하는 당신은 음탕하기로 소문났습니다.\n특유의 변태적인 상상력으로 그 어떤 건전한 요소가 주어져도\n그걸 가장 음란한 비유로 탈바꿈시키는 능력을 가졌습니다.\n주변인들은 당신이 오면 '오늘 내 정조를 지키기엔 틀렸어' 라며 체념합니다.\n2026년, 가장 순수한 형태의 사랑이 찾아올 가능성이 높습니다.",
        message: "손에는 그 사람의 인생이 담겨있다"
    },
    "예쁜이 동자승": {
        content: "당신은 예쁜이 동자승입니다.\n언제나 사랑스럽고 순수한 당신은 모두의 예쁨을 받습니다.\n새하얀 눈 밭을 뛰노는 새하얀 아기토끼처럼 순수한 당신...\n주변인들은 감히 당신을 물들이지 못합니다. 오히려 당신의 순수함이\n주변인들에게 바르게 살 영감을 줄 정도이죠. 모두의 사랑을 받습니다.\n2026년, 영혼의 깨우침을 줄 책을 만날 가능성이 높습니다.",
        message: "춤추는 작은 까탈레나"
    },
    "월터화이트 동자승": {
        content: "세이. 마이. 네임.\n당신은 월터화이트 동자승입니다.\n가장 깊은 지옥에서 올라온 괴물\n지옥으로 꺼져",
        message: "꺼져"
    },
    "주지스님의 애제자": {
        content: "당신은 주지스님의 애제자입니다.\n재치있는 농담과 귀여운 애교로 주지스님의 마음을 홀랑 훔쳐갔군요.\n하하하 돌려줘\n돌려주라고",
        message: "돌려달라고"
    },
    "똥": {
        content: "당신은 똥입니다.\n적당히 단단하고 모양잡힌 똥이군요.\n일반인들은 냄새에 코를 막고 가지만 절에서는 좀 다릅니다.\n절의 동자승들의 다른 이름은 똥자승, 즉 똥에 미쳐있죠.\n절에서 당신은 최고의 인기를 누립니다. 동자승들은\n당신의 풍부한 바디에 입을 맞추지 못해 정신이 나갔습니다.\n2026년, 퍼리 아트에 투자하십시오",
        message: "두바이 초코 라부부"
    },
    "배치기 동자승": {
        content: "배 그만쳐",
        message: "배 그만쳐"
    },
    "쥐": {
        content: "당신은 쥐입니다. 가끔 눈이 도르륵 빠져나올 정도로\n보글링을 하고 잘때는 딱딱 이를 갈며 발에는 기다란 코가 채이는\n당신은 쥐 입니다.\n축축하고 냄새나는 하수구가 당신의 고향...\n깨닳음을 얻기 위해 절로 떠나온 쥐는 고향과 멀어질수록\n시큰거리는 악취가 그리워 울었지만 그럴수록 자신이 선명해지는 경험을 하게 됩니다.\n2026년, 쥐는 자신 안의 진리와 행복을 마주하게 됩니다.",
        message: "마라탕을 멀리하라"
    },
    "유튜버 동자승": {
        content: "당신은 유튜버 동자승입니다.\n칼날비 탑유미와 헬리아의 메아리 바이서폿 등\n온갖 기괴한 픽으로 어그로 끌기에 통달한 당신\n유튜브를 한번 해보세요\n성공할거예요",
        message: "명예에 눈이 멀지 마라"
    },
    "절에사는 절냥이": {
        content: "당신은 절에사는 절냥이입니다.\n털이 보들보들하고 배도크고\n너무너무 귀엽네요...\n2026년, 고양이가 될 수 있습니다\n생선 많이 먹을수록 진짜 고양이가 될 확률이 높아집니다",
        message: "(턱을 긁어줌)"
    }
};

// 게임 상태
let currentQuestion = 0;
let scores = {
    chaos: 0,
    pervert: 0,
    angel: 0,
    evil: 0
};
let userInput = "";

// 테스트 시작
function startTest() {
    currentQuestion = 0;
    scores = { chaos: 0, pervert: 0, angel: 0, evil: 0 };
    userInput = "";

    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');

    showQuestion();
}

// 질문 표시
function showQuestion() {
    const q = questions[currentQuestion];
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById('progress-bar').style.width = progressPercent + '%';
    document.getElementById('current-q').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = q.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    if (q.type === 'input') {
        // 입력형 질문
        const input = document.createElement('textarea');
        input.className = 'input-box';
        input.placeholder = '주지스님에게 하고 싶은 말을 입력하세요...';
        input.rows = 4;

        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary';
        submitBtn.textContent = '다음';
        submitBtn.onclick = function() {
            userInput = input.value || '...';

            // 글자수에 따른 점수 계산
            const length = userInput.length;
            if (length >= 20) scores.pervert++;
            if (length >= 10) scores.angel++;
            if (length < 10) scores.chaos++;
            if (length < 5) scores.evil++;

            nextQuestion();
        };

        optionsContainer.appendChild(input);
        optionsContainer.appendChild(submitBtn);
    } else {
        // 선택형 질문
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.text;
            btn.onclick = function() {
                selectOption(option.type);
            };
            optionsContainer.appendChild(btn);
        });
    }
}

// 옵션 선택
function selectOption(type) {
    if (Array.isArray(type)) {
        // 복수 타입 (문항 4)
        type.forEach(t => scores[t]++);
    } else {
        scores[type]++;
    }

    nextQuestion();
}

// 다음 질문
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과 계산
function calculateResult() {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    const firstScore = sorted[0][1];
    const secondScore = sorted[1][1];
    const thirdScore = sorted[2][1];

    // 3개 이상 동점이면 "똥"
    if (firstScore === secondScore && secondScore === thirdScore) {
        return "똥";
    }

    const first = sorted[0][0];
    const second = sorted[1][0];
    const diff = firstScore - secondScore;

    // 차이가 1개 이하면 복합 타입
    if (diff <= 1) {
        return getCombinedType(first, second);
    } else if (diff >= 2) {
        return getSingleType(first);
    } else {
        return "똥";
    }
}

// 단일 타입
function getSingleType(type) {
    const singleTypes = {
        chaos: "몬스터주식회사 동자승",
        pervert: "음란 동자승",
        angel: "예쁜이 동자승",
        evil: "월터화이트 동자승"
    };
    return singleTypes[type] || "똥";
}

// 복합 타입
function getCombinedType(type1, type2) {
    const key1 = `${type1}+${type2}`;
    const key2 = `${type2}+${type1}`;

    const combinedTypes = {
        'chaos+pervert': "주지스님의 애제자",
        'pervert+chaos': "주지스님의 애제자",
        'chaos+evil': "똥",
        'evil+chaos': "똥",
        'pervert+evil': "배치기 동자승",
        'evil+pervert': "배치기 동자승",
        'pervert+angel': "쥐",
        'angel+pervert': "쥐",
        'chaos+angel': "유튜버 동자승",
        'angel+chaos': "유튜버 동자승",
        'angel+evil': "절에사는 절냥이",
        'evil+angel': "절에사는 절냥이"
    };

    return combinedTypes[key1] || combinedTypes[key2] || "똥";
}

// 결과 표시
function showResult() {
    const resultType = calculateResult();
    const resultData = results[resultType];

    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    // 결과 이미지 설정
    const resultImage = document.getElementById('result-image');
    resultImage.src = typeImages[resultType];

    document.getElementById('result-type').textContent = resultType;
    document.getElementById('result-type-name').textContent = resultType;
    document.getElementById('result-content').textContent = resultData.content;
    document.getElementById('user-input-display').textContent = `"${userInput}"`;
    document.getElementById('master-message').textContent = `"${resultData.message}"`;
}

// 테스트 재시작
function restartTest() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}

// 이미지로 저장
function saveAsImage() {
    const captureElement = document.getElementById('result-capture');

    html2canvas(captureElement, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        // Canvas를 이미지로 변환
        const link = document.createElement('a');
        link.download = '동자승_타입_테스트_결과.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error('이미지 저장 실패:', err);
        alert('이미지 저장에 실패했습니다. 다시 시도해주세요.');
    });
}

// 동자승 사전 표시
function showDictionary() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('dictionary-screen').classList.add('active');

    // 사전 그리드 생성
    const grid = document.getElementById('dictionary-grid');
    grid.innerHTML = '';

    Object.keys(results).forEach(type => {
        const card = document.createElement('div');
        card.className = 'dictionary-card';

        const img = document.createElement('img');
        img.src = typeImages[type];
        img.alt = type;
        img.className = 'dictionary-image';

        const title = document.createElement('h3');
        title.textContent = type;

        const content = document.createElement('p');
        content.textContent = results[type].content;

        const message = document.createElement('p');
        message.className = 'dictionary-message';
        message.textContent = `주지스님의 덕담: "${results[type].message}"`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(message);

        grid.appendChild(card);
    });
}

// 홈으로 돌아가기
function backToHome() {
    document.getElementById('dictionary-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}
