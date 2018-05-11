var app = angular.module('rune', []);

app.controller('runeCtrl', function ($scope) {

    var canvas = document.getElementById('cnvs');
    var ctx = canvas.getContext('2d');

    $scope.drawGrid = function () {
        ctx.clearRect(0, 0, 400, 200);
        ctx.beginPath();
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 4; // толщина линии

        ctx.moveTo(0, 2); //передвигаем перо
        ctx.lineTo(300, 2); // Гебо
        ctx.stroke();

        ctx.moveTo(0, 100); //передвигаем перо
        ctx.lineTo(300, 100); // Джера
        ctx.stroke();

        ctx.moveTo(0, 198); //передвигаем перо
        ctx.lineTo(300, 198); // Хагаль
        ctx.stroke();

        ctx.moveTo(0, 0); //передвигаем перо
        ctx.lineTo(100, 200); // Наутиз
        ctx.lineTo(200, 0); // Эйваз
        ctx.lineTo(300, 200); // Иса
        ctx.stroke();

        ctx.moveTo(0, 200); //передвигаем перо
        ctx.lineTo(100, 0); // Дагаз 
        ctx.lineTo(200, 200); // Сол
        ctx.lineTo(300, 0); // Ингуз
        ctx.stroke();

    };

    $scope.runemap1 = [
        {
            name: "f", name0: "F", display: "Феху (f)",
            res: "g i s", res0: "h n s"
        },
        {
            name: "u", name0: "U", display: "Уруз (u)",
            res: "g q h", res0: "g d h"
        },
        {
            name: "x", name0: "X", display: "Терс (x)",
            res: "j q s", res0: "j d s"
        },
        {
            name: "a", name0: "A", display: "Ансуз (a)",
            res: "g q y", res0: "h d y"
        },
        {
            name: "r", name0: "R", display: "Райдо (r)",
            res: "j q s y", res0: "j d s y"
        },
        {
            name: "c", name0: "C", display: "Кано (c)",
            res: "i y", res0: "n y"
        },
        {
            name: "g", name0: "G", display: "Гебо (g)",
            res: "s y", res0: "s y", isSuper: "true"
        },
        {
            name: "v", name0: "V", display: "Вуньо (v)",
            res: "g q i", res0: "h d n"
        }
    ];

    $scope.runemap2 = [
        {
            name: "h", name0: "H", display: "Хагаль (h)",
            res: "g y h", res0: "g y h", isSuper: "true"
        },
        {
            name: "n", name0: "N", display: "Наутиз (n)",
            res: "j y", res0: "j y", isSuper: "true"
        },
        {
            name: "i", name0: "I", display: "Иса (i)",
            res: "j", res0: "j", isSuper: "true"
        },
        {
            name: "j", name0: "J", display: "Джера (j)",
            res: "i y n", res0: "i y n", isSuper: "true"
        },
        {
            name: "y", name0: "Y", display: "Эйваз (y)",
            res: "j q d", res0: "j q d", isSuper: "true"
        },
        {
            // Мой вариант
            // name: "p", name0: "P", display: "Перт (p)",
            // res: "g q i n d", res0: "h q i n d"

            // Математики
            name: "p", name0: "P", display: "Перт (p)",
            res: "q g s i y", res0: "d s y h n"
        },
        {
            name: "z", name0: "Z", display: "Альгиз (z)",
            res: "j y s", res0: "j y s"
        },
        {
            name: "s", name0: "S", display: "Сол (s)",
            res: "g s h", res0: "g s h", isSuper: "true"
        }
    ];

    $scope.runemap3 = [
        {
            name: "t", name0: "T", display: "Тейваз (t)",
            res: "j q i", res0: "j d n"
        },
        {
            name: "b", name0: "B", display: "Беркана (b)",
            res: "j q s y n", res0: "j i s y d"
        },
        {
            name: "e", name0: "E", display: "Эваз (e)",
            res: "g h q i j", res0: "g h d n j"
        },
        {
            name: "m", name0: "M", display: "Маназ (m)",
            res: "g h q i", res0: "g h d n"
        },
        {
            name: "l", name0: "L", display: "Лагуз (l)",
            res: "g q", res0: "h d"
        },
        {
            name: "q", name0: "Q", display: "Ингуз (q)",
            res: "q s d i y n", res0: "q s d i y n", isSuper: "true"
        },
        {
            name: "d", name0: "D", display: "Дагаз (d)",
            res: "g h y s", res0: "g h y s", isSuper: "true"
        },
        {
            name: "o", name0: "O", display: "Отал (o)",
            res: "n y d s", res0: "q s i y"
        }
    ];

    $scope.textStyle = function (value) {
        if (value) {
            return {
                "color": "blue"
            }
        }
    };

    $scope.getDestRunes = function (array, value) {

        var fLen, i, res;
        fLen = array.length;
        res = "";
        for (i = 0; i < fLen; i++) {
            if (array[i].name == value) {
                res = array[i].res;
            } else if (array[i].name0 == value) {
                res = array[i].res0;
            }
        }
        return res;
    };

    $scope.getRune = function (value) {

        var res;
        res = $scope.getDestRunes($scope.runemap1, value);
        if (!res.length) {
            res = $scope.getDestRunes($scope.runemap2, value);
            if (!res.length) {
                res = $scope.getDestRunes($scope.runemap3, value);
            }
        }
        return res;
    };

    $scope.setDestRunes = function (value) {


        $scope.sourceRune = value;
        $scope.destRunes = $scope.getRune(value);

        //$scope.drawGrid();
        $scope.drawRune($scope.destRunes);
    };

    $scope.drawRune = function (value) {

        var i;
        ctx.clearRect(0, 0, 400, 200);
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4; // толщина линии

        for (i = 0; i < value.length; i++) {
            if (value[i] != "") {
                $scope.drawRuneLine(value[i]);
            }
        }
    };

    $scope.drawRuneLine = function (value) {

        if (value == "g") {
            ctx.moveTo(0, 2); //передвигаем перо
            ctx.lineTo(300, 2); // Гебо
            ctx.stroke();
        } else if (value == "j") {
            ctx.moveTo(0, 100); //передвигаем перо
            ctx.lineTo(300, 100); // Джера
            ctx.stroke();
        } else if (value == "h") {
            ctx.moveTo(0, 198); //передвигаем перо
            ctx.lineTo(300, 198); // Хагаль
            ctx.stroke();
        } else if (value == "n") {
            ctx.moveTo(0, 0); //передвигаем перо
            ctx.lineTo(100, 200); // Наутиз
            ctx.stroke();
        } else if (value == "y") {
            ctx.moveTo(0, 0); //передвигаем перо
            ctx.moveTo(100, 200); // передвигаем перо
            ctx.lineTo(200, 0); // Эйваз
            ctx.stroke();
        } else if (value == "i") {
            ctx.moveTo(200, 0); //передвигаем перо
            ctx.lineTo(300, 200); // Иса
            ctx.stroke();
        } else if (value == "d") {
            ctx.moveTo(0, 200); //передвигаем перо
            ctx.lineTo(100, 0); // Дагаз 
            ctx.stroke();
        } else if (value == "s") {
            ctx.moveTo(100, 0); //передвигаем перо
            ctx.lineTo(200, 200); // Сол
            ctx.stroke();
        } else if (value == "q") {
            ctx.moveTo(200, 200); //передвигаем перо
            ctx.lineTo(300, 0); // Ингуз
            ctx.stroke();
        }

    };

    $scope.sourceList = [
        {
            name: "", analize: ""
        },
    ];

    $scope.sourceListAdd = function (v) {
        $scope.sourceList.push({
            name: v.name, analize: v.analize
        });
    };

    $scope.sourceListDelete = function (v) {
        $scope.sourceList.splice($scope.sourceList.indexOf(v), 1);
    };

    $scope.sourceDivide = [
        {
            name: "", nameDivided: ""
        },
    ];

    $scope.sourceDivideAdd = function (v) {
        $scope.sourceDivide.push({
            name: v.name, nameDivided: v.nameDivided
        });
    };

    $scope.sourceDivideDelete = function (v) {
        $scope.sourceDivide.splice($scope.sourceDivide.indexOf(v), 1);
    };

    $scope.divide = function (v) {

        var fLen, i, res;
        fLen = v.name.length;
        res = "";
        rune1 = "";

        for (i = 0; i < fLen; i++) {
            if (v.name[i] != " ") {
                rune1 = $scope.getRune(v.name[i]);
                res = res + " " + rune1 + " ,";
            } else {
                res = res + " ";
            }
        }

        v.nameDivided = res;
    };

    $scope.isFindRune = function (runeValue, sourceValue) {
        var fLen, i, enterCount, resCount, pos;

        fLen = runeValue.length;
        enterCount = 0;
        resCount = 0;
        for (i = 0; i < fLen; i++) {
            if (runeValue[i] != " ") {
                enterCount += 1;
                pos = sourceValue.name.search(runeValue[i]);
                if (pos > -1) {
                    resCount += 1;
                }
            }
        }
        return (enterCount == resCount);

    }

    $scope.analize = function (value) {

        var fLen, i;
        var res = "";
        var runemapAll = $scope.runemap1.concat($scope.runemap2, $scope.runemap3);

        fLen = runemapAll.length;
        for (i = 0; i < fLen; i++) {
            if ($scope.isFindRune(runemapAll[i].res, value)) {
                res += runemapAll[i].name + "( " + runemapAll[i].res + " ) ,   ";
            }
            if (!runemapAll[i].isSuper) {
                if ($scope.isFindRune(runemapAll[i].res0, value)) {
                    res += runemapAll[i].name0 + "( " + runemapAll[i].res0 + " ) ,   ";
                }
            }
        }

        value.analize = res;
    };

    $scope.isFindRuneOne = function (runeValue, sourceValue) {
        var pos;
        pos = runeValue.search(sourceValue);
        return (pos > -1);
    }

    $scope.find = function (value) {

        var iLen, i, jLen, j;
        var res = "";
        var runemapAll = $scope.runemap1.concat($scope.runemap2, $scope.runemap3);

        iLen = value.name.length;
        jLen = runemapAll.length;

        for (i = 0; i < iLen; i++) {
            if (value.name[i] != " ") {

                for (j = 0; j < jLen; j++) {
                    if ($scope.isFindRuneOne(runemapAll[j].res, value.name[i])) {
                        res += runemapAll[j].name + "( " + runemapAll[j].res + " ) ,   ";
                    }
                    if (!runemapAll[j].isSuper) {
                        if ($scope.isFindRuneOne(runemapAll[j].res0, value.name[i])) {
                            res += runemapAll[j].name0 + "( " + runemapAll[j].res0 + " ) ,   ";
                        }
                    }
                }


            }
        }

        value.nameDivided = res;
    };


});