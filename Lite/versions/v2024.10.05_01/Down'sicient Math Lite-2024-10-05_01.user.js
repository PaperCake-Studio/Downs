// ==UserScript==
// @name         Down'sicient Math Lite
// @namespace    http://tampermonkey.net/
// @version      2024-10-05_01
// @description  try to take over the world!
// @author       Down'sicient Academy
// @match        http*://m.afficienta.cn*
// @icon         https://downs.tach.eu.org/images/favicon.ico
// @homepage     https://downs.tach.eu.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        setTimeout(RunOnLoad, 500);
    });

    var isInProblemsPage;
    window.addEventListener('popstate', function (event) {
        setTimeout(RunOnLoad, 500);
        if (document.querySelector("[ng-click=\"ToggleTimer()\"]") != null) {
            document.querySelector("[ng-click=\"ToggleTimer()\"]").onclick = function() {
                isInProblemsPage = true
                console.log(isInProblemsPage)
                AddBtnIn(false, angular.element(document.getElementsByClassName("mathjoy-sidebar")[0]).scope().level_type);
            };
        }

        if (document.querySelector("[ng-click=\"panelIndex = 2; startExercise($event)\"]") != null) {
            document.querySelector("[ng-click=\"panelIndex = 2; startExercise($event)\"]").onclick = function() {
                isInProblemsPage = true
                console.log(isInProblemsPage)
                AddBtnIn(true);
            };
        }
    });

    document.querySelector("[rel=\"shortcut icon\"]").href = "https://downs.tach.eu.org/images/favicon.ico"


})();

function RunOnLoad() {
    if (document.querySelector(".banner-login") != null) {
        document.querySelector(".banner-login").src = "https://s1.locimg.com/2024/10/03/daa7b2357ba39.png";
    }
    if (document.querySelector(".navbar-brand") != null) {
        document.querySelector(".navbar-brand").children[0].src = "https://s1.locimg.com/2024/10/03/4505c4599c239.png";
        document.querySelector(".navbar-brand").children[0].setAttribute("width", 100);
    }
    if (document.querySelector("[ui-view=\"footer\"]").children[0] != null) {
        document.querySelector("[ui-view=\"footer\"]").children[0].textContent = "Down'sicient Academy ™"
    }

    if (document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]") != null) {
        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[0].childNodes[1].nodeValue = " some features are not supported by browser : Your fucking browser!";
        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[0].children[0].textContent = "Fuck Away!";
        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[0].children[1].childNodes[0].nodeValue = "We suggest the following browsers for fucking user experience: Afficient ";
        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[0].children[1].children[0].textContent = "Shit";
        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[0].children[1].childNodes[2].nodeValue = ", Macrohard Center, Waterdog";
        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[0].children[2].children[0].textContent = "Download Down's";
        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[0].children[2].children[0].href = "https://downs.tach.eu.org/";

        document.querySelector("[ng-show=\"browser!=='Chrome' && useAnyWay\"]").children[1].children[0].textContent = "FUCK U!";
    }

    if (document.querySelector("#login_button") != null) {
        document.querySelector("#login_button").children[1].textContent = "Enter this SHIT";
        document.querySelector("#login_button").children[0].setAttribute("class", "fa fa-bomb fa-lg ng-scope");
    }

    if (document.querySelector("#assign_side_menu").children[2] != null) {
        var btn = document.createElement("div");
        btn.setAttribute("layout", "row");
        btn.setAttribute("layout-align", "center center");
        btn.setAttribute("class", "ng-scope layout-align-center-center layout-row");
        btn.setAttribute("style", "padding-bottom: 0px; background-color:#1E90FF;cursor: pointer;");
        btn.setAttribute("id", "dm_info_btn");
        btn.innerHTML = `<div class="head-progress white" style="font-size:30px;">INFO</div>`;
        btn.onclick = function() {
            alert("Created by Down'sicient Math\n唐氏练习题 出品\nVersion 版本 " + GM_info.script.version)
        }

        document.querySelector("#assign_side_menu").children[2].appendChild(btn);
    }
}

function AddBtnIn(isDemo, levelType) {
    var btn = document.createElement("button")
    btn.setAttribute("class", "md-raised md-accent md-button")
    btn.setAttribute("type", "button")
    btn.textContent = "JUST DO IT"
    btn.onclick = function() {
        angular.element(document.getElementsByClassName("mathjoy-sidebar")[0]).scope().updateMessageForCorrectProblem();
        angular.element(document.getElementsByClassName("mathjoy-sidebar")[0]).scope().updateStatusAndBtnLabel();
        if (document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3] != null) {
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3].children[0].children[0].children[4].setAttribute("disabled", "true");
        }
        else if (document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1] != null) {
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[2].setAttribute("disabled", "true");
        }
        else {
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[0].children[4].setAttribute("disabled", "true");
        }

    };

    if (!isDemo) {
        if (levelType == "Afficient") {
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].appendChild(btn);
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[1].children[1].children[0].children[0].onclick = function() {
                if (angular.element(document.getElementsByClassName("mathjoy-sidebar")[0]).scope().checkAndSubmitBtnLabel == "Next Skill") {
                    angular.element(document.getElementsByClassName("mathjoy-sidebar")[0]).scope().showAfficiencyConfirmDialog();
                }
                else {
                    if (document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[2].disabled == true) {
                        document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[2].removeAttribute("disabled")
                    }
                }
            }
        }
        else {
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[0].appendChild(btn);
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[0].children[3].children[0].onclick = function() {
                if (angular.element(document.getElementsByClassName("mathjoy-sidebar")[0]).scope().checkAndSubmitBtnLabel != "Next Skill") {
                    if (document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[0].children[4].disabled == true) {
                        document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[1].children[1].children[0].children[4].removeAttribute("disabled")
                    }
                }
            }
        }
    }
    else {
        if (document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3].children[0].children[0].children[4] == null) {
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3].children[0].children[0].appendChild(btn);
            document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3].style.height = "175px";
        }

        document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3].children[0].children[0].children[3].children[0].onclick = function() {
            if (angular.element(document.getElementsByClassName("mathjoy-sidebar")[0]).scope().checkAndSubmitBtnLabel != "Next Skill") {
                if (document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3].children[0].children[0].children[4].disabled == true) {
                    document.getElementsByClassName("mathjoy-sidebar")[0].children[0].children[3].children[0].children[0].children[4].removeAttribute("disabled")
                }
            }
        }
    }
}

