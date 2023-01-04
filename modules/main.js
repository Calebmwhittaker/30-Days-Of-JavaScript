//DAY 17 LESSON
//HTML5 Web Storage
/*Two main types of web storage: sessionStorage and localStorage */
/*Prior to this update, application data had to be stored in cookies which were included in ever server request */
/*Cookie storage can only hold abour 4KB while web storages can hold 5 MB and are NEVER transferred to the server*/
/*All sites from the same origin can store and access the same data */

/*localStorage: Similar to sessionStorage, except that data stored in localStorage has no expiration time*/
/*sessionStorage: Data gets cleared when the page session ends or rather, when the page closes */
/*Keys and values are always strings */

//sessionStorage
/*Only available within the browser tab or window session */
/*Designed to store data in a single web page session */
/*If window is closesd, the session data will be removed */

//localStorage
/*Stores data on the browser with no expiration date */
/*Data will be available even after the browser is closed */
/*Data is still available when the browser is closed and reopened and instantly between tabs and windows */
/*There are five methods to work on localStorage: setItem(), getItem(), removeItem(), clear(), and key() */

/*Web Storage data is not availble between different browsers */

//Use case of Web Storages
/*Can be used to:
    Store Data Temporarily
    Save products in a shopping cart
    Used offline completely
    Stored on the client-side; therefore, minimizes the number of subsequent requests
    Can be used for authentication purposes */
/*You would use sessionStorage when you don't want the application to interfere with the same application open in another window */

//HTML5 Web Storage Objects
/*There are two objects available to the client to store data:
    window.localStorage => Stores data with no expiration date
    window.sessionStorage => Stores data for one session */
/*Web Storage Objects:
    localStorage => to display the localStorageObject
    localStorage.clear() => to remove everything from localStorage
    localStorage.setItem() => to store data in the localStorage; takes key and value parameters
    localStorage.getItem() => to display data stored in the localStorage; takes a key as a parameter
    localStorage.removeItem() => to remove stored item from a localStorage; takes a key as a parameter
    localStorage.key() => to display a data stored in a localStorage; takes an index as a parameter */
