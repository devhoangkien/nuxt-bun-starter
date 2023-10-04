import { withInstall } from '~/utils';

import appLogo from './AppLogo.vue';
import appProvider from './AppProvider.vue';
import appSearch from './search/AppSearch.vue';
import appLocalePicker from './AppLocalePicker.vue';
import appDarkModeToggle from './AppDarkModeToggle.vue';

export { useAppProviderContext } from './useAppContext';

export const AppLogo = withInstall(appLogo);
export const AppProvider = withInstall(appProvider);
export const AppSearch = withInstall(appSearch);
export const AppLocalePicker = withInstall(appLocalePicker);
export const AppDarkModeToggle = withInstall(appDarkModeToggle);