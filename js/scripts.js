
            // Константа для контроля отладки
            const DEBUG = false; // Отключено для продакшена

            /**
             * Функция форматирования чисел с точками
             * @param {number} num - Число для форматирования
             * @returns {string} - Отформатированное число
             */
            function formatPrice(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }

            // Функция нормализации строк (убирает пробелы и приводит к нижнему регистру)
            function normalizeString(str) {
                if (!str) return "";
                return str.trim().toLowerCase().replace(/\s+/g, "");
            }

            // Пользователи
            const users = [
                { login: "admin", password: "Admin#2024" },
                { login: "Manager1", password: "Mng2#Strong1" },
                { login: "Manager2", password: "Mng2#Strong" },
                { login: "Manager3", password: "Mng3!Complex" },
                { login: "Manager4", password: "Mng4#Robust" },
                { login: "Manager5", password: "Mng5!Power" },
                { login: "Manager6", password: "Mng6#Safety" },
                { login: "Manager7", password: "Mng7!Stable" },
                { login: "Manager8", password: "Mng8#Access" },
                { login: "Manager9", password: "Mng9!Control" },
                { login: "Manager10", password: "Mng10#Secure" }
            ];

            // Приоритеты форм (чем меньше число, тем выше в списке)
            const formPriority = {
                "Арочная": 1,
                "Каплевидная": 2,
                "Прямостенная": 3,
                "Домиком": 4,
                "Пристенная": 5,
                "Митлайдер арочная": 6,
                "Митлайдер прямостенная": 7,
                "Промышленная прямостенная": 8,
                "Промышленная домиком": 9,
                "Навес": 10,
                "Прочие": 11
            };

            // Массив регионов доставки с ключевыми словами
