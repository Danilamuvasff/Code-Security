const CARDS = [
  {
    num: 1,
    title: "Код из СМС",
    accent: "#e74c3c",
    desc: "Фейковый «руководитель практики» просит срочно прислать код подтверждения. Та же схема работает от имени «банка», «полиции» и «деканата».",
    sections: [
      { label: "Ситуация", text: "В мессенджере пишет «руководитель практики»: «Срочно подтверди, что ты не мошенник, пришли код из СМС, иначе будет отчисление». Схема повторяется от имени «банка», «полиции» и «деканата»." },
      { label: "Признаки угрозы", text: "Давление: срочно, сейчас, иначе будет плохо. Просят код из СМС, пароль или деньги. Новый или незнакомый номер. Переписка только в мессенджере. Фото собеседника взято из интернета." },
      { label: "Что делать", text: "Никому и никогда не сообщать код из СМС, пароль, CVV и данные карты — даже «сотрудникам банка» и «преподавателям». Заблокировать отправителя, сохранить скриншот, рассказать куратору." },
      { label: "Как поступить этично", text: "Предупредить одногруппников о схеме в учебном чате, не пересылать сомнительные цепочки, не публиковать номер отправителя." },
      { label: "Куда обратиться", text: "Куратор или заместитель директора по воспитательной работе. При попытке кражи денег — банк и полиция. Горячая линия «Ребёнок в опасности» 8-800-2000-122 (до 18 лет)." }
    ]
  },
  {
    num: 2,
    title: "Фишинговое письмо",
    accent: "#e67e22",
    desc: "Письмо о блокировке учебной почты со ссылкой на поддельный сайт входа с опечаткой в адресе.",
    sections: [
      { label: "Ситуация", text: "На почту приходит письмо: «Вашу учебную почту заблокируют через 24 часа. Перейдите по ссылке и подтвердите аккаунт». Ссылка ведёт на сайт с опечаткой в адресе вида scholl-lms24.ru." },
      { label: "Признаки угрозы", text: "Опечатки и странный адрес отправителя. Паника и жёсткий срок. Ссылка ведёт не на официальный сайт. Просят ввести логин и пароль. Вложение «задолженность.pdf» — открывать нельзя." },
      { label: "Что делать", text: "Не кликать по ссылке и не открывать вложения. Навести курсор и посмотреть настоящий адрес. Открыть официальный сайт колледжа вручную через браузер. Сообщить в техническую поддержку." },
      { label: "Как поступить этично", text: "Сделать скриншот и предупредить группу и техподдержку. Не пересылать поддельное письмо «для смеха» в чат." },
      { label: "Куда обратиться", text: "IT-отдел или техническая поддержка колледжа. О фишинговом сайте можно сообщить через форму на gosuslugi.ru, а письмо от имени банка — в сам банк." }
    ]
  },
  {
    num: 3,
    title: "Утёк .env",
    accent: "#8e44ad",
    desc: "Случайно выложенные в публичный репозиторий пароли и токены. Боты ищут секреты в открытом коде автоматически.",
    sections: [
      { label: "Ситуация", text: "Студент залил учебный проект на GitHub и случайно выложил файл .env с паролем от базы данных и токеном доступа. Код публичный — его видит любой, а боты ищут утёкшие секреты сами." },
      { label: "Признаки угрозы", text: "В репозитории есть .env, конфиг с паролями, ключи и токены. История коммитов хранит все старые версии. Репозиторий публичный, а не private." },
      { label: "Что делать", text: "Немедленно сменить и отозвать все пароли и токены из утёкшего файла. Удалить файл и вычистить историю коммитов (git filter-repo или BFG). Внести .env в .gitignore. Хранить секреты в GitHub Secrets." },
      { label: "Как поступить этично", text: "Честно сообщить команде и преподавателю об утечке, а не прятать проблему. Использовать чужие библиотеки только с учётом лицензии и ссылкой на автора." },
      { label: "Куда обратиться", text: "Преподаватель или руководитель проекта. Документация GitHub по безопасности. Если утёк чужой ключ — предупредить владельца сервиса." }
    ]
  },
  {
    num: 4,
    title: "Дипфейк и фейки",
    accent: "#16a085",
    desc: "Поддельное видео или новость от имени директора с требованием перевести деньги.",
    sections: [
      { label: "Ситуация", text: "В соцсети расходится ролик: голосом и лицом директора «объявляют», что колледж закрывают и нужно перевести деньги на новые реквизиты. Голос и лицо подделаны с помощью ИИ — это дипфейк." },
      { label: "Признаки угрозы", text: "Необычная срочность и требование денег. Официальные страницы и новости молчат. Источник — неизвестный паблик. На видео артефакты: моргание, звук и мимика выглядят неестественно." },
      { label: "Что делать", text: "Не пересылать ролик. Проверить новость на официальных страницах колледжа. Использовать обратный поиск картинки. Задать вопрос в официальном чате колледжа." },
      { label: "Как поступить этично", text: "Не распространять непроверенную информацию и не подогревать панику. Вежливо поправить того, кто переслал, — дать ссылку на официальный источник, без насмешек." },
      { label: "Куда обратиться", text: "Пресс-служба и официальные страницы колледжа. О фейках можно сообщить через официальные каналы. Горячая линия «Ребёнок в опасности» 8-800-2000-122." }
    ]
  },
  {
    num: 5,
    title: "Слили личное фото",
    accent: "#2980b9",
    desc: "Публикация личного фото или переписки без согласия и обсуждение в общем чате.",
    sections: [
      { label: "Ситуация", text: "Одногруппник без разрешения выкладывает в общий чат личное фото с вечеринки и подписывает насмешкой. Фото начинает расходиться по чатам." },
      { label: "Признаки угрозы", text: "Фото или переписка опубликованы без согласия. Комментарии оскорбительные. Автор не отвечает на просьбу удалить. Контент копируют и пересылают дальше." },
      { label: "Что делать", text: "Не отвечать агрессией. Письменно попросить автора удалить публикацию. Если не помогло — куратор, администрация колледжа и жалоба на контент в соцсети. Личные фото и переписка не должны попадать в открытый доступ." },
      { label: "Как поступить этично", text: "Всегда спрашивать разрешение перед публикацией фото другого человека. По просьбе удалять публикацию сразу и без обид. Не делать скриншоты и не пересылать чужое фото дальше." },
      { label: "Куда обратиться", text: "Куратор и администрация колледжа. Служба поддержки соцсети — жалоба на нарушение. При угрозах — полиция. Роскомнадзор, если нарушаются персональные данные." }
    ]
  },
  {
    num: 6,
    title: "Травля в учебном чате",
    accent: "#34495e",
    desc: "Оскорбления и давление на одногруппника из-за ошибки в коде. Смешные реакции усиливают давление.",
    sections: [
      { label: "Ситуация", text: "В учебном чате участник оскорбляет одногруппника из-за ошибки в коде, остальные массово ставят смешные реакции. Жертва молчит, а потом уходит из чата." },
      { label: "Признаки угрозы", text: "Оскорбления и насмешки вместо конструктивной критики. Давление «все так считают». Жертва перестаёт отвечать и удаляется. Реакции-смех усиливают давление." },
      { label: "Что делать", text: "Не поддерживать травлю: не ставить реакции, не комментировать оскорбления. Поддержать человека в личном сообщении. Сообщить куратору. Сохранить скриншоты на случай жалобы." },
      { label: "Как поступить этично", text: "Спокойно остановить агрессию: «Давай обсудим ошибку по делу, это учебный чат». Помочь разобраться с ошибкой по существу. Если задел кого-то случайно — извиниться и удалить сообщение." },
      { label: "Куда обратиться", text: "Куратор группы или заместитель директора. Психолог образовательной организации. Горячая линия «Ребёнок в опасности» 8-800-2000-122." }
    ]
  },
  {
    num: 7,
    title: "Пароли и 2FA",
    accent: "#27ae60",
    desc: "Один пароль на всё и отсутствие двухфакторной защиты. Утёкшая база одного сервиса ведёт к взлому других.",
    sections: [
      { label: "Ситуация", text: "Студент пользуется одним паролем для Госуслуг, почты и игр. После утечки базы игрового сервиса злоумышленники проверяют этот пароль на всех сайтах, в том числе на серьёзных." },
      { label: "Признаки угрозы", text: "Одинаковый пароль везде. Пароль короткий: имя, дата рождения. Нет двухфакторной аутентификации. Пароль лежит в заметках телефона или на стикере." },
      { label: "Что делать", text: "Завести уникальные пароли для важных сервисов и хранить их в менеджере паролей. Включить 2FA в почте, соцсетях и на Госуслугах. Проверять утечки через сервис haveibeenpwned.com и сразу менять пароль." },
      { label: "Как поступить этично", text: "Не спрашивать пароли у одногруппников и не одалживать свои. Не сохранять чужие пароли в общих чатах или файлах группы." },
      { label: "Куда обратиться", text: "Специалист по информационной безопасности колледжа. Службы поддержки сервисов для восстановления доступа." }
    ]
  }
];

