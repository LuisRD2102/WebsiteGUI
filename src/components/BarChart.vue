<template>
    <div class="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div class="flex pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
                <i class="material-icons-outlined text-gray-600 text-4xl">bolt</i>
            </div>
            <div class="flex items-center text-xl">
                <h4>Energy report</h4>
            </div>
            <slot name="card-header"></slot>
        </div>

        <div id="column-chart"></div>
        <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
            <div class="flex justify-center items-center pt-5">
                <Button class="text-sm" label="Change data"></Button>
                <slot name="card-footer"></slot>
            </div>
        </div>
    </div>
</template>
  
<script>
// ApexCharts options and config
window.addEventListener("load", function () {
    const options = {
        colors: ["#1A56DB", "#FDBA8C"],
        series: [
            {
                name: "Energy Consumption",
                color: "#1A56DB",
                data: [
                    { x: "Jan", y: 231 },
                    { x: "Feb", y: 122 },
                    { x: "Mar", y: 63 },
                    { x: "Apr", y: 421 },
                    { x: "May", y: 122 },
                    { x: "Jun", y: 323 },
                    { x: "Jul", y: 111 },
                    { x: "Aug", y: 232 },
                    { x: "Sep", y: 113 },
                    { x: "Oct", y: 341 },
                    { x: "Nov", y: 224 },
                    { x: "Dec", y: 522 }
                ],
            },
            {
                name: "Solar Production",
                color: "#FDBA8C",
                data: [
                    { x: "Jan", y: 411 },
                    { x: "Feb", y: 243 },
                    { x: "Mar", y: 231 },
                    { x: "Apr", y: 122 },
                    { x: "May", y: 63 },
                    { x: "Jun", y: 421 },
                    { x: "Jul", y: 122 },
                    { x: "Aug", y: 323 },
                    { x: "Sep", y: 111 },
                    { x: "Oct", y: 232 },
                    { x: "Nov", y: 113 },
                    { x: "Dec", y: 341 }
                ],
            }
        ],
        chart: {
            type: "bar",
            height: "320px",
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadiusApplication: "end",
                borderRadius: 12,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        states: {
            hover: {
                filter: {
                    type: "darken",
                    value: 1,
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -14
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
        },
        xaxis: {
            floating: false,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
    }

    if (document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("column-chart"), options);
        chart.render();
    }
});
</script>
  