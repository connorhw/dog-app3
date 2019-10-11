'use strict';

function getDogImage(){
  $('#dog-form').submit(function(event){
    event.preventDefault();
    let breed = $('.breed-entry').val();
    fetch('https://dog.ceo/api/breed/'+ breed +'/images/random')
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'))
  });
}

function displayResults(responseJson){
    console.log(responseJson);
    $('.dog').append(
        `<img src="${responseJson.message}" class="results-img">` 
    )
    $('.results').removeClass('hidden');
}

function watchForm() {
  getDogImage();
};

$(function() {
  console.log('App has loaded!');
  watchForm();
});