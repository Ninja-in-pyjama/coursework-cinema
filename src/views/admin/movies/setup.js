export const moviesFormInputs = [
  {
    id: "tittleInput",
    label: "Назва фільму",
    placeholder: "Назва",
    value: "tittle",
  },
  {
    id: "producerInput",
    label: "Продюсер",
    placeholder: "Ф.І.П",
    value: "producer",
  },
  {
    id: "allowedAgeInput",
    label: "Вік",
    placeholder: "Вік",
    value: "allowedAge",
  },
  {
    id: "countryInput",
    label: "Країна",
    placeholder: "Країна",
    value: "country",
  },
  {
    id: "genreInput",
    label: "Жанр",
    placeholder: "Жанр фільму",
    value: "genre",
  },
  {
    id: "actorsInput",
    label: "Актори",
    placeholder: "Актори",
    value: "actors",
  },
  {
    id: "durationInput",
    label: "Тривалість",
    placeholder: "Тривалість",
    value: "duration",
  },
  {
    id: "discriptionInput",
    label: "Про фільм:",
    placeholder: "Про фільм",
    value: "description",
  },
  {
    id: "yearInput",
    label: "Рік виходу",
    placeholder: "Рік",
    value: "year",
  },
  {
    id: "imgInput",
    label: "Фотографія",
    placeholder: "Силка на фотографію",
    value: "img",
  },
];

export const moviesColumnsTable = [
  { key: "tittle", name: "Назва" },
  { key: "country", name: "Країна" },
  { key: "producer", name: "Продюсер" },
  { key: "allowedAge", name: "Вік" },
];

export const moviesActionTable = [
  {
    actionName: "Змінити",
    emit: "onEdit",
    className: "btn btn-primary",
    keyItem: "id",
  },
  {
    actionName: "X",
    emit: "onDelete",
    className: "btn btn-danger",
    keyItem: "id",
  },
];
