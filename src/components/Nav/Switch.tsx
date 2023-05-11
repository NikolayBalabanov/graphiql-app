import { useTranslationChange } from 'i18nano';

export const LanguageChange = () => {
  const translation = useTranslationChange();
  console.log(translation)

  return (
    <select value={translation.lang} onChange={(event) => {
      translation.change(event.target.value);
    }}>
      {translation.all.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};