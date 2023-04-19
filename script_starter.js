
// Set the dimensions and margins of the graph. You don't need to change this.
const margin = {top: 30, right: 30, bottom: 70, left: 60},
width = 500 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;


/* SVG_SCATTER WILL REPRESENT THE CANVAS THAT YOUR SCATTERPLOT WILL BE DRAWN ON */
// Append the svg object to the body of the page. You don't need to change this.
const svg_scatter = d3.select("#my_scatterplot")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

// *NEW*: Canvas for the scatterplot legend
// You can change properties of the SVG if you'd like, but it's not necessary
const svg_scatter_legend = d3.select("#scatterplot_legend")
                .append("svg")
                .attr("width", 500)
                .attr("height", 50)
                .append("g")
                .attr("transform", `translate(${margin.left + 55},${margin.top - 10})`);

/* SVG_BAR WILL REPRESENT THE CANVAS THAT YOUR BARCHART WILL BE DRAWN ON */
// Append the svg object to the body of the page. You don't need to change this.
const svg_bar = d3.select("#my_barchart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

// *NEW*: Canvas for the barchart legend
// You can change properties of the SVG if you'd like, but it's not necessary
const svg_bar_legend = d3.select("#barchart_legend")
                .append("svg")
                .attr("width", 500)
                .attr("height", 50)
                .append("g")
                .attr("transform", `translate(${margin.left + 55},${margin.top - 10})`);


// Read the iris dataset
d3.csv("/iris.csv").then(function(data){

    /**********************************************************  
     TO DO: Complete the scatter plot tasks

     NOTE: Below, we outline "to do" tasks that correspond
     to the tasks in your handout. These to do's are meant
     to help guide you towards a correct solution, however,
     you may implement your code in whichever way you'd like.
    **********************************************************/

    // TO DO: Create a list of options for the axes dropdowns (all numerical attribute)
    var scatterAxesOptions = ["test1", "test2"];

    // add the options to the X-axis dropdown
    // The below code should not need to be changed
    d3.select("#xAxisDropdown")
      .selectAll('option')
     	.data(scatterAxesOptions)
      .enter()
    	.append('option')
      .attr("value", function (d) { return d; }) // corresponding value returned by the button
      .text(function (d) { return d; }) // text showed in the menu
    // assign dropdown value to the selected y axis
    var selectedXAxisOption = d3.select("#xAxisDropdown").property("value")

    // TO DO: add the options to the Y-axis dropdown, fix below
    // d3.select(...)

    // TO DO: define the selectedYAxisOption
    var selectedYAxisOption;

    // TO DO: Create a legend for the scatterplot
    // scatter_color_classes is an array of objects, with iris varieties and their colors
    // change this if you used different colors in your scatterplot
    var scatter_color_classes = [{variety: "Versicolor", color:"#a6cee3"} , 
                                 {variety:"Virginica", color:"#b2df8a"}, 
                                 {variety:"Setosa", color:"#1f78b4"}]
    
    // draw the colored dots
    svg_scatter_legend.append("g")
        .selectAll("dot")
        .data(scatter_color_classes)
        .join("circle")
        // TO DO: FINISH THESE
        // Hint for cx: you might want to utilize i (the index being iterated on for the current datum)
        // .attr("cx", function(d, i) {...})
        // .attr("cy", ...)
        // .attr("r", ...)
        // .attr("stroke", ...)
        // .attr("stroke-weight", ...)
        // .style("fill", function(d) {return ...})

    // create the legend title
    svg_scatter_legend.append("text")
        // TO DO: FINISH THESE
        // .attr("x", ...)
        // .attr("y", ...)
        // .text(...)
        .style("font-size", "12px")
        .attr("alignment-baseline","middle")

    // add text labels for the dots in the legend 
    // TO DO: Finish these
    svg_scatter_legend.selectAll("legend.label")
        // .data(...)
        // .enter()
        // .append("text")
        // .attr("x", function(d, i) {...})             
        // .attr("y", ...)
        // .style("font-size", "12px")
        // .attr("alignment-baseline","middle")
        // .text(function (d) { 
        //     return ...;
        // });
    
    // Call drawScatter() here to draw the first instance of our plot
    drawScatter();


    /************************************************************************************
        drawScatter(): updates the scatterplot after a dropdown menu item is selected
        Special note: This function needs to wrap around your entire scatter plot code
        and be called after a dropdown menu item is selected. If not, the plot won't
        be updated accordingly, as the scatterplot will otherwise only be drawn once 
    *************************************************************************************/
    // ADD YOUR SCATTERPLOT CODE HERE AND UPDATE IT FOR THE TASKS
    function drawScatter() {
        // THIS LINE CLEARS THE SCATTERPLOT CANVAS, as they are redrawn every time a dropdown is selected 
        // Although this is a bit of a hacky workaround, this line will simplify everything for you down the line. 
        svg_scatter.selectAll('*').remove();

        // TO DO: Compute x-axis min and max using dropdown choice
        // HINT: It may help to do...
            // var x_axis_min = d3.min(data, function(d){return d[selectedXAxisOption]});
            //  var x_axis_max = ....


        // TO DO: Compute x-axis scale using the above computed min and max, using your original lab 4 code

        // TO DO: Append the scaled x-axis tick marks to the svg

        // TO DO: Compute y-axis min and max using dropdown choice
        // HINT: It may help to do...
            // var y_axis_min = d3.min(data, function(d){return d[selectedYAxisOption]});
            // var y_axis_max = ...

        // TO DO: Compute the y-axis scale using the above computed min and max

        // TO DO: Append the scaled y-axis tick marks to the svg


        // Append some text to scatterplot for the tooltips, the exact text will be added later
        // HINT: We provide this code for you to use below, it does not need to be changed
        svg_scatter.append("text")
            .attr("id", "scatterTooltip")
            .attr("opacity", 0)
            .style("padding", "10px")
            .attr("font-family", "sans-serif")
            .attr("font-size", "16px");


        // TO DO: draw your scatter plot
        // HINT: FIX THIS CODE. We provide many hints below.
        // svg_scatter.append("g")
            // .selectAll("dot")
            // .data(data)
            // .join("circle")
                // TO DO: Update the data being drawn (x- and y- positions) based on the user's dropdown choices
                // .attr("cx", function(d) {return xScale_scatter(...)}) 
                // .attr("cy", function(d) {return yScale_scatter(...)})
                // .attr("r", 6)
                // .attr("stroke", "black")
                // .attr("stroke-weight", 1)
                // .style("fill", function(d) {
                    // return ...
                // })
            // TO DO: Add functionality for the tooltip mouseover function
            // This function should display the data point's information when being hovered
            // .on("mouseover", function(event, d) {
                // TO DO: Change the radius size on hover
                // d3.select(this).style("r", ...)
            
                // TO DO: Add and position text to display x-axis values & y-axis label
                // svg_scatter.select("#scatterTooltip")
                //     .attr("x", 10)
                //     .attr("y", 10)
                //     .text(... + ": " + ...) // This should be '<x-axis label>: <x-axis value>'
                //     .attr("opacity", 1);

                // TO DO: Add and position text to display y-axis values & y-axis label
                // svg_scatter.select("#scatterTooltip").append("tspan")
                    // .attr("x", ...)
                    // .attr("y", ...)
                    // .text(... + ": " + ...]) // This should be '<y-axis label>: <y-axis value>'
                    // .attr("opacity", 1);

                // TO DO: Add and position text to display the variety
                // svg_scatter.select("#scatterTooltip").append("tspan")
                    // .attr("x", ...)
                    // .attr("y", ...)
                    // .text(... + ...) // This should be 'Variety: <variety value>'
                    // .attr("opacity", 1);
            // })
            // Code to 'remove' the tooltip information
            // .on("mouseleave", function(d) {
                // TO DO: Change the radius size when not hovered
                // d3.select(this).style("r", ...)

                // TO DO: remove tooltip when data point not being hovered
                // svg_scatter.select("#scatterTooltip")
                //     .transition()
                //     .duration(150)
                //     .attr("opacity", ...) // FIX THIS
            // })
            

        // TO DO: Add X axis label based on dropdown choices
        svg_scatter.append("text")
            .attr("class", "xAxisLabel")
            .attr("text-anchor", "end")
            .attr("x", width - 20)
            .attr("y", height + margin.top + 10)
            // Update x-axis label based on dropdown choice
            .text(function (d) { 
                return ""; // FIX THIS
            })
            
        // TO DO: Add Y axis label based on dropdown choices
        svg_scatter.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -margin.left + 20)
            .attr("x", -margin.top)
            // Update y-axis label based on dropdown choice
            .text(function (d) { 
                return ""; // FIX THIS
            })

        // TO DO: Add chart title based on dropdown choices
        svg_scatter.append("text")
            .attr("x", (width / 2))             
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            // Update chart title label based on dropdown choices
            .text(function (d) { 
                return ""; // FIX THIS
            });

        // TO DO: Add gridlines for both charts

    }
  
    // TO DO: Run the appropriate code when the dropdown menu is selected for x-axis choice
    // NOTE: We provide the below code to help you, you do not need to change it.
    d3.select("#xAxisDropdown").on("change", function(d) {
        console.log("inside xAxisDropdown(), x-axis has been changed to ", d3.select(this).property("value"))

        selectedXAxisOption = d3.select(this).property("value")
        // run the drawScatter function
        drawScatter();
    })

    // TO DO: Run the appropriate code when the dropdown menu is selected for y-axis choice
    d3.select("#yAxisDropdown").on("change", function(d) {
        // TO DO: FINISH THIS FUNCTION
    })


    /**********************************************************  
     TO DO: Complete the bar chart tasks

     NOTE: Below, we outline "to do" tasks that correspond
     to the tasks in your handout. These to do's are meant
     to help guide you towards a correct solution, however,
     you may implement your code in whichever way you'd like.
    **********************************************************/

    // TO DO: Calculate domain for AVG values
    // Add the values to your array
    // Compute the maximum and minimum values from the average values to use for later

    // TO DO: Calculate domain for MAX values
    // Add the values to your array
    // Compute the maximum and minimum values from the MAX values to use for later

    // TO DO: Calculate domain for MIN values
    // Add the MIN values to your array
    // Compute the maximum and minimum values from the MIN values to use for later

    // Create a scale for the x-axis that maps the x axis domain to the range of the canvas width
    xDomain = ['sepal.length','sepal.width','petal.length','petal.width']
    var xScale_bar = d3.scaleBand()
                .domain(xDomain)
                .range([0, width])
                .padding(0.4)

    // Variables to use for our bar chart. Update them in the drawBarChart()... function
    // NOTE: These values are given to you as a hint for how to implement the tasks below
    var all_y_values, min_y_value, max_y_value

    // For the first drawing, send in AVG as the default radio button
    // Call drawBarChart("AVG") here to draw the first instance of our plot
    drawBarChart("AVG");

    /************************************************************************************
        drawBarChart(radioValue): updates the bar chart after a radio button is selected
        radioValue: the string value selected from the radio button (AVG, MAX, MIN)

        Special note: This function needs to wrap around your entire scatter plot code
        and be called after a radio button is selected. If not, the plot won't
        be updated accordingly, as the bar chart will otherwise only be drawn once.

        Use "radioValue" to help as logic for assigning values in the chart.
        This route is one possible solution. There are others, but we suggest 
        you use this hint to implement yours.
    *************************************************************************************/
    // ADD YOUR BAR CHART CODE HERE AND UPDATE IT FOR THE TASKS
    function drawBarChart(radioValue) {
        // CLEAR THE BAR CHART & LEGEND CANVAS, as they are redrawn every time a radio button is selected 
        // Although this is a bit of a hacky workaround, this line will simplify everything for you down the line. 
        svg_bar.selectAll('*').remove();
        svg_bar_legend.selectAll('*').remove();

        // TO DO: Add logic for if the radio button is AVG, MAX, MIN
        // Note that "all_y_values" should be the entire array of corresponding values
        // "min_y_value" should be the minimum value in the array, and max_y_value should be the max value
        if (radioValue === "AVG") {
            all_y_values = 0 // FIX THIS
            min_y_value = 0 // FIX THIS
            max_y_value = 0 // FIX THIS
        } else if (radioValue === "MAX") {
            all_y_values = 0 // FIX THIS
            min_y_value = 0 // FIX THIS 
            max_y_value = 0 // FIX THIS
        } else {
            all_y_values = 0 // FIX THIS
            min_y_value = 0 // FIX THIS 
            max_y_value = 0 // FIX THIS
        } 
  
        // TO DO: Create the legend
        // This array of objects encodes each iris variety to an assigned color
        var bar_classes = ["#fee5d9", "#fcae91", "#fb6a4a", "#cb181d"]

        // FIX THESE
        // Rectangles for legend
        // svg_bar_legend.append("g")
        //     .selectAll("rect")
        //     .data(bar_classes)
        //     .join("rect")
        //     // Update the data being drawn based on the user's dropdown choices
        //     .attr("x", function(d,i) { ... })
        //     .attr("cy", 10)
        //     .attr("width", ...)
        //     .attr("height", ...)
        //     .style("fill", function(d) { 
        //         return ...; 
        //     })

        // FIX THESE
        // Legend title
        // svg_bar_legend.append("text")
        //     .attr("x", ...)
        //     .attr("y", ...)
        //     .text("")
        //     .style("font-size", "12px")
        //     .attr("alignment-baseline","middle")

        // FIX THESE
        // Legend minimum value on the left
        // svg_bar_legend.append("text")
        //     .attr("x", ...)
        //     .attr("y", ...)
        //     .text(Math.round(... * 100) / 100) // This rounds to 2 decimal places
        //     .style("font-size", "12px")
        //     .attr("alignment-baseline","middle")

        // FIX THESE
        // Legend maximum value on the right
        // svg_bar_legend.append("text")
        //     .attr("x", ...)
        //     .attr("y", ...)
        //     .text(Math.round(... * 100) / 100)
        //     .style("font-size", "12px")
        //     .attr("alignment-baseline","middle")

        // TO DO: Add your original x-axis tick marks and values

        // TO DO: Add your original sequential color map

        // TO DO: Add domain/range for y-axis, using the radio button selection
        // var yScale_bar = d3.scaleLinear()
        //             .domain([0, (1.05 * ...)])
        //             .range ([height, 0])

        // TO DO: Add your original y-axis tick marks and values

        // TO DO: Append bars to the bar chart with the appropriately scaled height
        // Make sure the height corresponds to the radio button selection
        // Color the bars using the sequential color map
        // svg_bar.selectAll("bar")
        //     .data(...)
        //     .join("rect")
        //     ...

        // TO DO: Add y-value for each bar, above the bar. Make sure y-value corresponds to radio button
        // svg_bar.selectAll("bar-title")
        //     .data(...)
        //     .enter()
        //     .append("text")
        //     .classed('bar-title', true)
        //     .attr('text-anchor', 'middle')
        //     .attr("x", d => ...) // Make sure x position is in line with the x-tick mark
        //     .attr("y", d => ...) // Make sure y position is above the bar
        //     .style("font", "11px monaco")
        //     .text(d => Math.round(... * 100) / 100) // Rounds value to 2 decimal places

        // Append original x-axis label
            
        // TO DO: Append y-axis label corresponding to radio button selection
        
        // TO DO: Append bar chart title corresponding to radio button selection

        // TO DO: Draw gridlines for both charts 
    }
    
    // The below code works similarly to the scatter plot's dropdown change function
    // Every time a radio button is selected, the function should call the drawBarChart(...)
    // function with the value being selected.
    d3.selectAll(("input[name='barChartButton']")).on("change", function() {
        console.log("radio button changed to ", this.value);

        // TO DO: Fix this
        // drawBarChart(...);
    });
})