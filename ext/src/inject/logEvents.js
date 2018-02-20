console.log("success importing the logEvents code");    

var logEvents = function() {
    //var baseData = {};
    //baseData.startTime = Date.now(); 
    var eventLog = new Array();

    var participantID = "-1";
    var d = new Date();
    var time = d.getTime();

    return {

        setParticipantID: function(id) {
            participantID = id;
        },

        logGaze: function(data) {
            d =new Date()
            time = d.getTime();
            data["t"] = time;
            delete data["all"]
            eventLog.push(data);
        },

        pushGaze:function(data) {
            d =new Date()
            time = d.getTime();
            data["t"] = time;
            delete data["all"]
            var myStringOutput = JSON.stringify(data);
            var request = new XMLHttpRequest();
            request.open('POST', '/logging', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(myStringOutput);
            
            
        },

        printLog: function() {
            //return "this is a test";
            //for (i=0; i<eventLog.length; i++) {
            //    console.log(eventLog[i]) ;
            return myStringOutput = JSON.stringify(eventLog);    
        },

        pushLog: function() {
            var myStringOutput = JSON.stringify(eventLog);
            console.log(myStringOutput);
            var request = new XMLHttpRequest();
            request.open('POST', '/logging', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(myStringOutput);
            //var myjson = printLog();
            //return jQuery.ajax({type: "POST", url:'/logging/', data:myjson, contentType:'application/json'});
        },


        

    };
}();