const deliveryRegions = [
    { keywords: ["москва", "msk", "московская область"] },
    { keywords: ["санкт-петербург", "spb", "питер", "ленинградская область"] },
    { keywords: ["белгород", "belgorod", "белгородская область"] },
    { keywords: ["великий новгород", "новгород", "новгородская область"] },
    { keywords: ["владимир", "vladimir", "владимирская область"] },
    { keywords: ["вологда", "vologda", "вологодская область"] },
    { keywords: ["воронеж", "voronezh", "воронежская область"] },
    { keywords: ["екатеринбург", "ekaterinburg", "свердловская область"] },
    { keywords: ["иваново", "ivanovo", "ивановская область"] },
    { keywords: ["йошкар-ола", "yoshkar-ola", "марий эл", "республика марий эл"] },
    { keywords: ["казань", "kazan", "татарстан", "республика татарстан"] },
    { keywords: ["калуга", "kaluga", "калужская область"] },
    { keywords: ["кемерово", "kemerovo", "кемеровская область", "кузбасс"] },
    { keywords: ["кострома", "kostroma", "костромская область"] },
    { keywords: ["краснодар", "krasnodar", "краснодарский край", "кубань"] },
    { keywords: ["курск", "kursk", "курская область"] },
    { keywords: ["липецк", "lipetsk", "липецкая область"] },
    { keywords: ["майкоп", "maykop", "адыгея", "республика адыгея"] },
    { keywords: ["набережные челны", "nab-chelny", "челны", "республика татарстан"] },
    { keywords: ["нижний новгород", "nizh-novgorod", "нн", "нижегородская область"] },
    { keywords: ["новосибирск", "novosibirsk", "новосибирская область"] },
    { keywords: ["орел", "orel", "орловская область"] },
    { keywords: ["рязань", "ryazan", "рязанская область"] },
    { keywords: ["ставрополь", "stavropol", "ставропольский край"] },
    { keywords: ["тамбов", "tambov", "тамбовская область"] },
    { keywords: ["тверь", "tver", "тверская область"] },
    { keywords: ["тула", "tula", "тульская область"] },
    { keywords: ["ульяновск", "ulyanovsk", "ульяновская область"] },
    { keywords: ["чебоксары", "cheboksary", "чувашия", "республика чувашия"] },
    { keywords: ["челябинск", "chelyabinsk", "челябинская область"] },
    { keywords: ["черкесск", "cherkessk", "карачай-черкесия", "карачаево-черкесская республика"] },
    { keywords: ["ярославль", "yaroslavl", "ярославская область"] }
];

            // Города для карты
            const citiesForMap = [
                { name: "Москва", coords: [55.751244, 37.618423], boundaryDistance: 20 },
                { name: "Санкт-Петербург", coords: [59.934280, 30.335099], boundaryDistance: 20 },
                { name: "Белгород", coords: [50.597735, 36.585823], boundaryDistance: 10 },
                { name: "Великий Новгород", coords: [58.521400, 31.275505], boundaryDistance: 10 },
                { name: "Владимир", coords: [56.129057, 40.407031], boundaryDistance: 12 },
                { name: "Вологда", coords: [59.220492, 39.891568], boundaryDistance: 10 },
                { name: "Воронеж", coords: [51.661535, 39.200287], boundaryDistance: 15 },
                { name: "Екатеринбург", coords: [56.838926, 60.605703], boundaryDistance: 15 },
                { name: "Иваново", coords: [57.000348, 40.973921], boundaryDistance: 12 },
                { name: "Йошкар-Ола", coords: [56.634431, 47.899888], boundaryDistance: 12 },
                { name: "Казань", coords: [55.796391, 49.108891], boundaryDistance: 15 },
                { name: "Калуга", coords: [54.506043, 36.251593], boundaryDistance: 12 },
                { name: "Кемерово", coords: [55.354968, 86.087314], boundaryDistance: 15 },
                { name: "Кострома", coords: [57.767961, 40.926858], boundaryDistance: 10 },
                { name: "Краснодар", coords: [45.035470, 38.975313], boundaryDistance: 12 },
                { name: "Курск", coords: [51.730361, 36.192647], boundaryDistance: 10 },
                { name: "Липецк", coords: [52.610150, 39.594180], boundaryDistance: 12 },
                { name: "Майкоп", coords: [44.607782, 40.105690], boundaryDistance: 10 },
                { name: "Набережные Челны", coords: [55.727110, 52.404913], boundaryDistance: 12 },
                { name: "Нижний Новгород", coords: [56.296504, 43.936059], boundaryDistance: 15 },
                { name: "Новосибирск", coords: [55.008352, 82.935733], boundaryDistance: 15 },
                { name: "Орёл", coords: [52.967257, 36.069647], boundaryDistance: 10 },
                { name: "Рязань", coords: [54.629704, 39.741146], boundaryDistance: 12 },
                { name: "Ставрополь", coords: [45.044838, 41.969230], boundaryDistance: 10 },
                { name: "Тамбов", coords: [52.721219, 41.452274], boundaryDistance: 10 },
                { name: "Тверь", coords: [56.858539, 35.917596], boundaryDistance: 12 },
                { name: "Тула", coords: [54.193122, 37.617348], boundaryDistance: 12 },
                { name: "Ульяновск", coords: [54.316685, 48.403123], boundaryDistance: 12 },
                { name: "Чебоксары", coords: [56.146223, 47.251931], boundaryDistance: 12 },
                { name: "Челябинск", coords: [55.164442, 61.436843], boundaryDistance: 15 },
                { name: "Черкесск", coords: [44.226863, 42.046782], boundaryDistance: 10 },
                { name: "Ярославль", coords: [57.626559, 39.893813], boundaryDistance: 10 }
            ];

            // Дополнительные услуги данные
            const additionalServicesData = {
                "Брус": {
                    price_by_length: {
                        4: 4790,
                        6: 6290,
                        8: 7790,
                        10: 9290,
                        12: 10790,
                        14: 12290,
                        16: 13790
                    }
                },
                "Штыри": {
                    price_per_unit: 249,
                    quantity_by_length: {
                        "without_bracing": { "4": 10, "6": 14, "8": 18, "10": 22, "12": 26, "14": 30, "16": 34 },
                        "with_bracing": { "4": 6, "6": 10, "8": 14, "10": 18, "12": 22, "14": 26, "16": 30 }
                    }
                }
                // Сборка теперь обрабатывается через assemblyPrices
            };

            // Структура данных для сборки теплиц
            const assemblyPrices = {
                "Арочная": {
                    "2.5М": { 4: 4990, 6: 6490, 8: 7990, 10: 9490, 12: 11990 },
                    "3М": { 4: 4990, 6: 6490, 8: 7990, 10: 9490, 12: 11990 },
                    "3.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "4М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 }
                },
                "Каплевидная": {
                    "2.5М": { 4: 4990, 6: 6490, 8: 7990, 10: 9490, 12: 11990 },
                    "3М": { 4: 4990, 6: 6490, 8: 7990, 10: 9490, 12: 11990 },
                    "3.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 }
                },
                "Прямостенная": {
                    "2.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "3М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "3.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "4М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 }
                },
                "Домиком": {
                    "2.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "3М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "3.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "4М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 }
                },
                "Пристенная": {
                    "2.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "3М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 }
                },
                "Митлайдер арочная": {
                    "3М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 },
                    "3.5М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 }
                },
                "Митлайдер прямостенная": {
                    "3М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 },
                    "3.5М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 }
                },
                "Промышленная прямостенная": {
                    "5М": { 4: 9990, 6: 14990, 8: 19990, 10: 24990, 12: 29990, 14: 34990, 16: 39990 },
                    "6М": { 4: 9990, 6: 14990, 8: 19990, 10: 24990, 12: 29990, 14: 34990, 16: 39990 }
                },
                "Промышленная домиком": {
                    "7М": { 4: 9990, 6: 14990, 8: 19990, 10: 24990, 12: 29990, 14: 34990, 16: 39990 },
                    "8М": { 4: 9990, 6: 14990, 8: 19990, 10: 24990, 12: 29990, 14: 34990, 16: 39990 }
                },
                "Навес": {
                    "3М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "3.5М": { 4: 5990, 6: 7990, 8: 9990, 10: 11990, 12: 13990 },
                    "4М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 },
                    "5М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 },
                    "6М": { 4: 7990, 6: 11490, 8: 14990, 10: 18490, 12: 22490 }
                }
            };

            // Определение доступных форм теплиц и их названий
            const availableForms = {
                "Арочная": [
                    { name: "ТЕПЛИЦА БОЯРСКАЯ 2.5М", frame: "20х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ 3М", frame: "20х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ЛЮКС 2.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ЛЮКС 3М", frame: "40х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ЛЮКС 3.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ДЕЛЮКС 2.5М", frame: "20х20+20х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ДЕЛЮКС 3М", frame: "20х20+20х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ПРЕМИУМ 2.5М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ПРЕМИУМ 3М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ПРЕМИУМ 3.5М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА БОЯРСКАЯ ПРЕМИУМ 4М", frame: "40х20+20х20" }
                ],
                "Каплевидная": [
                    { name: "ТЕПЛИЦА СТРЕЛЕЦКАЯ ЛЮКС 2.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА СТРЕЛЕЦКАЯ ЛЮКС 3М", frame: "40х20" },
                    { name: "ТЕПЛИЦА СТРЕЛЕЦКАЯ ЛЮКС 3.5М", frame: "40х20" }
                ],
                "Прямостенная": [
                    { name: "ТЕПЛИЦА ЦАРСКАЯ ЛЮКС 2.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ЦАРСКАЯ ЛЮКС 3М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ЦАРСКАЯ ЛЮКС 3.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ЦАРСКАЯ ПРЕМИУМ 2.5М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА ЦАРСКАЯ ПРЕМИУМ 3М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА ЦАРСКАЯ ПРЕМИУМ 3.5М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА ЦАРСКАЯ ПРЕМИУМ 4М", frame: "40х20+20х20" }
                ],
                "Домиком": [
                    { name: "ТЕПЛИЦА ДОМИК ЛЮКС 2.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ДОМИК ЛЮКС 3М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ДОМИК ЛЮКС 3.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ДОМИК ПРЕМИУМ 2.5М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА ДОМИК ПРЕМИУМ 3М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА ДОМИК ПРЕМИУМ 3.5М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА ДОМИК ПРЕМИУМ 4М", frame: "40х20+20х20" }
                ],
                "Пристенная": [
                    { name: "ТЕПЛИЦА ПРИСТЕННАЯ ЛЮКС 2.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ПРИСТЕННАЯ ЛЮКС 3М", frame: "40х20" },
                    { name: "ТЕПЛИЦА ПРИСТЕННАЯ ПРЕМИУМ 2.5М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА ПРИСТЕННАЯ ПРЕМИУМ 3М", frame: "40х20+20х20" }
                ],
                "Митлайдер арочная": [
                    { name: "ТЕПЛИЦА МИТЛАЙДЕР ЛЮКС 3М", frame: "40х20" },
                    { name: "ТЕПЛИЦА МИТЛАЙДЕР ЛЮКС 3.5М", frame: "40х20" },
                    { name: "ТЕПЛИЦА МИТЛАЙДЕР ПРЕМИУМ 3М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА МИТЛАЙДЕР ПРЕМИУМ 3.5М", frame: "40х20+20х20" }
                ],
                "Митлайдер прямостенная": [
                    { name: "ТЕПЛИЦА МИТЛАЙДЕР ЭЛИТ 3М", frame: "40х20+20х20" },
                    { name: "ТЕПЛИЦА МИТЛАЙДЕР ЭЛИТ 3.5М", frame: "40х20+20х20" }
                ],
                "Промышленная прямостенная": [
                    { name: "ТЕПЛИЦА ПРЕМЬЕР ПРЕМИУМ 5М", frame: "40х20+40х20" },
                    { name: "ТЕПЛИЦА ПРЕМЬЕР ПРЕМИУМ 6М", frame: "40х20+40х20" }
                ],
                "Промышленная домиком": [
                    { name: "ТЕПЛИЦА МОНАРХ ПРЕМИУМ 7М", frame: "40х20+40х20" },
                    { name: "ТЕПЛИЦА МОНАРХ ПРЕМИУМ 8М", frame: "40х20+40х20" }
                ],
                "Навес": [
                    { name: "НАВЕС ЛЮКС 3.5М", frame: "40х20+20х20" },
                    { name: "НАВЕС ЛЮКС 4М", frame: "40х20+20х20" },
                    { name: "НАВЕС ПРЕМИУМ 5М", frame: "40х20+40х20" },
                    { name: "НАВЕС ПРЕМИУМ 6М", frame: "40х20+40х20" }
                ]
            };

            // Создание обратной карты: form_name -> category
            const formNameToCategory = {};

            Object.keys(availableForms).forEach(category => {
                availableForms[category].forEach(form => {
                    formNameToCategory[normalizeString(form.name)] = category;
                });
            });

            // Функция определения категории на основе имени формы
            function getFormCategory(formName) {
                if (!formName || typeof formName !== "string") return "Прочие";
                const normalizedFormName = normalizeString(formName);
                const category = formNameToCategory[normalizedFormName];
                if (category) {
                    return category;
                } else {
                    return "Прочие";
                }
            }

            let currentCityData = []; // Данные для текущего города
            let deliveryCost = 0; // Стоимость доставки

          // Инициализация Supabase
            const SUPABASE_URL = 'https://dyoibmfdohpvjltfaygr.supabase.co';
            const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5b2libWZkb2hwdmpsdGZheWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5ODAxMzcsImV4cCI6MjA0OTU1NjEzN30.ZHj1JJsmSN45-0cv83uJDpaqtv3R6_U7CZmbkK-H24s'; // Ваш Anon Public Key

            const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

            let mapInstance;
            let currentRoute;

            ymaps.ready(() => {
                mapInstance = new ymaps.Map("map", {
                    center: [55.751244, 37.618423],
                    zoom: 7
                });

                // Инициализация SuggestView для автодополнения адреса
                // const suggestView = new ymaps.SuggestView('address'); // Удалено, т.к. мы используем собственные подсказки
            });

            // Функция аутентификации
            function authenticate() {
                const loginInput = document.getElementById("login");
                const passwordInput = document.getElementById("password");
                const authError = document.getElementById("auth-error");

                const login = loginInput.value.trim();
                const password = passwordInput.value.trim();

                // Проверяем логин и пароль
                const user = users.find(u => u.login === login && u.password === password);

                if (user) {
                    // Если пользователь найден, скрываем окно авторизации и показываем калькулятор
                    authError.style.display = "none";
                    localStorage.setItem('savedLogin', login); // Сохраняем логин
                    document.getElementById("auth-container").classList.add("hidden");
                    document.getElementById("calculator-container").classList.remove("hidden");
                    initializeCalculator();
                } else {
                    // Если пользователь не найден — показываем ошибку
                    authError.style.display = "block";
                }
            }

            // Функция выхода
            function logout() {
                const savedLogin = localStorage.getItem('savedLogin');
                localStorage.removeItem('savedLogin');
                document.getElementById("auth-container").classList.remove("hidden");
                document.getElementById("calculator-container").classList.add("hidden");
                // Сброс калькулятора при выходе
                resetDropdown('form', 'Сначала выберите город');
                resetDropdown('width', 'Сначала выберите форму');
                resetDropdown('length', 'Сначала выберите ширину');
                resetDropdown('frame', 'Сначала выберите длину');
                resetDropdown('polycarbonate', 'Сначала выберите город');
                resetDropdown('arcStep', 'Выберите шаг');
                resetAdditionalOptions();
                document.getElementById("commercial-offer").value = "Здесь будет ваше коммерческое предложение.";
                document.getElementById("result").innerText = "";
                if (mapInstance && currentRoute) {
                    mapInstance.geoObjects.remove(currentRoute);
                }
            }

            // Функция для загрузки городов из Supabase с учётом пагинации
            async function loadCities() {
                const pageSize = 1000; // Максимальное количество строк за один запрос
                let allCities = [];
                let page = 0;

                while (true) {
                    // Запрос данных с пагинацией
                    let { data, error } = await supabaseClient
                        .from('prices')
                        .select('city_name') // Запрашиваем города
                        .range(page * pageSize, (page + 1) * pageSize - 1); // Пагинация

                    if (error) {
                        console.error("Ошибка при загрузке городов из Supabase:", error);
                        return;
                    }

                    // Если данных на странице меньше, чем pageSize, значит, это последняя страница
                    if (data.length === 0) break;

                    // Добавляем города в общий массив
                    allCities = allCities.concat(data.map(item => item.city_name));
                    page++;
                }

                // Убираем дубликаты городов
                let uniqueCities = [...new Set(allCities)];

                // Приоритетные города
                const priorityCities = ["Москва", "Санкт-Петербург"];

                // Удаляем приоритетные города из основного списка
                uniqueCities = uniqueCities.filter(city => !priorityCities.includes(city));

                // Сортируем оставшиеся города по алфавиту
                uniqueCities.sort((a, b) => a.localeCompare(b, 'ru'));

                // Объединяем приоритетные города и отсортированные города
                const finalCities = [...priorityCities, ...uniqueCities];

                // Обновляем выпадающий список
                const cityDropdown = document.getElementById('city');
                cityDropdown.innerHTML = '<option value="" disabled selected>Выберите город</option>';

                finalCities.forEach(city => {
                    cityDropdown.innerHTML += `<option value="${city}">${city}</option>`;
                });
            }

            // Функция обработки изменения города
            async function onCityChange() {
                const city = document.getElementById('city').value;

                // Если город не выбран – сбрасываем все поля
                if (!city) {
                    resetDropdown('form', 'Сначала выберите город');
                    resetDropdown('width', 'Сначала выберите форму');
                    resetDropdown('length', 'Сначала выберите ширину');
                    resetDropdown('frame', 'Сначала выберите длину');
                    resetDropdown('arcStep', 'Выберите шаг');
                    resetDropdown('polycarbonate', 'Сначала выберите город');
                    resetAdditionalOptions();
                    return;
                }

                let { data, error } = await supabaseClient
                    .from('prices')
                    .select('form_name, polycarbonate_type, width, length, frame_description, price, snow_load, height, horizontal_ties, equipment') // Добавлены новые поля
                    .eq('city_name', city)
                    .limit(30000);

                if (error) {
                    console.error('Ошибка при получении данных по городу:', error);
                    return;
                }

                if (!data || data.length === 0) {
                    alert("Данные для выбранного города не найдены. Попробуйте другой город.");
                    return; // Остановить выполнение функции
                }

                // Присваиваем данные текущему городу
                currentCityData = data;

                // 1. Обновляем выпадающий список поликарбоната
                const polycarbonateDropdown = document.getElementById('polycarbonate');
                polycarbonateDropdown.innerHTML = '<option value="" disabled>Выберите поликарбонат</option>';

                // Упорядочиваем поликарбонат в порядке: Стандарт 4 мм / Люкс 4 мм / Премиум 6 мм / Без поликарбоната
                const rawPolys = currentCityData.map(g => g.polycarbonate_type).filter(Boolean);
                const uniquePoly = [...new Set(rawPolys)];
                const preferredOrder = ["Стандарт 4 мм", "Люкс 4 мм", "Премиум 6 мм", "Без поликарбоната"];

                // Сначала добавляем по порядку, если есть
                const orderedPolys = preferredOrder.filter(poly => uniquePoly.includes(poly));

                // Добавляем остальные в конец (если есть непредусмотренные значения)
                const extraPolys = uniquePoly.filter(poly => !preferredOrder.includes(poly));
                orderedPolys.push(...extraPolys);

                // Добавляем упорядоченные варианты
                orderedPolys.forEach(poly => {
                    const option = document.createElement('option');
                    option.value = poly;
                    option.textContent = poly;
                    polycarbonateDropdown.appendChild(option);
                });

                // Устанавливаем "Стандарт 4 мм" по умолчанию, если доступно
                if (uniquePoly.includes("Стандарт 4 мм")) {
                    polycarbonateDropdown.value = "Стандарт 4 мм";
                } else if (uniquePoly.length > 0) {
                    polycarbonateDropdown.value = orderedPolys[0]; // Выбираем первый доступный вариант
                }

                // 2. Фильтруем формы на основе availableForms
                const formCategories = Object.keys(availableForms);
                const formsAvailable = formCategories.filter(formType =>
                    currentCityData.some(item => availableForms[formType].some(form => normalizeString(item.form_name) === normalizeString(form.name)))
                );

                // Сортируем формы по приоритету
                formsAvailable.sort((a, b) => (formPriority[a] || 100) - (formPriority[b] || 100)); // Прочие формы получат низкий приоритет

                // 3. Обновляем выпадающий список форм теплиц
                const formDropdown = document.getElementById('form');
                formDropdown.innerHTML = '<option value="" disabled selected>Выберите форму</option>';

                formsAvailable.forEach(form => {
                    if (form && form !== "Прочие") {
                        const option = document.createElement('option');
                        option.value = form;
                        option.textContent = form;
                        formDropdown.appendChild(option);
                    }
                });

                // 4. Сбрасываем размеры и каркасы
                resetDropdown('width', 'Сначала выберите форму');
                resetDropdown('length', 'Сначала выберите ширину');
                resetDropdown('frame', 'Сначала выберите длину');
                resetDropdown('arcStep', 'Выберите шаг');

                // Сброс дополнительных опций
                resetAdditionalOptions();
            }

            // Функция обработки изменения формы
            function onFormChange() {
                const form = document.getElementById("form").value;

                const widthSelect = document.getElementById("width");
                widthSelect.innerHTML = '<option value="" disabled selected>Выберите ширину</option>';

                if (!form) {
                    return;
                }

                // Фильтруем данные по выбранной форме на основе availableForms
                const filteredData = currentCityData.filter(item => {
                    const category = getFormCategory(item.form_name);
                    return category === form;
                });

                // Проверка на пустые данные
                if (filteredData.length === 0) {
                    alert("Теплица с указанными параметрами не найдена. Попробуйте выбрать другие параметры.");
                    return;
                }

                // Получаем уникальные значения ширины
                const uniqueWidths = [...new Set(filteredData.map(item => item.width))].sort((a, b) => a - b);

                // Заполняем выпадающий список ширины
                uniqueWidths.forEach(width => {
                    widthSelect.innerHTML += `<option value="${width}">${formatPrice(width)} м</option>`;
                });

                // Сброс длины и каркасов
                resetDropdown('length', 'Сначала выберите ширину');
                resetDropdown('frame', 'Сначала выберите длину');
                resetDropdown('arcStep', 'Выберите шаг');

                // Сброс дополнительных опций
                resetAdditionalOptions();
            }

            // Функция обработки изменения ширины
            function onWidthChange() {
                const form = document.getElementById("form").value;
                const width = parseFloat(document.getElementById("width").value);

                const lengthSelect = document.getElementById("length");
                lengthSelect.innerHTML = '<option value="" disabled selected>Выберите длину</option>';

                if (isNaN(width)) {
                    return;
                }

                // Фильтруем данные по форме и ширине
                const filteredData = currentCityData.filter(item => {
                    const category = getFormCategory(item.form_name);
                    return category === form && parseFloat(item.width) === width;
                });

                // Проверка на пустые данные
                if (filteredData.length === 0) {
                    alert("Теплица с указанными параметрами не найдена. Попробуйте выбрать другие параметры.");
                    return;
                }

                // Получаем уникальные значения длины
                const uniqueLengths = [...new Set(filteredData.map(item => item.length))].sort((a, b) => a - b);

                // Заполняем выпадающий список длины
                uniqueLengths.forEach(length => {
                    lengthSelect.innerHTML += `<option value="${length}">${formatPrice(length)} м</option>`;
                });

                // Сброс каркаса и шага дуг
                resetDropdown('frame', 'Сначала выберите длину');
                resetDropdown('arcStep', 'Выберите шаг');

                // Сброс дополнительных опций
                resetAdditionalOptions();
            }

            // Функция обработки изменения длины
            function onLengthChange() {
                const form = document.getElementById("form").value;
                const width = parseFloat(document.getElementById("width").value);
                const length = parseFloat(document.getElementById("length").value);

                const frameSelect = document.getElementById("frame");
                frameSelect.innerHTML = '<option value="" disabled selected>Выберите каркас</option>';

                if (isNaN(length)) {
                    return;
                }

                // Фильтруем данные по форме, ширине и длине
                const filteredData = currentCityData.filter(item => {
                    const category = getFormCategory(item.form_name);
                    return category === form && parseFloat(item.width) === width && parseFloat(item.length) === length;
                });

                // Проверка на пустые данные
                if (filteredData.length === 0) {
                    alert("Теплица с указанными параметрами не найдена. Попробуйте выбрать другие параметры.");
                    return;
                }

                // Задаём порядок сортировки каркасов
                const frameOrder = ["20х20", "40х20", "20х20+20х20", "40х20+20х20", "40х20+40х20"];

                // Получаем уникальные значения каркаса
                let uniqueFrames = [...new Set(filteredData.map(item => {
                    let cleanDescription = item.frame_description.replace(/оцинкованная труба/gi, "").trim();
                    // Ищем комбинации:
                    const matches = cleanDescription.match(
                        /(20х20\s*\+\s*20х20|40х20\s*\+\s*20х20|40х20\s*\+\s*40х20|20х20|40х20)/gi);
                    return matches ? matches.join(",") : cleanDescription;
                }))];

                uniqueFrames = [...new Set(uniqueFrames.flatMap(f => f.split(",")))];

                uniqueFrames.sort((a, b) => {
                    const iA = frameOrder.indexOf(a.trim());
                    const iB = frameOrder.indexOf(b.trim());
                    if (iA === -1 && iB === -1) {
                        return a.localeCompare(b);
                    } else if (iA === -1) {
                        return 1;
                    } else if (iB === -1) {
                        return -1;
                    }
                    return iA - iB;
                });

                uniqueFrames.forEach(frame => {
                    frameSelect.innerHTML += `<option value="${frame.trim()}">${frame.trim()}</option>`;
                });

                // Сброс шага дуг
                resetDropdown('arcStep', 'Выберите шаг');

                // Сброс дополнительных опций
                resetAdditionalOptions();
            }

            // Функция обработки изменения каркаса
            function onFrameChange() {
                // Здесь вы можете добавить дополнительную логику, если требуется
                // Например, обновление шага дуг на основе выбранного каркаса
                resetDropdown('arcStep', 'Выберите шаг');
                resetAdditionalOptions();
            }

            // Функция сброса выпадающих списков
            function resetDropdown(elementId, placeholderText) {
                const dropdown = document.getElementById(elementId);
                if (dropdown) {
                    if (elementId === 'arcStep') {
                        dropdown.value = "1"; // Устанавливаем значение по умолчанию
                    } else if (elementId === 'polycarbonate') {
                        // Для поликарбоната устанавливаем "Стандарт 4 мм", если доступно
                        const options = dropdown.options;
                        let standardFound = false;
                        for (let i = 0; i < options.length; i++) {
                            if (normalizeString(options[i].text) === normalizeString("Стандарт 4 мм")) {
                                dropdown.selectedIndex = i;
                                standardFound = true;
                                break;
                            }
                        }
                        if (!standardFound && options.length > 1) {
                            dropdown.selectedIndex = 1; // Выбираем первый доступный вариант, если "Стандарт 4 мм" не найден
                        }
                    } else {
                        dropdown.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
                    }
                }
            }

            // Функция сброса дополнительных опций
            function resetAdditionalOptions() {
                const additionalProducts = document.querySelectorAll('.additional-products input[type="checkbox"]');
                additionalProducts.forEach(checkbox => {
                    if (checkbox) {
                        checkbox.checked = false;
                    }
                });

                const additionalServices = document.querySelectorAll('.additional-services input[type="checkbox"]');
                additionalServices.forEach(checkbox => {
                    if (checkbox) {
                        checkbox.checked = false;
                    }
                });
            }

            // Функция получения категории сборки на основе формы и ширины
            function getAssemblyCategory(form, width) {
                return `${width}М`;
            }

            // Функция расчёта стоимости сборки
            function calculateAssemblyCost(form, assemblyCategory, length) {
                if (!form || !assemblyPrices[form] || !assemblyPrices[form][assemblyCategory] || !assemblyPrices[form][assemblyCategory][length]) {
                    return 0;
                }
                const price = assemblyPrices[form][assemblyCategory][length];
                return price;
            }

            // Функция расчёта стоимости теплицы
            async function calculateGreenhouseCost(event = null) {
                const city = document.getElementById("city").value.trim();
                const form = document.getElementById("form").value.trim();
                const width = parseFloat(document.getElementById("width").value);
                const length = parseFloat(document.getElementById("length").value);
                const frame = document.getElementById("frame").value.trim();
                const polycarbonate = document.getElementById("polycarbonate").value.trim();
                const arcStep = parseFloat(document.getElementById("arcStep").value);

                // Проверка на заполнение всех обязательных полей
                const isFormComplete =
                    city && form && !isNaN(width) && !isNaN(length) && frame && polycarbonate && !isNaN(arcStep);

                // Если поля не заполнены, проверяем изменение поликарбоната
                const isPolycarbonateChange =
                    event && event.target && event.target.id === "polycarbonate";

                if (!isFormComplete) {
                    if (isPolycarbonateChange) {
                        return; // Не показываем alert при изменении поликарбоната
                    }

                    alert("Пожалуйста, заполните все обязательные поля.");
                    return;
                }

                // Фильтрация вручную для выбранной комбинации
                const selectedEntry = currentCityData.find(item => {
                    return (
                        getFormCategory(item.form_name) === form &&
                        parseFloat(item.width) === width &&
                        parseFloat(item.length) === length &&
                        normalizeString(item.frame_description).includes(normalizeString(frame)) &&
                        normalizeString(item.polycarbonate_type) === normalizeString(polycarbonate)
                    );
                });

                if (!selectedEntry) {
                    alert("Теплица с заданными параметрами не найдена.");
                    return;
                }

                let basePrice = 0; // Стоимость теплицы
                let assemblyCost = 0; // Стоимость сборки
                let foundationCost = 0; // Стоимость основания (брус)
                let additionalProductsCost = 0; // Стоимость дополнительных товаров
                let finalTotalPrice = 0; // Итоговая стоимость

                let basePriceText = "";
                let assemblyText = "";
                let foundationText = "";
                let additionalProductsText = "";
                let deliveryText = "";

                // Берём базовую цену
                basePrice = selectedEntry.price;
                basePriceText = `Стоимость с учетом скидки - ${formatPrice(basePrice)} рублей`;

                // 1) Вытаскиваем из базы текст, например "284 кг/м2"
                let originalSnowLoadText = selectedEntry.snow_load || "0 кг/м2";

                // 2) Извлекаем только число (например "284") для расчётов
                let rawSnowLoad = originalSnowLoadText.match(/\d+(\.\d+)?/); // Находим число
                let snowLoadNum = rawSnowLoad ? parseFloat(rawSnowLoad[0]) : 0; // Преобразуем в число

                if (isNaN(snowLoadNum)) {
                    snowLoadNum = 0;
                }

                // 3) Шаг дуг 0.65 м => +25% к нагрузке, + добавка к basePrice
                if (arcStep === 0.65) {
                    // Находим базовую цену для "Стандарт 4 мм" с учётом возможных вариаций написания
                    const baseEntry = currentCityData.find(item => {
                        return (
                            getFormCategory(item.form_name) === form &&
                            parseFloat(item.width) === width &&
                            parseFloat(item.length) === length &&
                            normalizeString(item.frame_description).includes(normalizeString(frame)) &&
                            (normalizeString(item.polycarbonate_type) === normalizeString("стандарт4мм") ||
                             normalizeString(item.polycarbonate_type) === normalizeString("стандарт 4мм"))
                        );
                    });

                    if (!baseEntry) {
                        alert('Не найдена базовая цена для покрытия "Стандарт 4 мм".');
                        return;
                    }

                    const basePriceStandard = baseEntry.price;
                    const additionalCost = 0.25 * basePriceStandard;

                    // Прибавляем к базовой цене
                    basePrice += additionalCost;
                    // Округляем до ближайшего 10
                    basePrice = Math.ceil(basePrice / 10) * 10;
                    basePriceText = `Стоимость с учетом скидки - ${formatPrice(basePrice)} рублей`;

                    // Увеличиваем снеговую нагрузку на 25%
                    snowLoadNum = Math.round(snowLoadNum * 1.25);
                }

                // 4) При поликарбонате Люкс => +10% к нагрузке, Премиум => +20%
                const polyStr = normalizeString(polycarbonate);
                if (polyStr === "люкс4мм" || polyStr === "люкс4 мм") {
                    snowLoadNum = Math.round(snowLoadNum * 1.1);
                }
                if (polyStr === "премиум6мм" || polyStr === "премиум6 мм") {
                    snowLoadNum = Math.round(snowLoadNum * 1.2);
                }

                // 5) Формируем строку для КП, например "355 кг/м2"
                let snowLoadFinalText = `${snowLoadNum} кг/м2`;

                // Дополнительные услуги
const bracingCheckbox = document.getElementById('bracing');
const groundHooksCheckbox = document.getElementById('ground-hooks');
const assemblyCheckbox = document.getElementById('assembly');
const onWoodCheckbox = document.getElementById('on-wood');
const onConcreteCheckbox = document.getElementById('on-concrete');

const bracingChecked = bracingCheckbox ? bracingCheckbox.checked : false;
const groundHooksChecked = groundHooksCheckbox ? groundHooksCheckbox.checked : false;
const assemblyChecked = assemblyCheckbox ? assemblyCheckbox.checked : false;
const onWoodChecked = onWoodCheckbox ? onWoodCheckbox.checked : false;
const onConcreteChecked = onConcreteCheckbox ? onConcreteCheckbox.checked : false;

// Расчёт стоимости бруса
if (bracingChecked) {
  const bracingPrice = additionalServicesData["Брус"].price_by_length[length];
  if (bracingPrice) {
    foundationCost += bracingPrice;
    foundationText += `\nОснование из бруса - ${formatPrice(bracingPrice)} рублей`;
  } else {
    alert(`Не найдена стоимость бруса для длины ${length} м.`);
    return;
  }
}

// Расчёт стоимости штырей
if (groundHooksChecked) {
  // Если выбраны с брусом, используем соответствующие данные, иначе – другие
  const quantityData = bracingChecked
      ? additionalServicesData["Штыри"].quantity_by_length["with_bracing"]
      : additionalServicesData["Штыри"].quantity_by_length["without_bracing"];
  const stakesQuantity = quantityData[length];
  if (stakesQuantity) {
    const stakesCost = stakesQuantity * additionalServicesData["Штыри"].price_per_unit;
    foundationCost += stakesCost;
    foundationText += `\nГрунтозацепы ${stakesQuantity} шт - ${formatPrice(stakesCost)} рублей`;
  } else {
    alert(`Не найдена информация о количестве штырей для длины ${length} м.`);
    return;
  }
}

// Расчёт стоимости сборки или монтажа на фундамент клиента
if (assemblyChecked) {
  const assemblyCategory = getAssemblyCategory(form, width); // Получаем категорию сборки
  if (assemblyCategory) {
    const assemblyCostCalculated = calculateAssemblyCost(form, assemblyCategory, length);
    if (assemblyCostCalculated > 0) {
      assemblyCost += assemblyCostCalculated;
      assemblyText += `\nСборка и установка - ${formatPrice(assemblyCostCalculated)} рублей`;
    } else {
      alert(`Не найдена стоимость сборки для формы "${form}", ширины "${width}М" и длины "${length} м".`);
      return;
    }
  } else {
    alert(`Категория сборки для формы "${form}" и ширины "${width}М" не определена.`);
    return;
  }
} else {
  // Если сборка не выбрана, проверяем монтаж на фундамент клиента
  if (onWoodChecked || onConcreteChecked) {
    if (onWoodChecked) {
      const woodPrice = onWoodCheckbox ? parseFloat(onWoodCheckbox.getAttribute('data-price')) : 0;
      if (woodPrice) {
        foundationCost += woodPrice;
        foundationText += `\nМонтаж на брус клиента - ${formatPrice(woodPrice)} рублей`;
      } else {
        alert(`Не найдена стоимость монтажа на брус.`);
        return;
      }
    }
    if (onConcreteChecked) {
      const concretePrice = onConcreteCheckbox ? parseFloat(onConcreteCheckbox.getAttribute('data-price')) : 0;
      if (concretePrice) {
        foundationCost += concretePrice;
        foundationText += `\nМонтаж на бетон клиента - ${formatPrice(concretePrice)} рублей`;
      } else {
        alert(`Не найдена стоимость монтажа на бетон.`);
        return;
      }
    }
  }
}

                // Дополнительные товары
                const additionalProducts = [];
                const productCheckboxes = document.querySelectorAll('.additional-products input[type="checkbox"]');
                productCheckboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        const productNameElement = checkbox.parentElement.querySelector('.product-name');
                        const productName = productNameElement ? productNameElement.textContent.trim() : checkbox.parentElement.textContent.split(' +')[0].trim();
                        const productPrice = parseFloat(checkbox.getAttribute('data-price'));
                        if (!isNaN(productPrice) && productPrice > 0) { // Добавлена проверка на положительную стоимость
                            additionalProducts.push({ name: productName, cost: productPrice });
                            additionalProductsCost += productPrice;
                        }
                    }
                });

                // Формируем текст дополнительных товаров
                if (additionalProducts.length > 0) {
                    additionalProductsText = additionalProducts.map(product => `${product.name} - ${formatPrice(product.cost)} рублей`).join('\n');
                }

                // Итоговая стоимость (без доставки)
                finalTotalPrice = basePrice + assemblyCost + foundationCost + additionalProductsCost;

                // Округление вверх до ближайшего десятка
                finalTotalPrice = Math.ceil(finalTotalPrice / 10) * 10;

                // Получаем стоимость доставки из блока доставки
                const deliveryPrice = deliveryCost;

                // Итоговая стоимость с доставкой
                finalTotalPrice += deliveryPrice;

                // Формирование итогового резюме (которое теперь будет лишь в КП)
                let summaryText = `Итоговая стоимость теплицы: ${formatPrice(finalTotalPrice)} рублей\n`;
                summaryText += `${basePriceText}\n`;
                if (assemblyText) {
                    summaryText += `${assemblyText}\n`;
                }
                if (foundationText) {
                    summaryText += `${foundationText}\n`;
                }
                if (additionalProductsText) {
                    summaryText += `\nДополнительные товары:\n${additionalProductsText}\n`;
                }
                if (deliveryPrice > 0) {
                    summaryText += `\nДоставка - ${formatPrice(deliveryPrice)} рублей\n`;
                }
                summaryText += `\nИтоговая стоимость - ${formatPrice(finalTotalPrice)} рублей`;

                // Генерация коммерческого предложения
                generateCommercialOffer(basePrice, assemblyCost, foundationCost, additionalProducts, additionalProductsCost, deliveryPrice, finalTotalPrice, selectedEntry, basePriceText, assemblyText, foundationText, additionalProductsText, snowLoadFinalText);
            }

            async function calculateDelivery() {
    const addressInput = document.getElementById("address");
    const address = addressInput.value.trim().toLowerCase();
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;

    if (!address) {
        document.getElementById('result').innerText = "Введите адрес!";
        return;
    }

    try {
        const res = await ymaps.geocode(address, { results: 1 });
        const geoObject = res.geoObjects.get(0);

        if (!geoObject) {
            document.getElementById('result').innerText = "Адрес не найден!";
            return;
        }

        // Извлекаем населённые пункты и административные области,
        // приводим их к нижнему регистру для упрощённого сравнения.
        let localities = geoObject.getLocalities().map(loc => loc.toLowerCase());
        let administrativeAreas = geoObject.getAdministrativeAreas().map(area => area.toLowerCase());

        // Для отладки: выводим полученные данные
        console.log("Localities:", localities);
        console.log("Administrative Areas:", administrativeAreas);

        // Проверяем, содержит ли хотя бы одно ключевое слово из массива deliveryRegions
        // любое слово из localities или administrativeAreas
        const isInDeliveryRegion = deliveryRegions.some(regionEntry => {
            return regionEntry.keywords.some(keyword =>
                localities.some(loc => loc.includes(keyword)) ||
                administrativeAreas.some(area => area.includes(keyword))
            );
        });

        if (!isInDeliveryRegion) {
            document.getElementById('result').innerText = "Доставка в этот регион не осуществляется.";
            return;
        }

        const coords = geoObject.geometry.getCoordinates();
        const destinationLat = coords[0];
        const destinationLon = coords[1];

        let nearestCity = null;
        let minDistance = Infinity;

        // Поиск ближайшего города из массива citiesForMap
        citiesForMap.forEach(city => {
            const cityDistance = ymaps.coordSystem.geo.getDistance(city.coords, [destinationLat, destinationLon]) / 1000; // расстояние в км
            if (cityDistance < minDistance) {
                minDistance = cityDistance;
                nearestCity = city;
            }
        });

        if (!nearestCity) {
            document.getElementById('result').innerText = "Ошибка: ближайший город не найден.";
            return;
        }

        mapInstance.setCenter(nearestCity.coords, 7);

        if (currentRoute) {
            mapInstance.geoObjects.remove(currentRoute);
        }

        try {
            const route = await ymaps.route([nearestCity.coords, [destinationLat, destinationLon]]);
            currentRoute = route;
            mapInstance.geoObjects.add(route);

            const distanceInKm = route.getLength() / 1000;
            const distanceFromBoundary = Math.max(distanceInKm - nearestCity.boundaryDistance, 0);

            let cost;
            if (deliveryType === "withoutAssembly") {
                cost = Math.max(1000, 500 + 40 * distanceFromBoundary);
            } else {
                cost = Math.max(1000, 40 * distanceFromBoundary);
            }

            const roundedCost = Math.ceil(cost / 50) * 50;

            deliveryCost = roundedCost; // сохраняем стоимость доставки в глобальной переменной

            document.getElementById('result').innerText = `Стоимость доставки: ${formatPrice(roundedCost)} рублей (${nearestCity.name})`;
        } catch (routeError) {
            document.getElementById('result').innerText = "Ошибка при расчёте маршрута.";
        }

    } catch (geocodeError) {
        document.getElementById('result').innerText = "Ошибка при расчёте. Попробуйте снова.";
    }
}

            // Функция формирования коммерческого предложения
            function generateCommercialOffer(basePrice, assemblyCost, foundationCost, additionalProducts, additionalProductsCost, deliveryPrice, finalTotalPrice, selectedEntry, basePriceText, assemblyText, foundationText, additionalProductsText, snowLoadFinalText) {
                // Извлечение дополнительных характеристик
                const height = selectedEntry.height ? selectedEntry.height : "Не указано";
                const horizontalTies = selectedEntry.horizontal_ties ? selectedEntry.horizontal_ties : "Не указано";
                const equipment = selectedEntry.equipment || "Не указано";

                // Получаем название теплицы из базы данных
                const baseName = selectedEntry.form_name.toUpperCase();
                // Если в названии уже есть слово "ТЕПЛИЦА", не добавляем его повторно
                const cleanName = baseName.startsWith("ТЕПЛИЦА") ? baseName : `ТЕПЛИЦА ${baseName}`;

                const frameValue = document.getElementById("frame").value;
                const widthValue = document.getElementById("width").value;
                const lengthValue = document.getElementById("length").value;
                const arcStepValue = document.getElementById("arcStep").value;
                const polycarbonateValue = document.getElementById("polycarbonate").value;

                // Формирование текста КП
                let commercialOffer = `${cleanName}\n\n` +
                    `Каркас: ${frameValue}\n` +
                    `Ширина: ${widthValue} м\n` +
                    `Длина: ${lengthValue} м\n` +
                    `Высота: ${height}\n` +
                    `Шаг дуги: ${arcStepValue} м\n` +
                    `Поликарбонат с УФ защитой: ${polycarbonateValue}\n` +
                    `Снеговая нагрузка: ${snowLoadFinalText}\n` +
                    `Горизонтальные стяжки: ${horizontalTies}\n` +
                    `Комплектация: ${equipment}\n\n` +
                    `${basePriceText}\n`;

                if (assemblyText) {
                    commercialOffer += `${assemblyText}\n`;
                }
                if (foundationText) {
                    commercialOffer += `${foundationText}\n`;
                }
                if (additionalProductsText) {
                    commercialOffer += `\nДополнительные товары:\n${additionalProductsText}\n`;
                }
                if (deliveryPrice > 0) {
                    commercialOffer += `\nДоставка - ${formatPrice(deliveryPrice)} рублей\n`;
                }
                commercialOffer += `\nИтоговая стоимость - ${formatPrice(finalTotalPrice)} рублей`;

                // Выводим сформированное КП в textarea
                document.getElementById("commercial-offer").value = commercialOffer;
            }

            // Функция копирования КП
            function copyCommercialOffer() {
                const offerText = document.getElementById("commercial-offer");
                offerText.select();
                offerText.setSelectionRange(0, 99999); // Для мобильных устройств

                document.execCommand("copy");

                alert("Коммерческое предложение скопировано!");
            }

            // Функция сброса всех фильтров
            function resetAllFilters() {
                // Сбрасываем выпадающие списки
                resetDropdown('form', 'Сначала выберите город');
                resetDropdown('width', 'Сначала выберите форму');
                resetDropdown('length', 'Сначала выберите ширину');
                resetDropdown('frame', 'Сначала выберите длину');
                resetDropdown('arcStep', 'Выберите шаг');
                resetDropdown('polycarbonate', 'Сначала выберите город');

                // Сбрасываем все чекбоксы
                resetAdditionalOptions();

                // Сбрасываем текст КП и результатов
                document.getElementById("commercial-offer").value = "Здесь будет ваше коммерческое предложение.";
                document.getElementById("result").innerText = "";

                // Очищаем карту
                if (mapInstance && currentRoute) {
                    mapInstance.geoObjects.remove(currentRoute);
                }

                // Сброс глобальной переменной стоимости доставки
                deliveryCost = 0;
            }

            // Функция сброса доставки
            function resetDelivery() {
                document.getElementById("address").value = "";
                document.getElementById("result").innerText = "";

                // Удаляем маршрут с карты, если есть
                if (mapInstance && currentRoute) {
                    mapInstance.geoObjects.remove(currentRoute);
                }

                // Сброс глобальной переменной стоимости доставки
                deliveryCost = 0;
            }

            // Инициализация при загрузке страницы
            window.onload = async function() {
                const savedLogin = localStorage.getItem('savedLogin');
                if (savedLogin) {
                    document.getElementById("login").value = savedLogin;
                    document.getElementById("password").focus();
                    document.getElementById("auth-container").classList.add("hidden");
                    document.getElementById("calculator-container").classList.remove("hidden");
                    await initializeCalculator();
                }
            }

            // Функция загрузки городов при инициализации калькулятора
            async function initializeCalculator() {
                await loadCities();
                addAdditionalProductsEventListeners();

                document.getElementById("polycarbonate").addEventListener("change", calculateGreenhouseCost);
                document.getElementById("arcStep").addEventListener("change", calculateGreenhouseCost);
            }

            // Функция добавления обработчиков событий для дополнительных опций
            function addAdditionalProductsEventListeners() {
                const additionalProducts = document.querySelectorAll('.additional-products input[type="checkbox"]');
                additionalProducts.forEach(checkbox => {
                    checkbox.addEventListener('change', calculateGreenhouseCost);
                });

                const additionalServices = document.querySelectorAll('.additional-services input[type="checkbox"]');
                additionalServices.forEach(checkbox => {
                    checkbox.addEventListener('change', calculateGreenhouseCost);
                });
            }
             
             // Код Яндекс.Карт для подсказок
            ymaps.ready(() => {
                const input = document.getElementById('address'); // Поле ввода адреса
                const resultsContainer = document.getElementById('suggestions'); // Используем существующий блок

                input.addEventListener('input', () => {
                    const query = input.value.trim();

                    if (query.length > 2) {
                        ymaps.geocode(query, { results: 5 }).then(res => {
                            const items = res.geoObjects.toArray();
                            resultsContainer.innerHTML = ''; // Очищаем старые подсказки

                            if (items.length === 0) {
                                resultsContainer.style.display = 'none'; // Скрываем контейнер, если нет результатов
                                return;
                            } else {
                                resultsContainer.style.display = 'block'; // Показываем контейнер
                            }

                            items.forEach(item => {
                                const suggestion = document.createElement('div');
                                suggestion.classList.add('suggestion');

                                // Выделяем совпадения жирным
                                const regex = new RegExp(`(${query})`, 'gi');
                                const address = item.getAddressLine();
                                const highlightedAddress = address.replace(regex, '<span class="highlight">$1</span>');
                                suggestion.innerHTML = highlightedAddress;

                                suggestion.addEventListener('click', () => {
                                    input.value = address;
                                    resultsContainer.innerHTML = ''; // Убираем подсказки
                                    resultsContainer.style.display = 'none'; // Скрываем контейнер
                                    calculateDelivery(); // Автоматически рассчитываем доставку при выборе адреса
                                });

                                resultsContainer.appendChild(suggestion);
                            });
                        }).catch(err => {
                            console.error('Ошибка при получении геокодинга:', err);
                            resultsContainer.style.display = 'none'; // Скрываем контейнер при ошибке
                        });
                    } else {
                        resultsContainer.innerHTML = ''; // Убираем подсказки при коротком вводе
                        resultsContainer.style.display = 'none'; // Скрываем контейнер
                    }
                });

                // Закрытие подсказок при клике вне области
                document.addEventListener('click', (event) => {
                    if (!document.querySelector('.address-container').contains(event.target)) {
                        resultsContainer.style.display = 'none';
                    }
                });
            });
        