const CHECKLIST = [
  "У меня уникальные пароли для важных сервисов, а для почты, соцсетей и Госуслуг — разные.",
  "Я храню пароли в менеджере паролей, а не на стикерах и в заметках.",
  "Двухфакторная аутентификация включена: почта, соцсети, Госуслуги.",
  "Я не сообщаю коды из СМС и CVV даже «сотрудникам банка» и «деканату».",
  "Перед переходом по ссылке я проверяю настоящий адрес сайта.",
  "Мои репозитории чисты от секретов: .env в .gitignore, токены в GitHub Secrets.",
  "Настройки приватности проверены: профиль виден только тем, кому нужно.",
  "Я не публикую фото и переписку людей без их разрешения.",
  "Перед репостом новости я проверяю источник, дату и автора.",
  "Я знаю, куда обратиться за помощью: куратор, техподдержка, банк, полиция, горячая линия."
];

const QUIZ = [
  {
    q: "«Срочно пришли код из СМС — это руководитель практики». Твои действия?",
    options: [
      "Перешлю код, вдруг правда срочно.",
      "Позвоню руководителю по официальному номеру и уточню, но код никому не отправляю.",
      "Отправлю половину кода — так безопаснее.",
      "Проигнорирую — мне такие сообщения вообще не приходят."
    ],
    correct: 1,
    expl: "Коды из СМС и пароли никому не сообщают — даже «сотрудникам банка» и «преподавателям». Настоящие сотрудники коды не спрашивают. Уточнить можно только по официальному контакту."
  },
  {
    q: "Как проверить, что ссылка в письме безопасна?",
    options: [
      "Кликну и посмотрю, куда ведёт.",
      "Наведу курсор и посмотрю реальный адрес, а сайт открою вручную.",
      "Попрошу кликнуть одногруппника.",
      "Открою в режиме инкогнито — там безопасно."
    ],
    correct: 1,
    expl: "Режим инкогнито скрывает историю, но не защищает от фишинга. Настоящий адрес сайта видно до перехода, а официальные сайты лучше открывать вручную."
  },
  {
    q: "Что делать, если ты случайно выложил .env с паролями в открытый репозиторий?",
    options: [
      "Удалить файл — и всё.",
      "Удалить файл, сменить все «засветившиеся» пароли и токены и вычистить историю коммитов.",
      "Переименовать репозиторий.",
      "Ничего: GitHub защищён от ботов."
    ],
    correct: 1,
    expl: "История коммитов хранит старые версии, а боты автоматически ищут секреты в открытом коде. Поэтому все затронутые пароли и токены меняются и отзываются."
  },
  {
    q: "Одногруппник без спроса выложил твоё личное фото. Что делать?",
    options: [
      "Оскорбить его в ответ в том же чате.",
      "Попросить удалить публикацию; если откажет — куратор, администрация и жалоба в соцсети.",
      "Переслать всем его фото в отместку.",
      "Ничего не делать, само рассосётся."
    ],
    correct: 1,
    expl: "Агрессией ты опускаешься до его уровня. Публикация чужого фото без разрешения нарушает личные границы — сначала просьба удалить, потом помощь взрослых."
  },
  {
    q: "В учебном чате травят одногруппника за ошибку в коде. Твои действия?",
    options: [
      "Поставлю смешную реакцию, все же так делают.",
      "Промолчу, чтобы не выделяться.",
      "Предложу обсудить ошибку по делу, поддержу человека в личке и сообщу куратору.",
      "Напишу, что его отчислят при такой сдаче."
    ],
    correct: 2,
    expl: "Смешные реакции и молчание — тоже участие в буллинге. Конструктивная помощь по существу и поддержка останавливают травлю лучше любых «ответов» буллеру."
  }
];

