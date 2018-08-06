var FLSurveyDataTable = "njtu_bys2018";
var SuccessVar = "default";
var schID = "";
var byqx = 0;
var sucessUrl = "";
SurveyOrganName = "北京交通大学";

$(document).ready(function() {
    //CheckGuidBeforeSubmit();
    SetValidateInit();
    //FLSetGroupValid(part0);
    FLSetGroupValid(part1);
    FLSetGroupValid(part2);
    FLSetGroupValid(part3);
    FLSetGroupValid(part4);



    $("#FLSurveyDataTableName").val(FLSurveyDataTable);
    $("#DeviceUserAgent").val(navigator.userAgent);
    //设置短时点击监控参数
    global_ShortTimeFilter = 1000; //低于1000ms，则监控
    global_ShortTimeMsgTimes = 4; //连续超过4次短时点击，则弹窗提醒
    SetProvinceCity("#P2Q1S2R1","#P2Q1S2R2")
    //SetVisibilityB("#P7Q1IB",".P7Q1IBhide",["#P7Q1JR1","#P7Q1JR2","#P7Q1JR3","#P7Q1JR4","#P7Q1JR5"])
    //SetVisibilityB("#P7Q1GR1A",".P7Q1GR1Ahide",["#P7Q1GR2A"])
    SetVisibilityB("#P1Q2DR1A",".P1Q2DR1Ahide",["#P1Q2DR2A"])
    addOption({elmt: '#P1Q1AR1', tip: '--', tVal: '', cur: [], arr: {1: "电信学院", 2: "计算机学院", 3: "经管学院", 4: "运输学院", 5: "土建学院", 6: "机电学院", 7: "电气学院", 8: "理学院", 9: "马克思主义学院", 10: "语传学院", 11: "软件学院", 12: "建艺学院", 13: "法学院"}});
    addOption({elmt: '#P1Q1BR1', tip: '--', tVal: '', cur: [], arr: {1: "电信学院", 2: "计算机学院", 3: "经管学院", 4: "运输学院", 5: "土建学院", 6: "机电学院", 7: "电气学院", 8: "理学院", 9: "马克思主义学院", 10: "语传学院", 11: "软件学院", 12: "建艺学院", 13: "法学院"}});
    addOption({elmt: '#P1Q1CR1', tip: '--', tVal: '', cur: [], arr: {1: "电信学院", 2: "计算机学院", 3: "经管学院", 4: "运输学院", 5: "土建学院", 6: "机电学院", 7: "电气学院", 8: "理学院", 9: "马克思主义学院", 10: "语传学院", 11: "软件学院", 12: "建艺学院", 13: "法学院"}});
    addOption({elmt: '#P1Q1DR1', tip: '--', tVal: '', cur: [], arr: {1: "电信学院", 2: "计算机学院", 3: "经管学院", 4: "运输学院", 5: "土建学院", 6: "机电学院", 7: "电气学院", 8: "理学院", 9: "马克思主义学院", 10: "语传学院", 11: "软件学院", 12: "建艺学院", 13: "法学院"}});
    addOption({elmt: '#P1Q1ER1', tip: '--', tVal: '', cur: [], arr: {1: "电信学院", 2: "计算机学院", 3: "经管学院", 4: "运输学院", 5: "土建学院", 6: "机电学院", 7: "电气学院", 8: "理学院", 9: "马克思主义学院", 10: "语传学院", 11: "软件学院", 12: "建艺学院", 13: "法学院"}});
    addOption({elmt: '#P1Q1AR2', tip: '--', tVal: '', cur: [], arr: {1: "1981", 2: "1982", 3: "1983", 4: "1984", 5: "1985", 6: "1986", 7: "1987", 8: "1988", 9: "1989", 10: "1990", 11: "1991", 12: "1992", 13: "1993", 14: "1994", 15: "1995", 16: "1996", 17: "1997", 18: "1998", 19: "1999", 20: "2000", 21: "2001", 22: "2002", 23: "2003", 24: "2004", 25: "2005", 26: "2006", 27: "2007", 28: "2008", 29: "2009", 30: "2010", 31: "2011", 32: "2012", 33: "2013", 34: "2014", 35: "2015", 36: "2016", 37: "2017", 38: "2018",}});
    addOption({elmt: '#P1Q1BR2', tip: '--', tVal: '', cur: [], arr: {1: "1981", 2: "1982", 3: "1983", 4: "1984", 5: "1985", 6: "1986", 7: "1987", 8: "1988", 9: "1989", 10: "1990", 11: "1991", 12: "1992", 13: "1993", 14: "1994", 15: "1995", 16: "1996", 17: "1997", 18: "1998", 19: "1999", 20: "2000", 21: "2001", 22: "2002", 23: "2003", 24: "2004", 25: "2005", 26: "2006", 27: "2007", 28: "2008", 29: "2009", 30: "2010", 31: "2011", 32: "2012", 33: "2013", 34: "2014", 35: "2015", 36: "2016", 37: "2017", 38: "2018",}});
    addOption({elmt: '#P1Q1CR2', tip: '--', tVal: '', cur: [], arr: {1: "1981", 2: "1982", 3: "1983", 4: "1984", 5: "1985", 6: "1986", 7: "1987", 8: "1988", 9: "1989", 10: "1990", 11: "1991", 12: "1992", 13: "1993", 14: "1994", 15: "1995", 16: "1996", 17: "1997", 18: "1998", 19: "1999", 20: "2000", 21: "2001", 22: "2002", 23: "2003", 24: "2004", 25: "2005", 26: "2006", 27: "2007", 28: "2008", 29: "2009", 30: "2010", 31: "2011", 32: "2012", 33: "2013", 34: "2014", 35: "2015", 36: "2016", 37: "2017", 38: "2018",}});
    addOption({elmt: '#P1Q1DR2', tip: '--', tVal: '', cur: [], arr: {1: "1981", 2: "1982", 3: "1983", 4: "1984", 5: "1985", 6: "1986", 7: "1987", 8: "1988", 9: "1989", 10: "1990", 11: "1991", 12: "1992", 13: "1993", 14: "1994", 15: "1995", 16: "1996", 17: "1997", 18: "1998", 19: "1999", 20: "2000", 21: "2001", 22: "2002", 23: "2003", 24: "2004", 25: "2005", 26: "2006", 27: "2007", 28: "2008", 29: "2009", 30: "2010", 31: "2011", 32: "2012", 33: "2013", 34: "2014", 35: "2015", 36: "2016", 37: "2017", 38: "2018",}});
    addOption({elmt: '#P1Q1ER2', tip: '--', tVal: '', cur: [], arr: {1: "1981", 2: "1982", 3: "1983", 4: "1984", 5: "1985", 6: "1986", 7: "1987", 8: "1988", 9: "1989", 10: "1990", 11: "1991", 12: "1992", 13: "1993", 14: "1994", 15: "1995", 16: "1996", 17: "1997", 18: "1998", 19: "1999", 20: "2000", 21: "2001", 22: "2002", 23: "2003", 24: "2004", 25: "2005", 26: "2006", 27: "2007", 28: "2008", 29: "2009", 30: "2010", 31: "2011", 32: "2012", 33: "2013", 34: "2014", 35: "2015", 36: "2016", 37: "2017", 38: "2018",}});
    $("input[name='P2Q2']").parent().click(function(){
        $(".P2Q2AShow").hide();
        $(".P2Q2BShow").hide();
        $(".P2Q2CShow").hide();
        $(".P2Q2DShow").hide();
        $(".P2Q2EShow").hide();
        $(".P2Q2FShow").hide();
        $(".P2Q2GShow").hide();
        $(".P2Q2HShow").hide();
        $("input[name='P2Q2S2']").attr("checked",false).parent().css("background-image","url('/images/zkey/radio_01.png')");
        var THISVal=$(this).find("input[name='P2Q2']").val();
        if(THISVal==1){
            $(".P2Q2AShow").show();
            $("#P2Q2S1A").rules("add", { required: true });
            $("#P2Q2S2A").rules("add", { required: true });
            $("#P2Q2S2R2").rules("add", { required: false });
        }else if(THISVal==2){
            $(".P2Q2BShow").show();
            $("#P2Q2S1A").rules("add", { required: true });
            $("#P2Q2S2A").rules("add", { required: true });
            $("#P2Q2S2R2").rules("add", { required: false });
        }else if(THISVal==3){
            $(".P2Q2CShow").show();
            $("#P2Q2S1A").rules("add", { required: false });
            $("#P2Q2S2A").rules("add", { required: true });
            $("#P2Q2S2R2").rules("add", { required: false });
        }else if(THISVal==4){
            $(".P2Q2DShow").show();
            $("#P2Q2S1A").rules("add", { required: false });
            $("#P2Q2S2A").rules("add", { required: true });
            $("#P2Q2S2R2").rules("add", { required: false });
        }else if(THISVal==5){
            $(".P2Q2EShow").show();
            $("#P2Q2S1A").rules("add", { required: false });
            $("#P2Q2S2A").rules("add", { required: true });
            $("#P2Q2S2R2").rules("add", { required: false });
        }else if(THISVal==6){
            $(".P2Q2FShow").show();
            $("#P2Q2S1A").rules("add", { required: false });
            $("#P2Q2S2A").rules("add", { required: true });
            $("#P2Q2S2R2").rules("add", { required: false });
        }else if(THISVal==7){
            $(".P2Q2GShow").show();
            $("#P2Q2S1A").rules("add", { required: false });
            $("#P2Q2S2A").rules("add", { required: false });
            $("#P2Q2S2R2").rules("add", { required: true });
        }else if(THISVal==8){
            $(".P2Q2HShow").show();
            $("#P2Q2S1A").rules("add", { required: false });
            $("#P2Q2S2A").rules("add", { required: false });
            $("#P2Q2S2R2").rules("add", { required: true });
        }
    })

    $("input[name='P1Q1']").parent().click(function(){
        var THIS=$(this).find("input[name='P1Q1']");
        var id1=$(THIS).parent().find(".P1Q1checked select")[0].id;
        var id2=$(THIS).parent().find(".P1Q1checked select")[1].id;
        setTimeout(function(){
            var THISChecked=$(THIS).attr("checked")
            if(THISChecked){
                $(THIS).parent().find(".P1Q1checked").show();
                $("#"+id1).rules("add", { required: true });
                $("#"+id2).rules("add", { required: true });
            }else{
                $(THIS).parent().find(".P1Q1checked").hide();
                $("#"+id1).rules("add", { required: false });
                $("#"+id2).rules("add", { required: false });
            }
        },100)
    })
    $("input[name='P2Q1S2']").parent().click(function(){
        var THIS=$(this).find("input[name='P2Q1S2']");
        setTimeout(function(){
            var THISVal=$(THIS).attr("value");
            if(THISVal==1){
                $(".P2Q1S2Achecked").show();
                $(".P2Q1S2Bchecked").hide();
                $("#P2Q1S2R1").rules("add", { required: true });
                $("#P2Q1S2R3").rules("add", { required: false });
            }else if(THISVal==2){
                $(".P2Q1S2Achecked").hide();
                $(".P2Q1S2Bchecked").show();
                $("#P2Q1S2R1").rules("add", { required: false });
                $("#P2Q1S2R3").rules("add", { required: true });
            }
        },100)
    })
    $(".P1Q1checked select").click(function(e){
        e = e || window.event;
                 if (e.stopPropagation) {
                                e.stopPropagation();
                     }else {
                                e.cancelBubble = true;
                     }
    })

});

