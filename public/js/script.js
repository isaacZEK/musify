/***
 * @license Apache-2.0
 * @copyright isaac chama 2024
 * 
 * ***/

'use strict';

/*
 * 
 * custom module
 * 
*/
import {addEventOnElems} from "./utils.js";

/*
 * 
 * search clear functionality
 * 
*/
const $searchfield = document.querySelector('[data-search-field]');

const $searchClear = document.querySelector('[data-search-clear]');

$searchClear?.addEventListener('click', ()=>{
    $searchfield.value = '';
});

/**
 * 
 * Logo animation in mobile
 * 
 **/
const logo = document.querySelector('[data-logo]');

if(!sessionStorage.getItem('logoAnimated')){
    $logo.classList.add('animate');
    sessionStorage.setItem('logoAnimated', true);
}

/**
 * 
 * Menu toggle
 * 
 **/
const $menuWrapper = document.querySelector('[data-menu-wrapper]');

const $menuToggler = document.querySelector('[data-menu-toggler]');

$menuToggler?.addEventListener('click', function (){
    $menuWrapper.classList.toggle('active');
});


/**
 * 
 * Hide top bar on scroll down
 * 
 **/
const $page = document.querySelector('[data-age]');

let lastScrollPos = 0;

page?.addEventListener('scroll', function (){
    if(lastScrollPos < this.scrollTop){
        this.classList.add('header-hide');
    }else{
        this.classList.remove('header-hide')
    }
    lastScrollPos = this.scrollTop;
});


/**
 * 
 * Ripple effect
 * 
 **/
const ripple = function($rippleElem){
    $rippleElem.addEventListener('pointerdown', function (event){
        event.stopImmediatePropagation();

        const $ripple = document.createElement('div');

        $ripple.classList.add('ripple');

        this.appendChild($ripple);

        const removeRipple = ()=>{
            $ripple.animate({
                opacity: 0
            },{ fill: 'forwards', duration: 200});

            setTimeout(()=>{
                $ripple.remove();
            }, 1000);
        }

        this.addEventListener('pointerup', removeRipple);
        this.addEventListener('pointerLeave', removeRipple);

        const rippleSize = Math.max(this.clientWidth, this.clientHeight);

        $ripple.style.top = `${event.layerY}px`;
        $ripple.style.left = `${event.layerX}px`;
        $ripple.style.width = `${rippleSize}px`;
        $ripple.style.height = `${rippleSize}px`;
    });
}

const $rippleElems = document.querySelectorAll('[data-ripple]');

$rippleElems?.forEach(item => ripple(item));



/**
 * Add events on an elements
 * **/

const addEventOnElems= function (elements, evenType, callback){
    elements.forEach(element => element.addEventListener(eventType, callback));
};

