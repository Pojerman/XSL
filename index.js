"use strict";

function mathml() {
    const xmlString = document.getElementById("MathMlTransform").value;
    const xslRule = document.getElementById("ruleMath").textContent;


    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const xslStyle = parser.parseFromString(xslRule, "text/xml");

    const xslProcessor = new XSLTProcessor();
    xslProcessor.importStylesheet(xslStyle);

    const transform = new XMLSerializer().serializeToString(xslProcessor.transformToDocument(xmlDoc))
    document.getElementById("resultMathMl").innerHTML = transform
}

function svg() {
    const xmlString = document.getElementById("SVGTransform").value;
    const xslRule = document.getElementById("ruleSVG").textContent;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const xslStyle = parser.parseFromString(xslRule, "text/xml");

    const xslProcessor = new XSLTProcessor();
    xslProcessor.importStylesheet(xslStyle);

    const transform = new XMLSerializer().serializeToString(xslProcessor.transformToDocument(xmlDoc))
    document.getElementById("resultSVG").innerHTML = transform
}