// 下拉互斥
    function addOption(qObj){
    var elements = $(qObj.elmt);
    //这一步只是初始化操作，将所有问题写入select选框
    elements.each(function(i){
        var html = '<option value="">'+ qObj.tip +'</option>';
        for(var q in qObj.arr){
            html += '<option value="'+ qObj.arr[q] +'">' + qObj.arr[q] + '</option>';
        }
        $(this).html(html);
    });
}

function GoPreview(show, hide, stop,initArr,ValidData){
    if (FLValidateGroup(initArr)) {
        $(hide).hide(500);
        $(show).show(500);
        FLSetGroupValid(ValidData);
        $("html,body").stop(true);
        $("html,body").animate({ scrollTop: $(stop).offset().top }, 500);
    }
}
function GoPreviewOnly(show, hide, stop) {
    $(hide).hide(800);
    $(show).show(800);
    $("html,body").stop(true);
    $("html,body").animate({ scrollTop: $(stop).offset().top }, 1000);
}
function StartSurvey(){
    $("#DivPart0").hide(500);
    $("#DivPart1").show(500);
    FLSetGroupValid(part1);
    $("html,body").stop(true);
    $("html,body").animate({ scrollTop: $('#divTop').offset().top }, 500);
}
function btnPart1_Click(){
    if (FLValidateGroup(part1)) {
        $("#DivPart1").hide(500);
        $("#DivPart2").show(500);
        FLSetGroupValid(part2);
        $("html,body").stop(true);
        $("html,body").animate({ scrollTop: $('#divTop').offset().top }, 500);
    }
}
function btnPart2_Click(){
    if (FLValidateGroup(part2)) {
        $("#DivPart2").hide(500);
        $("#DivPart3").show(500);
        FLSetGroupValid(part3);
        var P2Q8Val=$("input[name='P2Q8']:checked").val();
        $(".P2Q8AShow").hide();
        $(".P2Q8BShow").hide();
        $(".P2Q8CShow").hide();
        if(P2Q8Val==1){
            $(".P2Q8AShow").show();
            $("#P3Q1R1A").rules("add", { required: true });
            $("#P3Q1R2A").rules("add", { required: true });
            $("#P3Q1R3A").rules("add", { required: true });
            $("#P3Q1R4A").rules("add", { required: true });
            $("#P3Q2R1A").rules("add", { required: true });
            $("#P3Q2R2A").rules("add", { required: true });
            $("#P3Q2R3A").rules("add", { required: true });

        }else if(P2Q8Val==2){
            $(".P2Q8BShow").show();
            $("#P3Q3R1A").rules("add", { required: true });
            $("#P3Q3R2A").rules("add", { required: true });
            $("#P3Q3R3A").rules("add", { required: true });
            $("#P3Q3R4A").rules("add", { required: true });
            $("#P3Q3R5A").rules("add", { required: true });
            $("#P3Q4R1A").rules("add", { required: true });
            $("#P3Q4R2A").rules("add", { required: true });
            $("#P3Q4R3A").rules("add", { required: true });
            $("#P3Q4R4A").rules("add", { required: true });
        }else if(P2Q8Val==3){
            $(".P2Q8CShow").show();
            $("#P3Q5R1A").rules("add", { required: true });
            $("#P3Q5R2A").rules("add", { required: true });
            $("#P3Q5R3A").rules("add", { required: true });
            $("#P3Q5R4A").rules("add", { required: true });
            $("#P3Q5R5A").rules("add", { required: true });
            $("#P3Q6R1A").rules("add", { required: true });
            $("#P3Q6R2A").rules("add", { required: true });
            $("#P3Q6R3A").rules("add", { required: true });
            $("#P3Q6R4A").rules("add", { required: true });
        }
        $("html,body").stop(true);
        $("html,body").animate({ scrollTop: $('#divTop').offset().top }, 500);
    }
}
function btnPart3_Click(){
    if (FLValidateGroup(part3)) {
        $("#DivPart3").hide(500);
        $("#DivPart4").show(500);
        FLSetGroupValid(part4);
        $("html,body").stop(true);
        $("html,body").animate({ scrollTop: $('#divTop').offset().top }, 500);
    }
}

