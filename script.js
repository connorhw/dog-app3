'use strict';

function getDogImage(){
  $('#dog-form').submit(function(event){
    event.preventDefault();
    clearDOM();
    let breed = $('.breed-entry').val();
    console.log(breed);
    fetch('https://dog.ceo/api/breed/'+ breed +'/images/random')
      .then(response => response.json())
      .then(responseJson => { 
        if (responseJson.code === 404) {
          alert("Try again...");
        }else{
          displayResults(responseJson);
        }
      })
  });
}

function displayResults(responseJson){
    console.log(responseJson);
    $('.dog').append(
        `<img src="${responseJson.message}" class="results-img">` 
    )
    $('.results').removeClass('hidden');
}

function clearDOM() {
  $('.dog').empty();
}

function watchForm() {
  getDogImage();
};

$(function() {
  console.log('App has loaded!');
  watchForm();
});