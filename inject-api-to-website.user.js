// ==UserScript==
// @name               inject GM_API
// @namespace          http://tampermonkey.net/
// @version            0.0.1
// @author             You
// @description        inject Tampermonkey api to website
// @match              http://*/*
// @match              https://*/*
// @connect            *
// @run-at             document-start
// @grant              GM_addElement
// @grant              GM_addStyle
// @grant              GM_download
// @grant              GM_getResourceText
// @grant              GM_getResourceURL
// @grant              GM_info
// @grant              GM_log
// @grant              GM_notification
// @grant              GM_openInTab
// @grant              GM_registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @grant              GM_setClipboard
// @grant              GM_getTab
// @grant              GM_saveTab
// @grant              GM_getTabs
// @grant              GM_setValue
// @grant              GM_getValue
// @grant              GM_deleteValue
// @grant              GM_listValues
// @grant              GM_setValues
// @grant              GM_getValues
// @grant              GM_deleteValues
// @grant              GM_addValueChangeListener
// @grant              GM_removeValueChangeListener
// @grant              GM_xmlhttpRequest
// @grant              GM_webRequest
// @grant              GM_cookie
// @grant              GM_audio
// @grant              window.onurlchange
// @grant              window.close
// @grant              window.focus
// @grant              unsafeWindow
// @grant              GM.download
// @grant              GM.getResourceText
// @grant              GM.getResourceUrl
// @grant              GM.notification
// @grant              GM.setClipboard
// @grant              GM.getTab
// @grant              GM.saveTab
// @grant              GM.getTabs
// @grant              GM.setValue
// @grant              GM.getValue
// @grant              GM.deleteValue
// @grant              GM.listValues
// @grant              GM.setValues
// @grant              GM.getValues
// @grant              GM.deleteValues
// @grant              GM.addValueChangeListener
// @grant              GM.removeValueChangeListener
// @grant              GM.xmlHttpRequest
// @grant              GM.cookie
// @grant              GM.audio
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  const storeKey = `Inject_GM_API:` + location.origin;

  const value = GM_getValue(storeKey, false);

  const emoji = value ? "✅" : "❌";

  GM_registerMenuCommand(emoji + " toggle", () => {
    GM_setValue(storeKey, !value);
  });

  if (value) {
    unsafeWindow.__GM_API__ = {
      GM_addElement,
      GM_addStyle,
      GM_download,
      GM_getResourceText,
      GM_getResourceURL,
      GM_info,
      GM_log,
      GM_notification,
      GM_openInTab,
      GM_registerMenuCommand,
      GM_unregisterMenuCommand,
      GM_setClipboard,
      GM_getTab,
      GM_saveTab,
      GM_getTabs,
      GM_setValue,
      GM_getValue,
      GM_deleteValue,
      GM_listValues,
      GM_setValues,
      GM_getValues,
      GM_deleteValues,
      GM_addValueChangeListener,
      GM_removeValueChangeListener,
      GM_xmlhttpRequest,
      GM_webRequest,
      GM_cookie,
      GM_audio,
      window: {
        onurlchange: window.onurlchange,
        close: window.close,
        focus: window.focus,
      },
      GM: {
        download: GM.download,
        getResourceText: GM.getResourceText,
        getResourceUrl: GM.getResourceUrl,
        notification: GM.notification,
        setClipboard: GM.setClipboard,
        getTab: GM.getTab,
        saveTab: GM.saveTab,
        getTabs: GM.getTabs,
        setValue: GM.setValue,
        getValue: GM.getValue,
        deleteValue: GM.deleteValue,
        listValues: GM.listValues,
        setValues: GM.setValues,
        getValues: GM.getValues,
        deleteValues: GM.deleteValues,
        addValueChangeListener: GM.addValueChangeListener,
        removeValueChangeListener: GM.removeValueChangeListener,
        xmlHttpRequest: GM.xmlHttpRequest,
        cookie: GM.cookie,
        audio: GM.audio,
      },
    };
  }
})();
