<template>
    <div class="flex justify-between pt-3 ps-1">
        <h4 class="text-lg font-semibold text-start ps-4">Your Solar Payment </h4>
        <h4 class="text-md font-semibold text-start text-white rounded-lg bg-primary px-4 my-auto">$ 174<sup>*</sup></h4>
    </div>


    <div class="ps-1 pb-6">
        <p class="ps-4 text-sm font-semibold">New utility bill 0$</p>
        <small class="ps-4 text-xsm font-semibold">Avg 25 year per cost solar kWh: $0.032 kWh</small>

    </div>



    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-3">
        <div class="w-full border-gray-200 border-r">
            <div class="ps-1 pb-3 pt-12">
                <p class="text-center text-sm font-semibold">Your current bill <span class="c-primary">{{ currentBill
                }}$</span></p>

            </div>
            <div class="flex flex-col space-y-2 p-2 px-3">
                <input id="myRange" type="range" class="w-full" value="0" min="0" max="25" step="5" />
                <ul id="sliderLabels" class="flex justify-between w-full px-[10px]">
                    <!-- Labels will be inserted here -->
                </ul>
            </div>
            <div class="ps-1 pb-3 pt-8">
                <p class="text-center text-sm font-semibold">Current cost per kWh: ${{ currentCostPerKwh }}/kWh</p>
            </div>

            <div class="pt-6 w-full">
                <div class="pt-4 w-full ps-1">
                    <p class="text-center text-sm font-semibold pb-2">25-year saving</p>
                </div>
                <div class=" w-full text-center flex justify-center items-center">
                    <h4 class="text-md font-semibold text-start text-white bg-primary my-auto px-4 rounded-lg ">8.231$</h4>
                </div>
            </div>

        </div>
        <div id="bar-chart" class="w-full " :key="barChartoptions"></div>
        <div style="position: relative;" class="w-full flex justify-center">
            <div class="w-full">
                <div id="pie-chart" :key="pieChartOptions"></div>
                <!-- <div class="text-center">Solar offset 125%</div> -->
                <p class="text-center text-sm font-semibold">Solar offset 125%</p>
            </div>

            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            currentBill: 120,
            yourPayment: 172,
            barChart: null,
            currentCostPerKwh: 0.0247,
            barChartoptions: {
                series: [
                    {
                        name: "Current Bill",
                        data: [120]
                    },
                    {
                        name: "Your Payment",
                        data: [172]
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
                        borderRadius: 45,
                    }
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Bill'],
                }
            },
            pieChartOptions: {
                series: [30, 76],
                chart: {
                    type: 'pie',
                    height: 325,

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
                            width: 325
                        }
                    }
                }]
            }
        };
    },
    mounted() {
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

        this.barChart = new ApexCharts(document.querySelector("#bar-chart"), this.barChartoptions);
        this.barChart.render();

        // Update the bar chart when the slider value changes
        slider.addEventListener('change', this.updateChart);

        const pieChart = new ApexCharts(document.querySelector("#pie-chart"), this.pieChartOptions);
        pieChart.render();
    },
    methods: {
        updateChart() {
            const slider = document.getElementById('myRange');
            const year = parseInt(slider.value);

            if (year == 0) {
                this.currentCostPerKwh = 0.247;
            } else if (year == 5) {
                this.currentCostPerKwh = 0.301;
            } else if (year == 10) {
                this.currentCostPerKwh = 0.366;
            } else if (year == 15) {
                this.currentCostPerKwh = 0.445;
            } else if (year == 20) {
                this.currentCostPerKwh = 0.542;
            } else if (year == 25) {
                this.currentCostPerKwh = 0.659;
            }

            const billPerMonth = Math.round(this.currentCostPerKwh * 486); // Consumo mensual en kWh
            this.currentBill = billPerMonth;

            // Update the series data
            this.barChart.updateSeries([
                { name: "Current Bill", data: [billPerMonth] },
                { name: "Your Payment", data: [this.yourPayment] }
            ]);
        }
    }
}
</script>

<style lang="scss" scoped></style>
