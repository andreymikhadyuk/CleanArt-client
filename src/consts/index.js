const CITIES = [
  'Барановичи',
  'Бобруйск',
  'Борисов',
  'Брест',
  'Витебск',
  'Гомель',
  'Гродно',
  'Жлобин',
  'Кобрин',
  'Лида',
  'Минск',
  'Могилев',
  'Мозырь',
  'Молодечно',
  'Новополоцк',
  'Орша',
  'Пинск',
  'Полоцк',
  'Речица',
  'Светлогорск',
  'Солигорск',
];

export const CITIES_OPTIONS = CITIES.map((city, index) => ({
  value: index,
  label: city,
}));

export const MINSK_CITY_OPTION_VALUE = CITIES_OPTIONS.find(city => city.label === 'Минск').value;
