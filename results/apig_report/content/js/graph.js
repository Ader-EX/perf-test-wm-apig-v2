/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2301.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 4.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 5.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 5.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 6.0], [18.1, 6.0], [18.2, 6.0], [18.3, 6.0], [18.4, 6.0], [18.5, 6.0], [18.6, 6.0], [18.7, 6.0], [18.8, 6.0], [18.9, 6.0], [19.0, 6.0], [19.1, 6.0], [19.2, 6.0], [19.3, 6.0], [19.4, 6.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 6.0], [20.0, 6.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 7.0], [26.2, 7.0], [26.3, 7.0], [26.4, 7.0], [26.5, 7.0], [26.6, 7.0], [26.7, 7.0], [26.8, 7.0], [26.9, 7.0], [27.0, 7.0], [27.1, 7.0], [27.2, 7.0], [27.3, 7.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 8.0], [34.0, 8.0], [34.1, 8.0], [34.2, 8.0], [34.3, 8.0], [34.4, 8.0], [34.5, 8.0], [34.6, 8.0], [34.7, 8.0], [34.8, 8.0], [34.9, 8.0], [35.0, 8.0], [35.1, 8.0], [35.2, 8.0], [35.3, 8.0], [35.4, 8.0], [35.5, 8.0], [35.6, 8.0], [35.7, 8.0], [35.8, 8.0], [35.9, 8.0], [36.0, 8.0], [36.1, 8.0], [36.2, 8.0], [36.3, 8.0], [36.4, 8.0], [36.5, 8.0], [36.6, 8.0], [36.7, 8.0], [36.8, 8.0], [36.9, 8.0], [37.0, 8.0], [37.1, 8.0], [37.2, 8.0], [37.3, 8.0], [37.4, 8.0], [37.5, 8.0], [37.6, 8.0], [37.7, 8.0], [37.8, 8.0], [37.9, 8.0], [38.0, 8.0], [38.1, 8.0], [38.2, 8.0], [38.3, 8.0], [38.4, 8.0], [38.5, 8.0], [38.6, 8.0], [38.7, 8.0], [38.8, 8.0], [38.9, 8.0], [39.0, 8.0], [39.1, 8.0], [39.2, 8.0], [39.3, 8.0], [39.4, 8.0], [39.5, 8.0], [39.6, 8.0], [39.7, 8.0], [39.8, 8.0], [39.9, 8.0], [40.0, 8.0], [40.1, 8.0], [40.2, 8.0], [40.3, 8.0], [40.4, 8.0], [40.5, 8.0], [40.6, 8.0], [40.7, 8.0], [40.8, 9.0], [40.9, 9.0], [41.0, 9.0], [41.1, 9.0], [41.2, 9.0], [41.3, 9.0], [41.4, 9.0], [41.5, 9.0], [41.6, 9.0], [41.7, 9.0], [41.8, 9.0], [41.9, 9.0], [42.0, 9.0], [42.1, 9.0], [42.2, 9.0], [42.3, 9.0], [42.4, 9.0], [42.5, 9.0], [42.6, 9.0], [42.7, 9.0], [42.8, 9.0], [42.9, 9.0], [43.0, 9.0], [43.1, 9.0], [43.2, 9.0], [43.3, 9.0], [43.4, 9.0], [43.5, 9.0], [43.6, 9.0], [43.7, 9.0], [43.8, 9.0], [43.9, 9.0], [44.0, 9.0], [44.1, 9.0], [44.2, 9.0], [44.3, 9.0], [44.4, 9.0], [44.5, 9.0], [44.6, 9.0], [44.7, 9.0], [44.8, 9.0], [44.9, 9.0], [45.0, 9.0], [45.1, 9.0], [45.2, 9.0], [45.3, 9.0], [45.4, 9.0], [45.5, 9.0], [45.6, 9.0], [45.7, 9.0], [45.8, 9.0], [45.9, 9.0], [46.0, 9.0], [46.1, 9.0], [46.2, 9.0], [46.3, 9.0], [46.4, 9.0], [46.5, 9.0], [46.6, 9.0], [46.7, 9.0], [46.8, 9.0], [46.9, 10.0], [47.0, 10.0], [47.1, 10.0], [47.2, 10.0], [47.3, 10.0], [47.4, 10.0], [47.5, 10.0], [47.6, 10.0], [47.7, 10.0], [47.8, 10.0], [47.9, 10.0], [48.0, 10.0], [48.1, 10.0], [48.2, 10.0], [48.3, 10.0], [48.4, 10.0], [48.5, 10.0], [48.6, 10.0], [48.7, 10.0], [48.8, 10.0], [48.9, 10.0], [49.0, 10.0], [49.1, 10.0], [49.2, 10.0], [49.3, 10.0], [49.4, 10.0], [49.5, 10.0], [49.6, 10.0], [49.7, 10.0], [49.8, 10.0], [49.9, 10.0], [50.0, 10.0], [50.1, 10.0], [50.2, 10.0], [50.3, 10.0], [50.4, 10.0], [50.5, 10.0], [50.6, 10.0], [50.7, 10.0], [50.8, 10.0], [50.9, 10.0], [51.0, 10.0], [51.1, 10.0], [51.2, 10.0], [51.3, 10.0], [51.4, 10.0], [51.5, 10.0], [51.6, 10.0], [51.7, 10.0], [51.8, 10.0], [51.9, 10.0], [52.0, 10.0], [52.1, 10.0], [52.2, 11.0], [52.3, 11.0], [52.4, 11.0], [52.5, 11.0], [52.6, 11.0], [52.7, 11.0], [52.8, 11.0], [52.9, 11.0], [53.0, 11.0], [53.1, 11.0], [53.2, 11.0], [53.3, 11.0], [53.4, 11.0], [53.5, 11.0], [53.6, 11.0], [53.7, 11.0], [53.8, 11.0], [53.9, 11.0], [54.0, 11.0], [54.1, 11.0], [54.2, 11.0], [54.3, 11.0], [54.4, 11.0], [54.5, 11.0], [54.6, 11.0], [54.7, 11.0], [54.8, 11.0], [54.9, 11.0], [55.0, 11.0], [55.1, 11.0], [55.2, 11.0], [55.3, 11.0], [55.4, 11.0], [55.5, 11.0], [55.6, 11.0], [55.7, 11.0], [55.8, 11.0], [55.9, 11.0], [56.0, 11.0], [56.1, 11.0], [56.2, 11.0], [56.3, 11.0], [56.4, 11.0], [56.5, 11.0], [56.6, 12.0], [56.7, 12.0], [56.8, 12.0], [56.9, 12.0], [57.0, 12.0], [57.1, 12.0], [57.2, 12.0], [57.3, 12.0], [57.4, 12.0], [57.5, 12.0], [57.6, 12.0], [57.7, 12.0], [57.8, 12.0], [57.9, 12.0], [58.0, 12.0], [58.1, 12.0], [58.2, 12.0], [58.3, 12.0], [58.4, 12.0], [58.5, 12.0], [58.6, 12.0], [58.7, 12.0], [58.8, 12.0], [58.9, 12.0], [59.0, 12.0], [59.1, 12.0], [59.2, 12.0], [59.3, 12.0], [59.4, 12.0], [59.5, 12.0], [59.6, 12.0], [59.7, 12.0], [59.8, 12.0], [59.9, 12.0], [60.0, 12.0], [60.1, 12.0], [60.2, 12.0], [60.3, 12.0], [60.4, 12.0], [60.5, 12.0], [60.6, 13.0], [60.7, 13.0], [60.8, 13.0], [60.9, 13.0], [61.0, 13.0], [61.1, 13.0], [61.2, 13.0], [61.3, 13.0], [61.4, 13.0], [61.5, 13.0], [61.6, 13.0], [61.7, 13.0], [61.8, 13.0], [61.9, 13.0], [62.0, 13.0], [62.1, 13.0], [62.2, 13.0], [62.3, 13.0], [62.4, 13.0], [62.5, 13.0], [62.6, 13.0], [62.7, 13.0], [62.8, 13.0], [62.9, 13.0], [63.0, 13.0], [63.1, 13.0], [63.2, 13.0], [63.3, 13.0], [63.4, 13.0], [63.5, 13.0], [63.6, 13.0], [63.7, 13.0], [63.8, 13.0], [63.9, 13.0], [64.0, 13.0], [64.1, 14.0], [64.2, 14.0], [64.3, 14.0], [64.4, 14.0], [64.5, 14.0], [64.6, 14.0], [64.7, 14.0], [64.8, 14.0], [64.9, 14.0], [65.0, 14.0], [65.1, 14.0], [65.2, 14.0], [65.3, 14.0], [65.4, 14.0], [65.5, 14.0], [65.6, 14.0], [65.7, 14.0], [65.8, 14.0], [65.9, 14.0], [66.0, 14.0], [66.1, 14.0], [66.2, 14.0], [66.3, 14.0], [66.4, 14.0], [66.5, 14.0], [66.6, 14.0], [66.7, 14.0], [66.8, 14.0], [66.9, 14.0], [67.0, 14.0], [67.1, 14.0], [67.2, 15.0], [67.3, 15.0], [67.4, 15.0], [67.5, 15.0], [67.6, 15.0], [67.7, 15.0], [67.8, 15.0], [67.9, 15.0], [68.0, 15.0], [68.1, 15.0], [68.2, 15.0], [68.3, 15.0], [68.4, 15.0], [68.5, 15.0], [68.6, 15.0], [68.7, 15.0], [68.8, 15.0], [68.9, 15.0], [69.0, 15.0], [69.1, 15.0], [69.2, 15.0], [69.3, 15.0], [69.4, 15.0], [69.5, 15.0], [69.6, 15.0], [69.7, 15.0], [69.8, 15.0], [69.9, 16.0], [70.0, 16.0], [70.1, 16.0], [70.2, 16.0], [70.3, 16.0], [70.4, 16.0], [70.5, 16.0], [70.6, 16.0], [70.7, 16.0], [70.8, 16.0], [70.9, 16.0], [71.0, 16.0], [71.1, 16.0], [71.2, 16.0], [71.3, 16.0], [71.4, 16.0], [71.5, 16.0], [71.6, 16.0], [71.7, 16.0], [71.8, 16.0], [71.9, 16.0], [72.0, 16.0], [72.1, 16.0], [72.2, 16.0], [72.3, 17.0], [72.4, 17.0], [72.5, 17.0], [72.6, 17.0], [72.7, 17.0], [72.8, 17.0], [72.9, 17.0], [73.0, 17.0], [73.1, 17.0], [73.2, 17.0], [73.3, 17.0], [73.4, 17.0], [73.5, 17.0], [73.6, 17.0], [73.7, 17.0], [73.8, 17.0], [73.9, 17.0], [74.0, 17.0], [74.1, 17.0], [74.2, 17.0], [74.3, 17.0], [74.4, 17.0], [74.5, 18.0], [74.6, 18.0], [74.7, 18.0], [74.8, 18.0], [74.9, 18.0], [75.0, 18.0], [75.1, 18.0], [75.2, 18.0], [75.3, 18.0], [75.4, 18.0], [75.5, 18.0], [75.6, 18.0], [75.7, 18.0], [75.8, 18.0], [75.9, 18.0], [76.0, 18.0], [76.1, 18.0], [76.2, 18.0], [76.3, 18.0], [76.4, 19.0], [76.5, 19.0], [76.6, 19.0], [76.7, 19.0], [76.8, 19.0], [76.9, 19.0], [77.0, 19.0], [77.1, 19.0], [77.2, 19.0], [77.3, 19.0], [77.4, 19.0], [77.5, 19.0], [77.6, 19.0], [77.7, 19.0], [77.8, 19.0], [77.9, 19.0], [78.0, 20.0], [78.1, 20.0], [78.2, 20.0], [78.3, 20.0], [78.4, 20.0], [78.5, 20.0], [78.6, 20.0], [78.7, 20.0], [78.8, 20.0], [78.9, 20.0], [79.0, 20.0], [79.1, 20.0], [79.2, 20.0], [79.3, 20.0], [79.4, 20.0], [79.5, 20.0], [79.6, 21.0], [79.7, 21.0], [79.8, 21.0], [79.9, 21.0], [80.0, 21.0], [80.1, 21.0], [80.2, 21.0], [80.3, 21.0], [80.4, 21.0], [80.5, 21.0], [80.6, 21.0], [80.7, 21.0], [80.8, 21.0], [80.9, 22.0], [81.0, 22.0], [81.1, 22.0], [81.2, 22.0], [81.3, 22.0], [81.4, 22.0], [81.5, 22.0], [81.6, 22.0], [81.7, 22.0], [81.8, 22.0], [81.9, 22.0], [82.0, 22.0], [82.1, 23.0], [82.2, 23.0], [82.3, 23.0], [82.4, 23.0], [82.5, 23.0], [82.6, 23.0], [82.7, 23.0], [82.8, 23.0], [82.9, 23.0], [83.0, 23.0], [83.1, 23.0], [83.2, 24.0], [83.3, 24.0], [83.4, 24.0], [83.5, 24.0], [83.6, 24.0], [83.7, 24.0], [83.8, 24.0], [83.9, 24.0], [84.0, 24.0], [84.1, 24.0], [84.2, 25.0], [84.3, 25.0], [84.4, 25.0], [84.5, 25.0], [84.6, 25.0], [84.7, 25.0], [84.8, 25.0], [84.9, 25.0], [85.0, 25.0], [85.1, 26.0], [85.2, 26.0], [85.3, 26.0], [85.4, 26.0], [85.5, 26.0], [85.6, 26.0], [85.7, 26.0], [85.8, 26.0], [85.9, 27.0], [86.0, 27.0], [86.1, 27.0], [86.2, 27.0], [86.3, 27.0], [86.4, 27.0], [86.5, 27.0], [86.6, 28.0], [86.7, 28.0], [86.8, 28.0], [86.9, 28.0], [87.0, 28.0], [87.1, 28.0], [87.2, 28.0], [87.3, 29.0], [87.4, 29.0], [87.5, 29.0], [87.6, 29.0], [87.7, 29.0], [87.8, 29.0], [87.9, 29.0], [88.0, 30.0], [88.1, 30.0], [88.2, 30.0], [88.3, 30.0], [88.4, 30.0], [88.5, 30.0], [88.6, 31.0], [88.7, 31.0], [88.8, 31.0], [88.9, 31.0], [89.0, 31.0], [89.1, 31.0], [89.2, 32.0], [89.3, 32.0], [89.4, 32.0], [89.5, 32.0], [89.6, 32.0], [89.7, 33.0], [89.8, 33.0], [89.9, 33.0], [90.0, 33.0], [90.1, 33.0], [90.2, 34.0], [90.3, 34.0], [90.4, 34.0], [90.5, 34.0], [90.6, 35.0], [90.7, 35.0], [90.8, 35.0], [90.9, 35.0], [91.0, 35.0], [91.1, 36.0], [91.2, 36.0], [91.3, 36.0], [91.4, 36.0], [91.5, 37.0], [91.6, 37.0], [91.7, 37.0], [91.8, 38.0], [91.9, 38.0], [92.0, 38.0], [92.1, 38.0], [92.2, 39.0], [92.3, 39.0], [92.4, 39.0], [92.5, 40.0], [92.6, 40.0], [92.7, 40.0], [92.8, 41.0], [92.9, 41.0], [93.0, 41.0], [93.1, 42.0], [93.2, 42.0], [93.3, 42.0], [93.4, 43.0], [93.5, 43.0], [93.6, 44.0], [93.7, 44.0], [93.8, 45.0], [93.9, 45.0], [94.0, 45.0], [94.1, 46.0], [94.2, 46.0], [94.3, 47.0], [94.4, 47.0], [94.5, 48.0], [94.6, 48.0], [94.7, 49.0], [94.8, 50.0], [94.9, 50.0], [95.0, 51.0], [95.1, 51.0], [95.2, 52.0], [95.3, 53.0], [95.4, 53.0], [95.5, 54.0], [95.6, 55.0], [95.7, 56.0], [95.8, 56.0], [95.9, 57.0], [96.0, 58.0], [96.1, 59.0], [96.2, 60.0], [96.3, 61.0], [96.4, 62.0], [96.5, 63.0], [96.6, 64.0], [96.7, 65.0], [96.8, 66.0], [96.9, 67.0], [97.0, 68.0], [97.1, 70.0], [97.2, 71.0], [97.3, 73.0], [97.4, 74.0], [97.5, 76.0], [97.6, 77.0], [97.7, 79.0], [97.8, 80.0], [97.9, 82.0], [98.0, 85.0], [98.1, 87.0], [98.2, 89.0], [98.3, 92.0], [98.4, 95.0], [98.5, 99.0], [98.6, 102.0], [98.7, 106.0], [98.8, 111.0], [98.9, 116.0], [99.0, 122.0], [99.1, 129.0], [99.2, 137.0], [99.3, 146.0], [99.4, 158.0], [99.5, 172.0], [99.6, 191.0], [99.7, 226.0], [99.8, 279.0], [99.9, 366.0], [100.0, 2301.0]], "isOverall": false, "label": "GET /api-test", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 945666.0, "series": [{"data": [[0.0, 945666.0], [2100.0, 53.0], [2300.0, 1.0], [600.0, 149.0], [700.0, 76.0], [200.0, 1967.0], [800.0, 11.0], [900.0, 2.0], [1100.0, 2.0], [300.0, 857.0], [1200.0, 66.0], [1300.0, 18.0], [1400.0, 8.0], [1500.0, 8.0], [100.0, 10621.0], [400.0, 152.0], [1700.0, 26.0], [1800.0, 20.0], [500.0, 138.0]], "isOverall": false, "label": "GET /api-test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 108.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 959263.0, "series": [{"data": [[0.0, 959263.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 470.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 108.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 45.58391739134627, "minX": 1.7758131E12, "maxY": 177.3353739051392, "series": [{"data": [[1.77581316E12, 49.0540282677671], [1.77581322E12, 99.67846853124891]], "isOverall": false, "label": "Phase 2 - 100 Users (Medium)", "isController": false}, {"data": [[1.77581316E12, 49.99464630621055], [1.7758131E12, 45.58391739134627]], "isOverall": false, "label": "Phase 1 - 50 Users (Baseline)", "isController": false}, {"data": [[1.77581328E12, 177.3353739051392], [1.77581322E12, 48.80268779053796]], "isOverall": false, "label": "Phase 3 - 200 Users (Peak)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77581328E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.9352112676056346, "minX": 1.0, "maxY": 52.414159292035414, "series": [{"data": [[2.0, 1.9352112676056346], [3.0, 2.1861804222648735], [4.0, 4.620000000000004], [5.0, 2.8691489361702116], [6.0, 3.2858617131062964], [7.0, 2.8959627329192585], [8.0, 3.119170984455959], [9.0, 3.8245210727969448], [10.0, 4.030105777054507], [11.0, 4.273247496423457], [12.0, 4.292237442922364], [13.0, 4.102076124567482], [14.0, 4.703435804701633], [15.0, 4.83312807881773], [16.0, 4.882160392798695], [17.0, 5.031118143459929], [18.0, 4.062944162436538], [19.0, 6.120879120879107], [20.0, 4.9912683823529385], [21.0, 5.843733613004711], [22.0, 6.061463414634148], [23.0, 5.475834797891036], [24.0, 4.977024482109224], [25.0, 7.458211572180025], [26.0, 7.7866735537190195], [27.0, 6.464118895966022], [28.0, 5.690841121495326], [29.0, 6.095622119815656], [30.0, 5.654790729851271], [31.0, 5.5752794214332715], [32.0, 6.622711991034746], [33.0, 6.2133605998636705], [34.0, 5.525468384074948], [35.0, 5.867801857585145], [36.0, 6.961140819964346], [37.0, 6.972440944881895], [38.0, 7.478155339805827], [39.0, 6.876953774526098], [40.0, 7.786593707250353], [41.0, 7.423963133640549], [42.0, 7.857823129251698], [43.0, 9.090803709428128], [44.0, 8.61698316015764], [45.0, 7.98095545513233], [46.0, 7.46044864226683], [47.0, 7.377771379211048], [48.0, 8.457170356111671], [49.0, 10.706709521896359], [50.0, 8.141543552235634], [51.0, 9.125891946992876], [52.0, 9.056140350877198], [53.0, 7.837160751565768], [54.0, 9.279606879606884], [55.0, 8.83916401635621], [56.0, 10.163381742738594], [57.0, 9.063463281958308], [58.0, 10.062193927522044], [59.0, 9.342883548983355], [60.0, 9.63536417773709], [61.0, 9.319628647214861], [62.0, 9.132051817801925], [63.0, 10.369339622641496], [64.0, 9.494223363286274], [65.0, 11.162893700787423], [66.0, 11.042360780580667], [67.0, 10.967296176877012], [68.0, 9.701139721401463], [69.0, 10.50340715502553], [70.0, 9.93956953642384], [71.0, 10.386578839028417], [72.0, 10.325769854132899], [73.0, 10.212219959266825], [74.0, 11.338189845474611], [75.0, 11.600700525394048], [76.0, 11.389816003423185], [77.0, 12.977725118483427], [78.0, 11.846493162770166], [79.0, 11.133252328878116], [80.0, 13.457240038872683], [81.0, 14.068271119842839], [82.0, 13.211431226765825], [83.0, 14.756535110199918], [84.0, 14.401492537313432], [85.0, 16.292050691244246], [86.0, 15.999999999999977], [87.0, 14.620338983050884], [88.0, 16.427952329360778], [89.0, 20.302225412778164], [90.0, 19.730746960046325], [91.0, 18.09391007398976], [92.0, 14.68577680525165], [93.0, 14.093453510436438], [94.0, 19.92771770062602], [95.0, 16.064163498098914], [96.0, 15.661566991191465], [97.0, 13.646321746160046], [98.0, 14.961405030355596], [99.0, 17.520059435364015], [100.0, 22.07604166666656], [101.0, 15.981481481481476], [102.0, 12.379143088116415], [103.0, 13.547661870503592], [104.0, 17.23484848484846], [105.0, 15.401990049751225], [106.0, 17.42136854741896], [107.0, 19.227477477477482], [108.0, 17.66841552990555], [109.0, 17.059096176129792], [110.0, 21.220338983050834], [111.0, 20.101219512195126], [112.0, 21.640668523676872], [113.0, 20.475717439293568], [114.0, 18.023454157782524], [115.0, 20.10336538461537], [116.0, 17.966733870967715], [117.0, 18.161132812500018], [118.0, 17.703141928494016], [119.0, 23.76575505350776], [120.0, 19.701123595505617], [121.0, 20.280350438047545], [122.0, 19.634558093346545], [123.0, 18.186213991769524], [124.0, 19.497000000000003], [125.0, 22.688405797101453], [126.0, 23.10044977511244], [127.0, 21.00391006842623], [128.0, 19.038461538461544], [129.0, 21.997740112994325], [130.0, 20.33403805496831], [131.0, 21.295503211991427], [132.0, 17.79158699808797], [133.0, 19.371794871794886], [134.0, 21.76536312849165], [135.0, 24.226666666666684], [136.0, 20.860286028602864], [137.0, 23.288209606986907], [138.0, 18.316430020283974], [139.0, 22.844791666666687], [140.0, 27.631578947368407], [141.0, 21.629822732012517], [142.0, 22.97710843373494], [143.0, 22.01626794258373], [144.0, 23.05786026200872], [145.0, 24.236585365853667], [146.0, 25.16115702479339], [147.0, 24.12615740740739], [148.0, 23.803534303534335], [149.0, 23.13844621513942], [150.0, 27.921968787515016], [151.0, 22.293225480283095], [152.0, 19.761146496815275], [153.0, 28.057173678532923], [154.0, 23.163245356793727], [155.0, 24.849933598937586], [156.0, 28.51840490797544], [157.0, 24.680538555691548], [158.0, 29.46276595744682], [159.0, 23.042553191489365], [160.0, 23.783715012722627], [161.0, 31.024417314095405], [162.0, 37.980273141122915], [163.0, 35.46930422919514], [164.0, 27.157381615598887], [165.0, 31.307609860664474], [166.0, 25.930930930930945], [167.0, 26.053364269141504], [168.0, 31.70364741641336], [169.0, 33.72055674518198], [170.0, 24.58974358974361], [171.0, 32.57458563535917], [172.0, 28.883668903803116], [173.0, 27.264091858037574], [174.0, 26.522123893805308], [175.0, 25.109988776655456], [176.0, 24.841285296981532], [177.0, 30.688622754490993], [178.0, 28.646387832699613], [179.0, 29.710097719869694], [180.0, 36.10909090909091], [181.0, 27.764642082429514], [182.0, 28.48502994011973], [183.0, 27.557377049180317], [184.0, 38.35251798561152], [185.0, 32.3679245283019], [186.0, 52.414159292035414], [187.0, 34.650632911392385], [188.0, 35.19203747072601], [189.0, 29.9547079856973], [190.0, 29.244821092278727], [191.0, 34.08581644815255], [192.0, 41.53598014888335], [193.0, 24.525474525474504], [194.0, 35.721596724667386], [195.0, 36.800295857988154], [196.0, 27.375614552605732], [197.0, 30.935672514619906], [198.0, 33.386969397828224], [199.0, 23.612043435340585], [200.0, 35.955738692987076], [1.0, 2.238372093023255]], "isOverall": false, "label": "GET /api-test", "isController": false}, {"data": [[95.46473322143926, 17.44861701052525]], "isOverall": false, "label": "GET /api-test-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 217289.58333333334, "minX": 1.7758131E12, "maxY": 1329143.6, "series": [{"data": [[1.77581328E12, 567991.6666666666], [1.77581316E12, 669931.25], [1.77581322E12, 544456.25], [1.7758131E12, 217289.58333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77581328E12, 1126895.4666666666], [1.77581316E12, 1329143.6], [1.77581322E12, 1080201.2], [1.7758131E12, 431102.5333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77581328E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 8.215479200291012, "minX": 1.7758131E12, "maxY": 31.061173139276875, "series": [{"data": [[1.77581328E12, 31.061173139276875], [1.77581316E12, 8.215479200291012], [1.77581322E12, 18.182490940885042], [1.7758131E12, 8.493686420771104]], "isOverall": false, "label": "GET /api-test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77581328E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 8.213815472358455, "minX": 1.7758131E12, "maxY": 31.05947490426741, "series": [{"data": [[1.77581328E12, 31.05947490426741], [1.77581316E12, 8.213815472358455], [1.77581322E12, 18.18097184117182], [1.7758131E12, 8.491001831273561]], "isOverall": false, "label": "GET /api-test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77581328E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 5.317709839629066E-4, "minX": 1.7758131E12, "maxY": 8.533159474203991E-4, "series": [{"data": [[1.77581328E12, 6.162062236828692E-4], [1.77581316E12, 5.317709839629066E-4], [1.77581322E12, 6.045787272469832E-4], [1.7758131E12, 8.533159474203991E-4]], "isOverall": false, "label": "GET /api-test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77581328E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.7758131E12, "maxY": 2301.0, "series": [{"data": [[1.77581328E12, 636.0], [1.77581316E12, 265.0], [1.77581322E12, 2301.0], [1.7758131E12, 661.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77581328E12, 1.0], [1.77581316E12, 1.0], [1.77581322E12, 1.0], [1.7758131E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77581328E12, 66.0], [1.77581316E12, 25.0], [1.77581322E12, 18.0], [1.7758131E12, 12.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77581328E12, 163.0], [1.77581316E12, 58.0], [1.77581322E12, 33.0], [1.7758131E12, 23.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77581328E12, 21.0], [1.77581316E12, 12.0], [1.77581322E12, 10.0], [1.7758131E12, 7.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77581328E12, 97.0], [1.77581316E12, 32.0], [1.77581322E12, 22.0], [1.7758131E12, 14.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77581328E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 337.0, "maxY": 113.0, "series": [{"data": [[337.0, 88.0], [544.0, 29.0], [545.0, 113.0], [714.0, 6.0], [793.0, 2.0], [807.0, 7.0], [1004.0, 2.0], [1162.0, 8.0], [1391.0, 16.0], [1718.0, 11.0], [1804.0, 7.0], [1897.0, 13.0], [2023.0, 30.0], [2400.0, 16.0], [2326.0, 15.0], [2547.0, 2.0], [2434.0, 17.0], [2635.0, 8.0], [2575.0, 15.0], [2938.0, 6.0], [2977.0, 22.0], [3243.0, 58.0], [3535.0, 19.0], [3648.0, 3.0], [3669.0, 15.0], [3684.0, 17.0], [3614.0, 2.0], [3920.0, 15.0], [3944.0, 47.0], [3996.0, 10.0], [3976.0, 16.0], [4026.0, 32.0], [4159.0, 10.0], [4129.0, 11.0], [4327.0, 13.0], [4349.0, 4.0], [4333.0, 5.0], [4469.0, 6.0], [4494.0, 9.0], [4416.0, 9.0], [4465.0, 3.0], [4377.0, 16.0], [4508.0, 15.0], [4483.0, 3.0], [4566.0, 18.0], [4449.0, 40.0], [4843.0, 17.0], [4641.0, 4.0], [4776.0, 8.0], [4705.0, 15.0], [4652.0, 13.0], [4784.0, 17.0], [4810.0, 20.0], [4732.0, 20.0], [4611.0, 40.0], [5104.0, 7.0], [4973.0, 8.0], [5086.0, 14.0], [4926.0, 14.0], [4960.0, 16.0], [5119.0, 17.0], [5150.0, 9.0], [5191.0, 9.0], [5241.0, 6.0], [5147.0, 8.0], [5362.0, 8.0], [5304.0, 6.0], [5208.0, 13.0], [5314.0, 14.0], [5170.0, 19.0], [5154.0, 27.0], [5488.0, 8.0], [5437.0, 8.0], [5432.0, 16.0], [5438.0, 18.0], [5427.0, 18.0], [5597.0, 23.0], [5865.0, 15.0], [5775.0, 7.0], [5655.0, 5.0], [5788.0, 8.0], [5736.0, 8.0], [5716.0, 16.0], [5707.0, 16.0], [5714.0, 29.0], [5845.0, 8.0], [5656.0, 14.0], [5666.0, 24.0], [5676.0, 7.0], [5779.0, 5.0], [5809.0, 7.0], [5818.0, 20.0], [5881.0, 13.0], [5760.0, 5.0], [6081.0, 18.0], [6028.0, 7.0], [6075.0, 10.0], [5982.0, 7.0], [6015.0, 8.0], [5894.0, 7.0], [5925.0, 23.0], [5927.0, 32.0], [5981.0, 4.0], [5977.0, 18.0], [5978.0, 21.0], [6048.0, 15.0], [6073.0, 16.0], [6105.0, 15.0], [6141.0, 17.0], [6168.0, 7.0], [6283.0, 7.0], [6313.0, 7.0], [6279.0, 7.0], [6388.0, 19.0], [6281.0, 21.0], [6152.0, 7.0], [6248.0, 9.0], [6223.0, 8.0], [6194.0, 10.0], [6352.0, 22.0], [6173.0, 19.0], [6364.0, 19.0], [6284.0, 11.0], [6312.0, 12.0], [6147.0, 14.0], [6418.0, 7.0], [6509.0, 7.0], [6645.0, 7.0], [6441.0, 7.0], [6429.0, 23.0], [6455.0, 8.0], [6505.0, 7.0], [6500.0, 11.0], [6417.0, 7.0], [6516.0, 7.0], [6400.0, 23.0], [6414.0, 16.5], [6586.0, 7.0], [6576.0, 7.0], [6546.0, 7.0], [6536.0, 13.0], [6533.0, 7.0], [6556.0, 12.0], [6570.0, 23.0], [6681.0, 7.0], [6785.0, 7.0], [6852.0, 13.0], [6854.0, 10.0], [6703.0, 9.0], [6674.0, 7.0], [6671.0, 22.0], [6843.0, 7.0], [6845.0, 24.0], [6817.0, 7.0], [6788.0, 7.0], [6790.0, 18.0], [6776.0, 7.0], [6664.0, 13.0], [6666.0, 7.0], [6767.0, 7.0], [6766.0, 9.0], [6761.0, 12.0], [6727.0, 19.0], [7119.0, 12.0], [7150.0, 6.0], [7076.0, 6.0], [6990.0, 6.0], [6912.0, 13.0], [7052.0, 6.0], [6959.0, 6.0], [6916.0, 12.0], [7121.0, 13.0], [7146.0, 16.0], [7066.0, 10.0], [7178.0, 6.0], [7410.0, 11.0], [7644.0, 11.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7644.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 337.0, "maxY": 113.0, "series": [{"data": [[337.0, 88.0], [544.0, 29.0], [545.0, 113.0], [714.0, 6.0], [793.0, 2.0], [807.0, 7.0], [1004.0, 2.0], [1162.0, 8.0], [1391.0, 16.0], [1718.0, 11.0], [1804.0, 7.0], [1897.0, 13.0], [2023.0, 30.0], [2400.0, 16.0], [2326.0, 15.0], [2547.0, 2.0], [2434.0, 17.0], [2635.0, 8.0], [2575.0, 15.0], [2938.0, 6.0], [2977.0, 22.0], [3243.0, 58.0], [3535.0, 19.0], [3648.0, 3.0], [3669.0, 15.0], [3684.0, 17.0], [3614.0, 2.0], [3920.0, 15.0], [3944.0, 47.0], [3996.0, 10.0], [3976.0, 16.0], [4026.0, 32.0], [4159.0, 10.0], [4129.0, 11.0], [4327.0, 13.0], [4349.0, 4.0], [4333.0, 5.0], [4469.0, 6.0], [4494.0, 9.0], [4416.0, 9.0], [4465.0, 3.0], [4377.0, 16.0], [4508.0, 15.0], [4483.0, 3.0], [4566.0, 18.0], [4449.0, 40.0], [4843.0, 17.0], [4641.0, 4.0], [4776.0, 8.0], [4705.0, 15.0], [4652.0, 13.0], [4784.0, 17.0], [4810.0, 20.0], [4732.0, 20.0], [4611.0, 40.0], [5104.0, 7.0], [4973.0, 8.0], [5086.0, 14.0], [4926.0, 14.0], [4960.0, 16.0], [5119.0, 17.0], [5150.0, 9.0], [5191.0, 9.0], [5241.0, 6.0], [5147.0, 8.0], [5362.0, 8.0], [5304.0, 6.0], [5208.0, 13.0], [5314.0, 14.0], [5170.0, 19.0], [5154.0, 27.0], [5488.0, 8.0], [5437.0, 8.0], [5432.0, 16.0], [5438.0, 18.0], [5427.0, 18.0], [5597.0, 23.0], [5865.0, 15.0], [5775.0, 7.0], [5655.0, 5.0], [5788.0, 8.0], [5736.0, 8.0], [5716.0, 16.0], [5707.0, 16.0], [5714.0, 29.0], [5845.0, 8.0], [5656.0, 14.0], [5666.0, 24.0], [5676.0, 7.0], [5779.0, 5.0], [5809.0, 7.0], [5818.0, 20.0], [5881.0, 13.0], [5760.0, 5.0], [6081.0, 18.0], [6028.0, 7.0], [6075.0, 10.0], [5982.0, 7.0], [6015.0, 8.0], [5894.0, 7.0], [5925.0, 23.0], [5927.0, 32.0], [5981.0, 4.0], [5977.0, 18.0], [5978.0, 21.0], [6048.0, 15.0], [6073.0, 16.0], [6105.0, 15.0], [6141.0, 17.0], [6168.0, 7.0], [6283.0, 7.0], [6313.0, 7.0], [6279.0, 7.0], [6388.0, 19.0], [6281.0, 21.0], [6152.0, 7.0], [6248.0, 9.0], [6223.0, 8.0], [6194.0, 10.0], [6352.0, 22.0], [6173.0, 19.0], [6364.0, 19.0], [6284.0, 11.0], [6312.0, 12.0], [6147.0, 14.0], [6418.0, 7.0], [6509.0, 7.0], [6645.0, 7.0], [6441.0, 7.0], [6429.0, 23.0], [6455.0, 8.0], [6505.0, 7.0], [6500.0, 11.0], [6417.0, 7.0], [6516.0, 7.0], [6400.0, 23.0], [6414.0, 16.5], [6586.0, 7.0], [6576.0, 7.0], [6546.0, 7.0], [6536.0, 13.0], [6533.0, 7.0], [6556.0, 12.0], [6570.0, 23.0], [6681.0, 7.0], [6785.0, 7.0], [6852.0, 13.0], [6854.0, 10.0], [6703.0, 9.0], [6674.0, 7.0], [6671.0, 22.0], [6843.0, 7.0], [6845.0, 24.0], [6817.0, 7.0], [6788.0, 7.0], [6790.0, 18.0], [6776.0, 7.0], [6664.0, 13.0], [6666.0, 7.0], [6767.0, 7.0], [6766.0, 9.0], [6761.0, 12.0], [6727.0, 19.0], [7119.0, 12.0], [7150.0, 6.0], [7076.0, 6.0], [6990.0, 6.0], [6912.0, 13.0], [7052.0, 6.0], [6959.0, 6.0], [6916.0, 12.0], [7121.0, 13.0], [7146.0, 16.0], [7066.0, 10.0], [7178.0, 6.0], [7410.0, 11.0], [7644.0, 11.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7644.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1739.15, "minX": 1.7758131E12, "maxY": 5360.1, "series": [{"data": [[1.77581328E12, 4542.516666666666], [1.77581316E12, 5360.1], [1.77581322E12, 4355.583333333333], [1.7758131E12, 1739.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77581328E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1738.3166666666666, "minX": 1.7758131E12, "maxY": 5359.45, "series": [{"data": [[1.77581328E12, 4543.933333333333], [1.77581316E12, 5359.45], [1.77581322E12, 4355.65], [1.7758131E12, 1738.3166666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77581328E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1738.3166666666666, "minX": 1.7758131E12, "maxY": 5359.45, "series": [{"data": [[1.77581328E12, 4543.933333333333], [1.77581316E12, 5359.45], [1.77581322E12, 4355.65], [1.7758131E12, 1738.3166666666666]], "isOverall": false, "label": "GET /api-test-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77581328E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1738.3166666666666, "minX": 1.7758131E12, "maxY": 5359.45, "series": [{"data": [[1.77581328E12, 4543.933333333333], [1.77581316E12, 5359.45], [1.77581322E12, 4355.65], [1.7758131E12, 1738.3166666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77581328E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

