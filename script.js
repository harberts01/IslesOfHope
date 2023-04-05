'use strict';

const API_KEY = `37a25eebfb17e7d9a32b530062c91228`; // Fill in with your own key.
const verse = document.querySelector(`#verse-content`);
const verseRef = document.querySelector(`#verse`);
const bibles =['e8d99085dcb83ab5-01', '06125adad2d5898a-01', '7cd100148df29c08-01', '611f8eb23aec8f13-01']
const bibleIndex = Math.floor(Math.random() * bibles.length);
const BIBLE_ID = bibles[bibleIndex];
//e8d99085dcb83ab5-01 -- SHONA
//06125adad2d5898a-01 -- English ASV
//7cd100148df29c08-01 -- Iranian
//611f8eb23aec8f13-01 -- Swahili
const VERSES = [
  `JER.29.11`,
  `PSA.23`,
  `1COR.4.4`,
  `PHP.4.13`,
  `JHN.3.16`,
  `ROM.8.28`,
  `ISA.41.10`,
  `PSA.46.1`,
  `GAL.5.22`,
  `HEB.11.1`,
  `2TI.1.7`,
  `1COR.10.13`,
  `PRO.22.6`,
  `ISA.40.31`,
  `JOS.1.9`,
  `HEB.12.2`,
  `MAT.11.28`,
  `ROM.10.9`,
  `PHP.2.3`,
  `MAT.5.43`,
];

const verseIndex = Math.floor(Math.random() * VERSES.length);
const verseID = VERSES[verseIndex];

getResults(verseID).then((data) => {
    const passage = data.passages[0];
    verseRef.innerHTML = `<h3><i>${passage.reference}</i></h3>`;
    verse.innerHTML = `<h4>${passage.content}</h4>`;
  });

  function getResults(verseID) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
  
      xhr.addEventListener(`readystatechange`, function () {
        if (this.readyState === this.DONE) {
          const { data, meta } = JSON.parse(this.responseText);
  
          _BAPI.t(meta.fumsId);
          resolve(data);
        }
      });
  
      xhr.open(
        `GET`,
        `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`
      );
      xhr.setRequestHeader(`api-key`, API_KEY);
  
      xhr.onerror = () => reject(xhr.statusText);
  
      xhr.send();
    });
  }