//// Narendra Singh //////

function sortList() {
            var list, i, switching, b, shouldSwitch;
            list = document.getElementById("id01");
            switching = true;
            
            while (switching) {
                
                switching = false;
                b = list.getElementsByTagName("LI");
               
                for (i = 0; i < (b.length - 1); i++) {
                    
                    shouldSwitch = false;
                    
                    if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                       
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                   
                    b[i].parentNode.insertBefore(b[i + 1], b[i]);
                    switching = true;
                }
            }
        }

        function shuffle() {
            var list;
            list = document.getElementById("id01");
            switching = true;
            while (switching) {
                var array = new Array();
                switching = false;
                b = list.getElementsByTagName("LI");
                for (i = 0; i < (b.length); i++) {
                    array[i] = b[i].innerHTML;
                }
            }
            var currentIndex = array.length, temporaryValue, randomIndex;
            
            while (0 !== currentIndex) {
                
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
               
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            var rr = new Array();
            for (var i = 0; i < array.length; i++) {
                rr[i] = array[i];
            }
            var list1;
            list1 = document.getElementById("id01");
            switching1 = true;
            while (switching1) {

                switching1 = false;
                b = list1.getElementsByTagName("LI");
                for (i = 0; i < (rr.length); i++) {
                    b[i].innerHTML = rr[i];
                }
            }
        }