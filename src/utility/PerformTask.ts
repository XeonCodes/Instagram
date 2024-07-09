import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import {Appearance, useColorScheme} from 'react-native';

/* ==
    Switch 
    Theme
== */
export const switchTheme = (mode: any) => {
  function saveSystemMode(v: any) {
    AsyncStorage.setItem('systemcolormode', v);
  }

  function enableSystem() {
    saveSystemMode('yes');
    Appearance.setColorScheme(null);
  }

  function disableSystem() {
    saveSystemMode('no');
    Appearance.setColorScheme(mode);
  }

  mode == 'system' ? enableSystem() : disableSystem();
};

/* == 
    Copy to 
    Clipboard
== */
export const copyToClipboard = (text: string, toast: any) => {
  Clipboard.setString(text);
  // Toast Message
  toast.show('Copied to Clipboard', {
    type: 'success',
    placement: 'top',
    duration: 2000,
  });
};

/* ==
    Format
    Currency
== */
export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
  minimumFractionDigits: 2,
});

/* ==
    Format
    Time
== */
export function formatTimestamp(timestamp: any) {
  const date = new Date(timestamp);

  const options: any = {month: 'long', day: 'numeric', year: 'numeric'};
  const formattedDate = date.toLocaleDateString('en-US', options);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  const formattedTime = `${hours}:${minutes} ${ampm}`;
  return `${formattedDate} ${formattedTime}`;
}

export function postTimeAgo(timestamp: any) {
  const now: any = new Date();
  const pastDate: any = new Date(timestamp);
  const diffInMilliseconds = now - pastDate;
  const diffInSeconds = diffInMilliseconds / 1000;

  if (diffInSeconds < 60) {
    return Math.floor(diffInSeconds) + ' seconds ago';
  }

  const diffInMinutes = diffInSeconds / 60;
  if (diffInMinutes < 60) {
    return Math.floor(diffInMinutes) + ' minutes ago';
  }

  const diffInHours = diffInMinutes / 60;
  if (diffInHours < 24) {
    return Math.floor(diffInHours) + ' hours ago';
  }

  const diffInDays = diffInHours / 24;
  if (diffInDays < 30) {
    return Math.floor(diffInDays) + ' days ago';
  }

  const diffInMonths = diffInDays / 30;
  if (diffInMonths < 12) {
    return Math.floor(diffInMonths) + ' months ago';
  }

  const diffInYears = diffInMonths / 12;
  return Math.floor(diffInYears) + ' years ago';
}