function btnPart4_Click(){
    if (FLValidateGroup(part4)) {
        SaveData();
    }
}
function btnPart5_Click(){
    if (FLValidateGroup(part5)) {
        $("#DivPart5").hide(500);
        $("#DivPart6").show(500);
        FLSetGroupValid(part6);
        $("html,body").stop(true);
        $("html,body").animate({ scrollTop: $('#divTop').offset().top }, 500);
    }
}
function SetValidateInit() {
    opts = {
        rules: {
            P1Q1A: { required: true }
        }
    };
    $("#SurveyForm").validate(opts);
}

var part1 = [
    ["本部分第1题", "#P1Q1A", { required: true }, true],
    ["本部分第1题", "#P1Q1AR1", { required: false }, true],
    ["本部分第1题", "#P1Q1AR2", { required: false }, true],
    ["本部分第1题", "#P1Q1BR1", { required: false }, true],
    ["本部分第1题", "#P1Q1BR2", { required: false }, true],
    ["本部分第1题", "#P1Q1CR1", { required: false }, true],
    ["本部分第1题", "#P1Q1CR2", { required: false }, true],
    ["本部分第1题", "#P1Q1DR1", { required: false }, true],
    ["本部分第1题", "#P1Q1DR2", { required: false }, true],
    ["本部分第1题", "#P1Q1ER1", { required: false }, true],
    ["本部分第1题", "#P1Q1ER2", { required: false }, true],
    ["本部分第2题", "#P1Q2A", { required: true }, true],
    ["本部分第3题", "#P1Q3A", { required: true }, true],
    ["本部分第4题", "#P1Q4A", { required: true }, true],
    ["本部分第5题", "#P1Q5A", { required: true }, true],
    ["本部分第6题", "#P1Q6A", { required: true }, true],
    ["本部分第7题", "#P1Q7A", { required: true }, true],
    ["本部分第8题", "#P1Q8A", { required: true }, true]
];
var part2 = [
    ["本部分第1题", "#P2Q1S1", { required: true}, true],
    ["本部分第1题", "#P2Q1S2A", { required: true}, true],
    ["本部分第1题", "#P2Q1S2R1", { required: false, maxlength: 100, NG: true }, true],
    ["本部分第1题", "#P2Q1S2R2", { required: false, maxlength: 100, NG: true }, true],
    ["本部分第1题", "#P2Q1S2R3", { required: false, maxlength: 100, NG: true }, true],
    ["本部分第2题", "#P2Q2A", { required: true}, true],
    ["本部分第2题", "#P2Q2S1A", { required: false}, true],
    ["本部分第2题", "#P2Q2S2A", { required: false}, true],
    ["本部分第2题", "#P2Q2S2R2", { required: false}, true],
    ["本部分第2题", "#P2Q2S3", { required: false}, true],
    ["本部分第3题", "#P2Q3A", { required: true}, true],
    ["本部分第4题", "#P2Q4A", { required: true}, true],
    ["本部分第5题", "#P2Q5A", { required: true}, true],
    ["本部分第5题", "#P2Q5other", { required: false, maxlength: 100, NG: true }, true],
    ["本部分第6题", "#P2Q6A", { required: true}, true],
    ["本部分第7题", "#P2Q7A", { required: true}, true],
    ["本部分第7题", "#P2Q7other", { required: false, maxlength: 100, NG: true }, true],
    ["本部分第8题", "#P2Q8A", { required: true}, true]
   

];
var part3 = [
    ["本部分第1题", "#P3Q1R1A", { required: false }, true],
    ["本部分第1题", "#P3Q1R2A", { required: false }, true],
    ["本部分第1题", "#P3Q1R3A", { required: false }, true],
    ["本部分第1题", "#P3Q1R4A", { required: false }, true],
    ["本部分第2题", "#P3Q2R1A", { required: false }, true],
    ["本部分第2题", "#P3Q2R2A", { required: false }, true],
    ["本部分第2题", "#P3Q2R3A", { required: false }, true],
    ["本部分第3题", "#P3Q3R1A", { required: false }, true],
    ["本部分第3题", "#P3Q3R2A", { required: false }, true],
    ["本部分第3题", "#P3Q3R3A", { required: false }, true],
    ["本部分第3题", "#P3Q3R4A", { required: false }, true],
    ["本部分第3题", "#P3Q3R5A", { required: false }, true],
    ["本部分第4题", "#P3Q4R1A", { required: false }, true],
    ["本部分第4题", "#P3Q4R2A", { required: false }, true],
    ["本部分第4题", "#P3Q4R3A", { required: false }, true],
    ["本部分第4题", "#P3Q4R4A", { required: false }, true],
    ["本部分第5题", "#P3Q5R1A", { required: false }, true],
    ["本部分第5题", "#P3Q5R2A", { required: false }, true],
    ["本部分第5题", "#P3Q5R3A", { required: false }, true],
    ["本部分第5题", "#P3Q5R4A", { required: false }, true],
    ["本部分第5题", "#P3Q5R5A", { required: false }, true],
    ["本部分第6题", "#P3Q6R1A", { required: false }, true],
    ["本部分第6题", "#P3Q6R2A", { required: false }, true],
    ["本部分第6题", "#P3Q6R3A", { required: false }, true],
    ["本部分第6题", "#P3Q6R4A", { required: false }, true],
    ["本部分第7题", "#P3Q7R1A", { required: true }, true],
    ["本部分第7题", "#P3Q7R2A", { required: true }, true],
    ["本部分第7题", "#P3Q7R3A", { required: true }, true],
    ["本部分第7题", "#P3Q7R4A", { required: true }, true],
    ["本部分第8题", "#P3Q8R1A", { required: true }, true],
    ["本部分第8题", "#P3Q8R2A", { required: true }, true],
    ["本部分第8题", "#P3Q8R3A", { required: true }, true],
    ["本部分第8题", "#P3Q8R4A", { required: true }, true]

];
var part4 = [
    ["本部分第1题", "#P4Q1R1A", { required: true}, true],
    ["本部分第1题", "#P4Q1R2A", { required: true}, true],
    ["本部分第1题", "#P4Q1R3A", { required: true}, true],
    ["本部分第1题", "#P4Q1R4A", { required: true}, true],
    ["本部分第1题", "#P4Q1R5A", { required: true}, true],
    ["本部分第1题", "#P4Q1R6A", { required: true}, true],
    ["本部分第1题", "#P4Q1R7A", { required: true}, true],
    ["本部分第1题", "#P4Q1R8A", { required: true}, true],
    ["本部分第1题", "#P4Q1R9A", { required: true}, true],
    ["本部分第2题", "#P4Q2R1A", { required: true}, true],
    ["本部分第2题", "#P4Q2R2A", { required: true}, true],
    ["本部分第2题", "#P4Q2R3A", { required: true}, true],
    ["本部分第2题", "#P4Q2R4A", { required: true}, true],
    ["本部分第2题", "#P4Q2R5A", { required: true}, true],
    ["本部分第3题", "#P4Q3R1A", { required: true}, true],
    ["本部分第3题", "#P4Q3R2A", { required: true}, true],
    ["本部分第3题", "#P4Q3R3A", { required: true}, true],
    ["本部分第3题", "#P4Q3R4A", { required: true}, true],
    ["本部分第3题", "#P4Q3R5A", { required: true}, true],
    ["本部分第3题", "#P4Q3R6A", { required: true}, true],
    ["本部分第3题", "#P4Q3R7A", { required: true}, true],
    ["本部分第3题", "#P4Q3R8A", { required: true}, true],
    ["本部分第4题", "#P4Q4", { required: true, maxlength: 500,  NG: true }, true]

];





Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
function changePart(obj){
    var ZArr=[];
    var partdata=obj.data;
    if(obj.attr=="bk"){
        ZArr=obj.BKArr
    }else if(obj.attr=="gz"){
        ZArr=obj.GZArr
    }
    for(var i=0;i<partdata.length;i++){
        for(var a=0;a<partdata[i].length;a++){
            if(ZArr.indexOf(partdata[i][a][1])!=-1){
                partdata[i][a][2].required=true
            }
        }
    }



}