const RESOURCES = [
  { title: "Цифровой ликбез", url: "https://digital-likbez.datalesson.ru/", desc: "Уроки цифровой грамотности и кибербезопасности" },
  { title: "Урок цифры", url: "https://урокцифры.рф/", desc: "Всероссийский образовательный проект" },
  { title: "Финансовая культура", url: "https://fincult.info/", desc: "Банк России: мошенничество и пирамиды" },
  { title: "Госуслуги", url: "https://www.gosuslugi.ru/", desc: "Официальный портал, восстановление доступа" },
  { title: "Персональные данные. Дети", url: "https://персональныеданные.дети/", desc: "Роскомнадзор о защите личных данных" },
  { title: "Лаборатория Касперского", url: "https://kids.kaspersky.ru/", desc: "Материалы по цифровой безопасности" },
  { title: "МВД России", url: "https://mvd.ru/", desc: "Памятки о кибермошенничестве" },
  { title: "Ребёнок в опасности", url: "https://sledcom.ru/", desc: "Горячая линия 8-800-2000-122 (до 18 лет)" }
];

const cardGrid = document.getElementById("cardsGrid");
const checkList = document.getElementById("checkList");
const checkBar = document.getElementById("checkBar");
const checkCount = document.getElementById("checkCount");
const checkScore = document.getElementById("checkScore");
const quizStage = document.getElementById("quizStage");
const quizBar = document.getElementById("quizBar");
const cardModalEl = document.getElementById("cardModal");
const cardModalTitle = document.getElementById("cardModalTitle");
const cardModalBody = document.getElementById("cardModalBody");

