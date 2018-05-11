var drawApp = new Vue({
    el: '#drawApp',
    data: {
        sourceRune: '',
        destRunes: ''
    },
    methods: {
        setDestRunes: function (value) {
            this.sourceRune = value;
            this.destRunes = getRune(value);
            drawRune(this.destRunes);
        }
    }

});

var runeApp = new Vue({
    el: '#runeApp',
    created: function(){
        this.runemap1 = runemap1;
        this.runemap2 = runemap2;
        this.runemap3 = runemap3;
    },
    data: {
        runemap1,
        runemap2,
        runemap3,
        sourceList: [{name: "", analize: ""}],
        sourceDivide: [{name: "", nameDivided: ""}]
    },
    methods: {
        setDestRunes: function (value) {
            drawApp.setDestRunes(value);
        },            
        textStyle(value) {return textStyle(value)},
        sourceListAdd: function (v) {
            this.sourceList.push({name: v.name, analize: v.analize});
        },
        sourceListDelete: function (v) {
            this.sourceList.splice(this.sourceList.indexOf(v), 1);
        },
        sourceDivideAdd: function (v) {
            this.sourceDivide.push({name: v.name, nameDivided: v.nameDivided});
        },
        sourceDivideDelete: function (v) {
            this.sourceDivide.splice(this.sourceDivide.indexOf(v), 1);
        },
        divide: function (v) {
            var fLen, i, res;
            fLen = v.name.length;
            res = "";
            rune1 = "";
            for (i = 0; i < fLen; i++) {
                if (v.name[i] != " ") {
                    rune1 = getRune(v.name[i]);
                    res = res + " " + rune1 + " ,";
                } else {
                    res = res + " ";
                }
            }
            v.nameDivided = res;
        },
        isFindRune: function (runeValue, sourceValue) {
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
        },
        analize: function (value) {
            var fLen, i;
            var res = "";
            var runemapAll = runemap1.concat(runemap2, runemap3);
             fLen = runemapAll.length;
            for (i = 0; i < fLen; i++) {
                if (this.isFindRune(runemapAll[i].res, value)) {
                    res += runemapAll[i].name + "( " + runemapAll[i].res + " ) ,   ";
                }
                if (!runemapAll[i].isSuper) {
                    if (this.isFindRune(runemapAll[i].res0, value)) {
                        res += runemapAll[i].name0 + "( " + runemapAll[i].res0 + " ) ,   ";
                    }
                }
            }
             value.analize = res;
        },
        isFindRuneOne: function (runeValue, sourceValue) {
            var pos;
            pos = runeValue.search(sourceValue);
            return (pos > -1);
        },
        find: function (value) {
            var iLen, i, jLen, j;
            var res = "";
            var runemapAll = runemap1.concat(runemap2, runemap3);
            iLen = value.name.length;
            jLen = runemapAll.length;
            for (i = 0; i < iLen; i++) {
                if (value.name[i] != " ") {
                    for (j = 0; j < jLen; j++) {
                        if (this.isFindRuneOne(runemapAll[j].res, value.name[i])) {
                            res += runemapAll[j].name + "( " + runemapAll[j].res + " ) ,   ";
                        }
                        if (!runemapAll[j].isSuper) {
                            if (this.isFindRuneOne(runemapAll[j].res0, value.name[i])) {
                                res += runemapAll[j].name0 + "( " + runemapAll[j].res0 + " ) ,   ";
                            }
                        }
                    }
                }
            }
            value.nameDivided = res;
        }
   
    }

});