//changePart({
//    data:[part0,part1,part2,part3,part4,part5,part6,part7],
//    BKArr:[
//        "#BK_P1Q1CR1",
//        "#BK_P1Q1CR2",
//        "#BK_P1Q2BR2A",
//        "#BK_P1Q2BR3A",
//        "#BK_P1Q2ER1A",
//        "#BK_P1Q2DR2A",
//        "#BK_P1Q6A",
//        "#BK_P2Q1FA",
//        "#BK_P2Q2ER1",
//        "#BK_P3Q7R1A",
//        "#BK_P3Q7R2A",
//        "#BK_P3Q7R3A",
//        "#BK_P3Q7R4A",
//        "#BK_P5Q6A",
//        "#BK_P6Q2R2"
//    ],
//    GZArr:[
//        "#GZ_P1Q1CR1",
//        "#GZ_P1Q2ER1A",
//        "#GZ_P1Q2ER2A",
//        "#GZ_P1Q2ER2B",
//        "#GZ_P2Q1EA",
//        "#GZ_P3Q7AR1",
//        "#GZ_P3Q7AR2",
//        "#GZ_P3Q7AR3",
//        "#GZ_P3Q7BR1",
//        "#GZ_P3Q7BR2",
//        "#GZ_P3Q7BR3",
//        "#GZ_P3Q7CA",
//        "#GZ_P3Q7DR1",
//        "#GZ_P3Q7DR2",
//        "#GZ_P3Q7EA",
//        "#GZ_P5Q5R11A",
//        "#GZ_P5Q5R12A",
//        "#GZ_P6Q4R5A",
//        "#GZ_P6Q4R6A",
//        "#GZ_P6Q4R7A",
//        "#GZ_P6Q4R8A",
//        "#GZ_P6Q4R9A",
//        "#GZ_P6Q4R10A",
//        "#GZ_P6Q4R11A"
//    ],
//    attr:GetUrlVarValue("dm")
//})