function renderCards() {
  cardGrid.innerHTML = "";
  CARDS.forEach((c) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    const card = document.createElement("article");
    card.className = "situation-card";
    card.style.borderLeftColor = c.accent;
    card.innerHTML =
      '<div class="situation-num">' + String(c.num).padStart(2, "0") + "</div>" +
      '<h3 class="situation-title">' + c.title + "</h3>" +
      '<p class="situation-text">' + c.desc + "</p>" +
      '<button class="btn situation-btn" type="button" data-card="' + (c.num - 1) + '">Подробнее</button>';
    col.appendChild(card);
    cardGrid.appendChild(col);
  });
}

function openCard(num) {
  const c = CARDS[num];
  cardModalTitle.textContent = "Карточка №" + c.num + ". " + c.title;
  cardModalTitle.style.color = c.accent;
  cardModalBody.innerHTML = "";
  c.sections.forEach((s) => {
    const block = document.createElement("div");
    block.className = "detail-block";
    const label = document.createElement("div");
    label.className = "detail-label";
    label.style.color = c.accent;
    label.textContent = s.label;
    const text = document.createElement("div");
    text.className = "detail-text";
    text.textContent = s.text;
    block.appendChild(label);
    block.appendChild(text);
    cardModalBody.appendChild(block);
  });
  bootstrap.Modal.getOrCreateInstance(cardModalEl).show();
}

cardGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".situation-btn");
  if (btn) openCard(parseInt(btn.dataset.card, 10));
});

function renderChecklist() {
  checkList.innerHTML = "";
  CHECKLIST.forEach((item, i) => {
    const label = document.createElement("label");
    label.className = "check-item";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "form-check-input";
    input.id = "chk" + i;
    input.addEventListener("change", upChecklist);
    const span = document.createElement("span");
    span.className = "check-item-label";
    span.textContent = item;
    label.appendChild(input);
    label.appendChild(span);
    checkList.appendChild(label);
  });
}

function upChecklist() {
  const boxes = document.querySelectorAll(".check-item .form-check-input");
  const done = Array.from(boxes).filter((b) => b.checked).length;
  const total = boxes.length;
  boxes.forEach((b) => {
    b.closest(".check-item").classList.toggle("done", b.checked);
  });
  checkBar.style.width = Math.round((done / total) * 100) + "%";
  checkBar.setAttribute("aria-valuenow", String(done));
  checkCount.textContent = "Отмечено: " + done + " из " + total;
  checkScore.textContent = Math.round((done / total) * 100) + "%";
}

let quizIndex = 0;
let quizScore = 0;
let quizPicked = -1;

function renderQuizIntro() {
  quizIndex = 0;
  quizScore = 0;
  quizBar.style.width = "0%";
  quizStage.innerHTML =
    '<p class="quiz-question">Привет! Это интерактивная версия квиза из продукта «Код безопасности».</p>' +
    '<p class="quiz-info">Выбери правильный ответ в каждой из пяти ситуаций. После ответа появится разбор, в конце — результат.</p>' +
    '<button class="btn quiz-btn" onclick="startQuiz()">Начать квиз</button>';
}

