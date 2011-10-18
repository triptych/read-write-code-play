       YUI().use("node","event","yql" ,function(Y){
            Y.log("YUI loaded!");
            Y.on("domready", function(){
                return 0;

                   
            });

                Y.one(".read").setStyle("top", "-"+ parseInt(Y.one(".read").getStyle("height"))/2);
                Y.one(".read").setStyle("left", "-"+ parseInt(Y.one(".read").getStyle("width"))/2);

                Y.one(".write").setStyle("top", "-"+ parseInt(Y.one(".write").getStyle("height"))/2);
                Y.one(".write").setStyle("right", "-"+ parseInt(Y.one(".write").getStyle("width"))/2);

                Y.one(".code").setStyle("bottom", "-"+ parseInt(Y.one(".read").getStyle("height"))/2);
                Y.one(".code").setStyle("left", "-"+ parseInt(Y.one(".read").getStyle("width"))/2);

                Y.one(".play").setStyle("bottom", "-"+ parseInt(Y.one(".read").getStyle("height"))/2);
                Y.one(".play").setStyle("right", "-"+ parseInt(Y.one(".read").getStyle("width"))/2);

                Y.one(".question span").on("click", function(){
                    this.addClass("colorcycle");

                    Y.YQL('use "https://raw.github.com/triptych/read-write-code-play/master/src/yql/rwcp.xml" as table; select * from table where type="*" ', 
                        function(r){
                            var responseArr = r.query.results.result.data.results.row
                            var idx = Math.floor(Math.random() * responseArr.length);
                            var responseMsg = responseArr[idx];
                            var responseTxt = responseMsg.type + " : " + responseMsg.suggestion;
                            Y.one(".answer").setContent(responseTxt);
                            Y.one("body").addClass("showres");
                        });
                });

                Y.one("div.close").on("click", function(){
                    Y.one("body").removeClass("showres");
                    Y.one(".question span").removeClass("colorcycle");
                })

                Y.one("div.dismiss").on("click", function(){
                    Y.one("body").removeClass("showabout");

                });

                Y.one(".about").on("click", function(){
                    Y.one("body").addClass("showabout");
                })


            });
