(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Simon = function () {
    function Simon() {
        _classCallCheck(this, Simon);

        this.colors = [];
        this.colorChoices = ["Red", "Green", "Blue", "Yellow"];
        this.correctGuesses = 0;
    }

    _createClass(Simon, [{
        key: "newGame",
        value: function newGame() {
            this.colors = [];
            this.correctGuesses = 0;
        }
    }, {
        key: "addColor",
        value: function addColor() {

            var randIndex = Math.floor(Math.random() * this.colorChoices.length);
            this.colors.push(this.colorChoices[randIndex]);
        }
    }, {
        key: "verifySelection",
        value: function verifySelection(selected) {
            if (this.colors && this.colors.length >= this.correctGuesses) {
                if (this.colors[this.correctGuesses] === selected) {
                    this.correctGuesses++;
                    return true;
                } else {
                    this.correctGuesses = 0;
                    return false;
                }
            } else {
                return false;
            }
        }
    }, {
        key: "getColors",
        get: function get() {
            return this.colors;
        }
    }]);

    return Simon;
}();

exports.default = Simon;

},{}],2:[function(require,module,exports){
"use strict";

var _simon = require("./../js/simon.js");

var _simon2 = _interopRequireDefault(_simon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
    var simonGame = new _simon2.default();

    $("#display").text("!!");

    $("p").on("click", function () {
        alert("was clicked");
    });
}); //var Simon = require('./../js/simon.js');

},{"./../js/simon.js":1}]},{},[2]);
