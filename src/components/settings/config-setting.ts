// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export interface IDefaultSettings {
  themeMode: string;
  themeDirection: string;
  themeContrast: string;
  themeLayout: string;
  themeColorPresets: string;
  themeStretch: boolean;
}

export const defaultSettings = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeContrast: 'default',
  themeLayout: 'vertical',
  themeColorPresets: 'black',
  themeStretch: false,
};
