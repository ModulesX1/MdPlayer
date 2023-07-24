!function( init ){

"use strict";

const util = {
  canTouch: "ontouchstart" in document.documentElement,
  isMobile: window.matchMedia("(pointer:coarse)").matches
}

}( typeof window === "object" && window.document )
