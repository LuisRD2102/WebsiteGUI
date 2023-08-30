<template>
    <div class="grid grid-cols-4 gap-4">
        <div>
            <div>
                Your current bill
            </div>
            <div>
                128$
            </div>
            <div class="flex flex-col space-y-2 p-2">
                <input id="myRange" type="range" class="w-full" value="0" min="0" max="25" step="5" />
                <ul id="sliderLabels" class="flex justify-between w-full px-[10px]">
                    <!-- Labels will be inserted here -->
                </ul>
            </div>
            <div class="pt-4">Current cost per kWh: $0.023/kWh</div>
        </div>
        <div id="bar-chart"></div>
        <div style="position: relative;">
            <div id="pie-chart"></div>
            <div class="text-center">Solar offset 125%</div>
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
        </div>
        <div>
            <div>Your solar payment 174$</div>
            <div>New utility bill 0$</div>
            <div>Avg 25 year per cost solar kWh: $0.032 kWh</div>
            <div class="pt-4">25-year saving</div>
            <div class="bg-primary">8.231$</div>
        </div>
    </div>
</template>

<script setup>
window.addEventListener("load", function () {
    const slider = document.getElementById('myRange');
    const labelsContainer = document.getElementById('sliderLabels');

    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const step = (max - min) / 5;  // Divide into 6 parts

    for (let i = min; i <= max; i += step) {
        const li = document.createElement('li');
        li.className = 'flex justify-center relative';
        li.innerHTML = `<span class="absolute">${Math.round(i)}</span>`;
        labelsContainer.appendChild(li);
    }
});

window.addEventListener("load", function () {
    const slider = document.getElementById('myRange');
    const labelsContainer = document.getElementById('sliderLabels');
    const yourPayment = 172;
    const currentBill = 120;

    const barChartoptions = {
        series: [
            {
                name: "Current Bill",
                data: [currentBill]
            },
            {
                name: "Your Payment",
                data: [yourPayment]
            }
        ],
        colors: ["#1A56DB", "#FDBA8C"],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                borderRadiusApplication: "end",
                borderRadius: 20,
            }
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['bill'],
        }
    };

    const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartoptions);
    barChart.render();

    // Update the bar chart when the slider value changes
    slider.addEventListener('change', function () {
    const year = parseInt(slider.value);
    let costPerKWh;
    if (year == 0) {
        costPerKWh = 0.247;
    } else if (year == 5) {
        costPerKWh = 0.301;
    } else if (year == 10) {
        costPerKWh = 0.366;
    } else if (year == 15) {
        costPerKWh = 0.445;
    } else if (year == 20) {
        costPerKWh = 0.542;
    } else if (year == 25) {
        costPerKWh = 0.659;
    }

    const billPerMonth = Math.round(costPerKWh * 486); // Consumo mensual en kWh

    // Update the series data
    barChart.updateSeries([
        { name: "Current Bill", data: [billPerMonth] },
        { name: "Your Payment", data: [yourPayment] }
    ]);
});

    const pieChartOptions = {
    series: [30,76],
    chart: {
        type: 'pie',
    },
    colors: ["#1A56DB", "#FDBA8C"],
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            }
        }
    }]
};


    const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartOptions);
    pieChart.render();
});
</script>

<style lang="scss" scoped></style>
