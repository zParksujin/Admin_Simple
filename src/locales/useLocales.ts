import { useTranslation } from 'react-i18next';
// utils
import localStorageAvailable from '../utils/localStorageAvailable';
// components
import { useSettingsContext } from '../components/settings';
//
import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------

export default function useLocales() {
  const { i18n, t } = useTranslation();

  const { onChangeDirectionByLang } = useSettingsContext();

  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : '';

  const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
    (onChangeDirectionByLang as (leng: string | undefined) => void)(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    t: (text: string, options?: any): string => String(t(text, options)),
    currentLang,
    allLangs,
  };
}