function startQuiz() {
  renderQuizQuestion();
}

function renderQuizQuestion() {
  quizPicked = -1;
  const item = QUIZ[quizIndex];
  quizBar.style.width = Math.round((quizIndex / QUIZ.length) * 100) + "%";
  quizStage.innerHTML =
    '<p class="quiz-info">Вопрос ' + (quizIndex + 1) + " из " + QUIZ.length + "</p>" +
    '<p class="quiz-question">' + item.q + "</p>" +
    '<div id="quizOpts"></div>' +
    '<div id="quizExplain" class="quiz-explain" style="display:none"></div>' +
    '<button class="btn quiz-btn" id="quizNext" disabled>Дальше</button>';
  const optsBox = document.getElementById("quizOpts");
  item.options.forEach((o, i) => {
    const b = document.createElement("button");
    b.className = "quiz-opt";
    b.textContent = (i + 1) + ". " + o;
    b.addEventListener("click", () => quizPick(i, b));
    optsBox.appendChild(b);
  });
  document.getElementById("quizNext").addEventListener("click", quizNext);
}

function quizPick(i, btn) {
  if (quizPicked !== -1) return;
  quizPicked = i;
  const item = QUIZ[quizIndex];
  document.querySelectorAll(".quiz-opt").forEach((b, j) => {
    b.disabled = true;
    if (j === item.correct) b.classList.add("correct");
    if (j === i && i !== item.correct) b.classList.add("wrong");
  });
  if (i === item.correct) quizScore++;
  const ex = document.getElementById("quizExplain");
  ex.textContent = (i === item.correct ? "Верно. " : "Не совсем. ") + item.expl;
  ex.style.display = "block";
  document.getElementById("quizNext").disabled = false;
  quizBar.style.width = Math.round(((quizIndex + 1) / QUIZ.length) * 100) + "%";
}

function quizNext() {
  quizIndex++;
  if (quizIndex < QUIZ.length) {
    renderQuizQuestion();
  } else {
    renderQuizResult();
  }
}

function renderQuizResult() {
  quizBar.style.width = "100%";
  const pct = Math.round((quizScore / QUIZ.length) * 100);
  const stars = quizScore >= 4 ? "&#9733;&#9733;&#9733;&#9733;" : quizScore >= 2 ? "&#9733;&#9733;&#9733;" : "&#9733;&#9733;";
  let msg;
  if (quizScore === 5) msg = "Отлично! Ты — цифровой защитник. Поделись квизом с друзьями.";
  else if (quizScore === 4) msg = "Очень хорошо! Осталось укрепить один-два навыка.";
  else if (quizScore === 3) msg = "Неплохо, но стоит перечитать карточки и чек-лист ещё раз.";
  else msg = "Есть над чем поработать. Вернись к карточкам «Код безопасности» и попробуй снова!";
  let review = "";
  QUIZ.forEach((item, i) => {
    review += "<p><b>" + (i + 1) + ". " + item.q + "</b><br>" + item.expl + "</p>";
  });
  quizStage.innerHTML =
    '<div class="quiz-stars">' + stars + "</div>" +
    '<div class="quiz-score">' + quizScore + " из " + QUIZ.length + "</div>" +
    '<p class="quiz-message">' + msg + "</p>" +
    '<div class="quiz-review">' + review + "</div>" +
    '<button class="quiz-restart" onclick="renderQuizIntro()">Пройти ещё раз</button>';
}

function renderResources() {
  const grid = document.getElementById("resourcesGrid");
  grid.innerHTML = "";
  RESOURCES.forEach((r) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";
    col.innerHTML =
      '<div class="resource-card">' +
      '<h4 class="resource-title">' + r.title + "</h4>" +
      "<p>" + r.desc + "</p>" +
      '<a href="' + r.url + '" target="_blank" rel="noopener">Перейти на сайт</a>' +
      "</div>";
    grid.appendChild(col);
  });
}

window.addEventListener("scroll", () => {
  document.getElementById("mainNav").classList.toggle("scrolled", window.scrollY > 40);
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("kb-theme", next);
});

renderCards();
renderChecklist();
renderQuizIntro();
renderResources();