var tableObj = {
    methodHead: "Method",
    descHead: "Description",
    methods: [
        "getElementById()",
        "getElementsByTagName()",
        "getElementsByClassName()",
        "querySelector()",
        "querySelectorAll()"
    ],
    descriptions: [
        "Selects the first element it encounters with the ID you enter. The ID is entered as a string. (e.g. document.getElementById('content');) This method will return a single node.",
        "Selects all the elements in the DOM for the tag you enter. The tag value is entered as a string. (e.g. document.getElementsByTagName('li');) This method returns an array of all the matching nodes.",
        "Selects all the elements in the DOM that is assigned the class that you enter. The class name should be expressed as a string. (e.g. document.getElementById('li');) This method returns an array of all the matching nodes.",
        "Selects the first element in the DOM that matches the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelector('#content li');) This method returns the first element that matches the criteria.",
        "Selects all the elements in the DOM that match the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelectorAll('#content li');) This method returns an array of all elements that match the criteria."
    ]
};

console.log("working");


var fillTable = function(obj) {
    // var tableHeadNodes = document.querySelectorAll("#table th");  WHY DO YOU NEED THE ID OF TABLE?
    var tableHeadNodes = document.querySelectorAll("th");
    // var tableDataNodes = document.querySelectorAll("#table td"); WHY DO YOU NEED THE ID OF TABLE?
    var tableDataNodes = document.querySelectorAll("td");
    var methods = obj.methods;
    var descriptions = obj.descriptions;
    var loc = 0;

    // WHY don't you loop through the head nodes?
    // 2 table heads aka columns
    tableHeadNodes[0].innerHTML = obj.methodHead;
    tableHeadNodes[1].innerHTML = obj.descHead;

    // 4 table datas aka rows
    for (let i = 0; i < tableDataNodes.length; i++) {
        tableDataNodes[i].innerHTML = methods[loc];
        tableDataNodes[++i].innerHTML = descriptions[loc];
        loc++;
        }
};

fillTable(tableObj);
