/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:3000';


describe('express', function (){
  this.timeout(650000);
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('.page-title').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

it('returns the correct status code (root route)', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it('returns the correct status code (/#/movie/:id route)', () => axios.get(url + '/#/movie/tt1375666')
    .then(response => expect(response.status === 200)));

    it('should find movies based on a search', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'Aladdin')
      .click('button#searchBtn')
      .wait('h4')
      .evaluate(() => document.querySelector('h4').innerText)
      .then((text) => {
        expect(text).to.equal('Aladdin');
      })
  ).timeout(10000);

  it('should work for a different movie', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'Inception')
      .click('button#searchBtn')
      .wait('h4')
      .evaluate(() => document.querySelector('h4').innerText)
      .then((text) => {
        expect(text).to.equal('Inception');
      })
  ).timeout(10000);

  it('should be able to access detail page', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'Aladdin')
      .click('button#searchBtn')
      .wait('.detail-link')
      .click('.detail-link')
      .wait(2000)
      .evaluate(() => document.getElementById('title').innerText)
      .then((text) => {
        expect(text).to.equal('Aladdin');
      })
  ).timeout(10000);

